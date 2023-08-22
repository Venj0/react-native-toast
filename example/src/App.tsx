import type { FC } from 'react';
import * as React from 'react';
import { memo, useRef } from 'react';

import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNotify, NotifyContainer } from 'react-native-toast';

export default function App() {
  // const [result, setResult] = React.useState<number | undefined>();

  // React.useEffect(() => {
  //   multiply(3, 7).then(setResult);
  // }, []);

  return (
    <View style={styles.container}>
      <NotifyContainer configs={{ kippingTime: 10000 }} />
      <Buttons />
    </View>
  );
}

const Buttons: FC = memo(() => {
  const Notify = useNotify();
  const renderCount = useRef<number>(0);

  console.log({ ButtonsRenderCount: renderCount.current++ });

  // console.log({notify:Object.keys(Notify ||{})});

  const onError = () => {
    Notify.error('some error message');
  };
  const onSuccess = () => {
    Notify.success('some success message');
  };
  const onInfo = () => {
    Notify.info('some info message');
  };

  return (
    <>
      <TouchableOpacity onPress={onError}>
        <Text>Error</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onSuccess}>
        <Text>Success</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={onInfo}>
        <Text>Info</Text>
      </TouchableOpacity>
    </>
  );
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 32,
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
