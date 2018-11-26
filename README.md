# toast-ynqc
    
    A react native module to show toast, it works on iOS and Android.
    
[![NPM](https://nodei.co/npm/toast-ynqc.png)](https://nodei.co/npm/toast-ynqc/)

## Getting started

`$ npm install toast-ynqc --save`

##  Usage
```javascript
import Toast from 'toast-ynqc';

Toast.info('ynqc');
Toast.info('正在下载...', 0);
Toast.info('ynqc', 3, () => {});
Toast.info('正在下载...', 0, () => {}, 1);
Toast.hide();
```

##  Mehtod
> info()

```javascript
static info(message, duration, closeCallback, closeOpacity)
```
> hide()

```javascript
static hide()
```
