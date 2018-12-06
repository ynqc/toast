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

| Name  | Type     | default  | required | Description |
| :---- | :------: | :------: | :------: | :--- |
| message | `string`   | `-` | true | Toast content |
| duration | `number`   | `3` | false | Delay time to close, unit is second |
| closeCallback | `function`   | `-` | false| A callback function triggered when the toast is closed |
| closeOpacity | `number`   | `0` | false | Opacity when the toast is closed |

>notice When duration = 0, onClose is invalid, toast does not disappear; hidden toast needs to be called Toast.hide()

> hide()

```javascript
static hide()   // global destroy method of toast
```

