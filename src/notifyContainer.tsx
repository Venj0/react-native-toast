import type { FC, ReactNode } from 'react';
import React, { useMemo, useRef, useState } from 'react';
import { View } from 'react-native';
import { NotifyCard } from './components/card';
import { getStyles } from './components/style';
import { notificationKeepingTime } from './consts';
import type { Theme } from './thame';
import { myTheme } from './thame';
import type { Notification, NotificationTypes, voidFn } from './types';

interface NotifyContainerProps {
  configs?: {
    kippingTime?: number;
    theme?: Partial<Theme>;
    maxVisibleCount?: number;
  };
}

type Notify = {
  [K in NotificationTypes]: voidFn<string | ReactNode>;
};

export const NotifyContainer: FC<NotifyContainerProps> = ({ configs }) => {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const count = useRef<number>(0);

  const maxVisibleCount = configs?.maxVisibleCount || 3;

  const kippingTime = configs?.kippingTime || notificationKeepingTime;
  const styles = useMemo(
    () =>
      getStyles({
        ...myTheme,
        ...configs?.theme,
      }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  const addNotification = (
    message: string | ReactNode,
    type: NotificationTypes
  ) =>
    setNotifications(
      (current) =>
        [
          {
            id: Date.now() + '-' + count.current++,
            message,
            created: Date.now(),
            type,
            status: 'active',
            visible: true,
          },
          ...current,
        ].slice(0, maxVisibleCount) as Notification[]
    );

  const onClose = (id: string) =>
    setNotifications((current) => current.filter((notify) => notify.id !== id));

  const notify: Notify = {
    success: (message) => addNotification(message, 'success'),
    error: (message) => addNotification(message, 'error'),
    info: (message) => addNotification(message, 'info'),
  };

  // @ts-ignore
  if (!global.notify) global.notify = notify;

  return (
    <View style={styles.container}>
      {notifications.map((notification) => (
        <NotifyCard
          key={notification.id}
          {...{
            ...notification,
            styles,
            kippingTime,
            onClose: () => onClose(notification.id),
          }}
        />
      ))}
    </View>
  );
};
