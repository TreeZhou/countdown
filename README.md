# countdown

倒数组件 A simple countdown component for vue js 2.0

![](https://github.com/TreeZhou/countdown/blob/master/preview.gif)

## Usage

```html
<!-- auto mode -->
<countdown ref="countdown" :size="160" :time="10" />
<!-- manual mode -->
<countdown ref="countdown-manual" :size="160" :time="10" mode="manual" />
<!-- static mode -->
<countdown ref="countdown-static" :size="160" :time="10" mode="static" />
```

```js
import Countdown from '@TreeZhou/countdown';
export default {
  components:{
    Countdown
  }
  methods: {
    play() {
      this.$refs['countdown'].play();
    },

    setTime() {
      let countdown = this.$refs['countdown-manual'];
      let time = 10;
      countdown.setTime(time);
      let timer = setInterval(() => {
        time--;
        if (time === 0) {
          countdown.setTime(time);
          clearInterval(timer);
          return;
        }
        countdown.setTime(time);
      }, 1000);
    },

    setStaticTime() {
      let time = 8;
      this.$refs['countdown-static'].setStaticTime(time);
    }
  }
};
```

## Attributes

| 参数          | 类型   | 必填  | 可选                   | 默认值  | 说明                                                                                 |
| ------------- | ------ | ----- | ---------------------- | ------- | ------------------------------------------------------------------------------------ |
| time          | number | true  | -                      | -       | 倒计时的开始时间                                                                     |
| size          | number | true  | -                      | -       | 组件尺寸，单位 px                                                                    |
| mode          | string | false | auto、manual、static、 | auto    | auto:自动倒计时； manual：由父组件设定定时器传入要显示的时间； static:显示设置的时间 |
| bg-color      | string | false | -                      | #fff    | 背景颜色                                                                             |
| interval      | number | false | -                      | #0e65ff | 间隔时间,单位 ms                                                                     |
| annulus-color | string | false | -                      | -       | 圆环色                                                                               |
| font-color    | string | false | -                      | #000    | 字体色                                                                               |

## Methods

| 方法名  | 参数        | 说明     | 返回 |
| ------- | ----------- | -------- | ---- |
| reset   | -           | 重置     | -    |
| setMode | mode:string | 设置模式 | -    |

## Auto Mode Methods

| 方法名 | 参数 | 说明                                                               | 返回    |
| ------ | ---- | ------------------------------------------------------------------ | ------- |
| play   | -    | 开始倒计时,倒计时结束时调用 promise 的 resole;只在 auto 模式下生效 | promise |
| pause  | -    | 暂停倒计时 ;只在 auto 模式下生效                                   | -       |

## Manual Mode Methods

| 方法名  | 参数 | 说明                                   | 返回 |
| ------- | ---- | -------------------------------------- | ---- |
| setTime | -    | 设置显示的时间 ;只在 manual 模式下生效 | -    |

## Static Mode Methods

| 方法名        | 参数 | 说明                                   | 返回 |
| ------------- | ---- | -------------------------------------- | ---- |
| setStaticTime | -    | 设置显示的时间 ;只在 static 模式下生效 | -    |

## Auto Mode Events

| 事件名 | 回调参数 | 说明             |
| ------ | -------- | ---------------- |
| end    | -        | 倒计时结束时触发 |
