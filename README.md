# toast-ynqc
    
    A react native module to show toast, it works on iOS and Android.
    
[![NPM](https://nodei.co/npm/toast-ynqc.png)](https://nodei.co/npm/toast-ynqc/)

## Getting started

`$ npm install toast-ynqc --save`

##  Usage
```javascript
import Toast from 'toast-ynqc';

Toast.info('ynqc');
Toast.info('loading...', 0);
Toast.info('ynqc', 3, () => {});
Toast.info('loading...', 0, () => {}, 1);
Toast.hide();
```

## Methods

> info()

```javascript
static info(message, duration, closeCallback, closeOpacity)
```

Parameters:

| Name  | Type     | default | Description |
| :---- | :------: | :------: | :--- |
| message | `string`   | `-` | Toast content |
| duration | `number`   | `3` | Delay time to close, which units is second |
| closeCallback | `function`   | `-` | A callback function Triggered when the Toast is closed |
| closeOpacity | `number`   | `0` | Opacity when the Toast is closed |

> hide()

```javascript
static hide()   // global destroy method of toast
```

