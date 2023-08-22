import React from 'react';

export type Notification = {
  id: string;
  type: NotificationTypes;
  message: string | React.ReactNode;
  created: number;
  status: 'active' | 'closed';
  visible: boolean;
};

export type NotificationTypes = 'error' | 'success' | 'info';

export type PosType = {
  posX: number;
  posY: number;
};

export type voidFn<T = any> = (arg: T) => void;
export type voidFnE = () => void;
