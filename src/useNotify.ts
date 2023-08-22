import { useState } from 'react';

export const useNotify = () => {
  const [rerender, setRerender] = useState<boolean>(false);

  // @ts-ignore
  if (global.notify)
    // @ts-ignore
    return global.notify;
  else {
    if (!rerender) setRerender(true);
    // @ts-ignore
    if (global.notify)
      // @ts-ignore
      return global.notify;
    else console.error('something went wrong');
  }
};
