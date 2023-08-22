import type { FC, PropsWithChildren } from 'react';
import React, { useEffect, useRef } from 'react';
import { Animated, View } from 'react-native';
import type { ViewProps } from 'react-native';

export const FadeInView: FC<
  PropsWithChildren<
    {
      duration?: number;
      opacity: number;
      visible: boolean;
    } & ViewProps
  >
> = ({ children, visible, opacity, duration = 250, ...props }) => {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const animation = Animated.timing(fadeAnim, {
    toValue: 1,
    duration,
    useNativeDriver: true,
  });
  useEffect(() => {
    if (visible) animation.start();
    return () => animation.stop();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fadeAnim, visible]);

  return (
      <View {...props} style={{ opacity: visible ? opacity : 0 }}>
        <Animated.View style={{ opacity: fadeAnim }}>{children}</Animated.View>
      </View>

  );
};
