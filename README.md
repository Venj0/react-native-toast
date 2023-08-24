# react-native-notify

toast for react app

## Installation

```sh
npm i @venjo/react-native-notify
```
###or
```sh
yarn add @venjo/react-native-notify
```

# Usage

app.js
```js
import {   NotifyContainer } from '@venjo/react-native-notify/lib/commonjs';


// ...

<NotifyContainer configs={configs}/>
// ...

```

someComponent.js

```js
import {   useNotify } from '@venjo/react-native-notify/lib/commonjs';


const SomeComponent = ()=> {

  const Notify = useNotify();

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
}

```


## TYPES
### config

```ts
type config = {
    kippingTime?: number      // 10000ms
    theme?: Partial<Theme>
    maxVisibleCount?: number  // 3
} | undefind
```
### Theme
```ts
type Theme = {
  baseSize: number      // 16
  colors: {
    background: string  // #eee0d7
    success: string     // #6AC45B
    error: string       // #d51a52
    info: string        // #1a43d5
  }
  fonts: {
    title: StyleProp<TextStyle>     // fontSize: 22, lineHeight: 32, fontWeight: '600', letterSpacing: 0,
    content: StyleProp<TextStyle>   // fontSize: 16, lineHeight: 24, fontWeight: '400', letterSpacing: 0,
  }
  shadow: {
    shadowColor: string       // #000000
    elevation: number         // 20
    shadowOffset: {           // { width: 0, height: 0 }
      width: number
      height: number
    }
    shadowOpacity: number     // 0.3
    shadowRadius: number      // 10
  }
}
```

## expo
android
![android](./assets/android.png "Android")
ios
![ios](./assets/ios.png "Ios")

---

## Contacts

 - siradeghyansmbat@gmail.com
 - [linkidin - /in/smbat-siradeghyan](https://www.linkedin.com/in/smbat-siradeghyan/)
