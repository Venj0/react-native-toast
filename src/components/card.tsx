import React from 'react';
import type { GestureResponderEvent, LayoutChangeEvent } from 'react-native';
import { Pressable, Text, View } from 'react-native';
import type { Notification, PosType, voidFnE } from '../types';
import { CloseIcon } from './closeIcon';
import { FadeInView } from './fadeInview';
import { Progress } from './progress';
import type { Styles } from './style';

const NotifyNames = {
  error: 'Error',
  success: 'Success',
  info: 'Info',
};

const initPos = { posX: 0, posY: 0 };

interface NotifyCardProps extends Notification {
  styles: Styles;
  kippingTime: number;
  onClose: voidFnE;
}

export const NotifyCard: React.FC<NotifyCardProps> = React.memo(
  ({ type, visible, styles, id, onClose, kippingTime, message }) => {
    const [pressed, setPressed] = React.useState<boolean>(false);

    const [pos, setPos] = React.useState<PosType>(initPos);
    const ref = React.useRef(initPos);

    const [height, setHeight] = React.useState<number>(0);
    const closeCard = () => {
      setPressed(true);
      onClose();
    };

    const onTouchStart = (event: GestureResponderEvent) => {
      ref.current = {
        posX: event.nativeEvent.pageX,
        posY: event.nativeEvent.pageY,
      };
      setPressed(true);
    };
    const onTouchEnd = () => {
      if (Math.abs(pos.posX) > 150) {
        closeCard();
      } else {
        setPos(initPos);
        setPressed(false);
      }
    };
    const onTouchMove = (event: GestureResponderEvent) => {
      setPos({
        posX: ref.current.posX - event.nativeEvent.pageX,
        posY: event.nativeEvent.pageY - ref.current.posY,
      });
    };

    const onLayout = (event: LayoutChangeEvent) => {
      // console.log(event.nativeEvent.layout);
      if (event.nativeEvent.layout.height !== height)
        setHeight(event.nativeEvent.layout.height);
    };

    const opacity = Math.max((150 - Math.abs(pos.posX)) / 100, 0.2);

    return (
      <FadeInView
        {...{ id, onTouchEnd, onTouchStart, onTouchMove, visible, opacity }}
      >
        <View style={{ height }}>
          <View style={styles.card(pos)} onLayout={onLayout}>
            <Text style={styles.cardTitle(type)}>{NotifyNames[type]}</Text>
            {typeof message === 'string' ? (
              <Text style={styles.cardBody}>{message}</Text>
            ) : (
              message
            )}
            <Pressable style={styles.cardClose} onPress={closeCard}>
              <CloseIcon />
            </Pressable>

            <View style={{ height: 10 }}>
              <Progress
                {...{ kippingTime, type, pressed, styles, onClose: closeCard }}
              />
            </View>
          </View>
        </View>
      </FadeInView>
    );
  },
  () => true
);
