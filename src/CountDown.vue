<template>
  <div class="wrap" :style="bgStyle">
    <!-- 倒计时背景 -->
    <div class="abs" :style="bgStyle">
      <div class="annulus-OD abs_both_middle" :style="annulusODStyle">
        <div class="annulus-ID abs_both_middle" :style="annulusIDStyle"></div>
      </div>
    </div>

    <!-- 旋转遮罩左半边 -->
    <div
      :style="[rotateCoverStyle, leftCover, bgStyle, clipLeftStyle]"
      class="abs"
    ></div>

    <!-- 倒计时背景左半边 -->
    <div class="abs" :style="[bgStyle, clipLeftStyle]">
      <div class="annulus-OD abs_both_middle" :style="annulusODStyle">
        <div class="annulus-ID abs_both_middle" :style="annulusIDStyle"></div>
      </div>
    </div>

    <!-- 旋转遮罩右半边 -->
    <div
      :style="[rotateCoverStyle, rightCover, bgStyle, clipRightStyle]"
      class="abs"
    ></div>
    <strong class="second abs_both_middle" :style="secondStyle">
      {{ currentTime }}s
    </strong>
  </div>
</template>

<script>
//mode的可选值
const modeOptions = ['auto', 'manual', 'static'];

export default {
  props: {
    //倒计时的时间
    time: {
      type: Number,
      default: 0,
      required: true
    },
    // 组件尺寸，单位px
    size: {
      type: Number,
      default: 0,
      required: true
    },
    bgColor: {
      type: String,
      default: '#fff'
    },
    // 倒计时间隔时间,单位毫秒
    interval: {
      type: Number,
      default: 1000
    },
    // 圆环外径背景颜色
    annulusColor: {
      type: String,
      default: '#0e65ff'
    },

    fontColor: {
      type: String,
      default: '#000'
    },
    mode: {
      type: String,
      default: 'auto',
      validator: value => modeOptions.indexOf(value) > -1
    }
  },
  data() {
    return {
      CurrentMode: '',
      currentTime: 0,
      timer: null,
      ani: false, //是否显示transition
      showProess: false, //是否显示时间进度

      // auto模式下的判断参数
      autoParams: {
        autoing: false, //是否正在倒数中
        isEnd: false
      }
    };
  },
  computed: {
    bgStyle() {
      return {
        width: this.size + 'px',
        height: this.size + 'px',
        backgroundColor: this.bgColor
      };
    },
    annulusODStyle() {
      return {
        backgroundColor: this.annulusColor
      };
    },
    annulusIDStyle() {
      return {
        backgroundColor: this.bgColor
      };
    },
    clipLeftStyle() {
      return {
        clip: `rect(0px,
                    ${this.size / 2}px,
                    ${this.size}px,
                    0px)`
      };
    },
    clipRightStyle() {
      return {
        clip: `rect(0px,
                    ${this.size}px,
                    ${this.size}px,
                    ${this.size / 2}px)`
      };
    },
    secondStyle() {
      return {
        'font-size': this.size * 0.3 + 'px',
        color: this.fontColor
      };
    },
    rotateCoverStyle() {
      // -webkit-transform 兼容低版本IOS
      return {
        '-webkit-transition-property': this.ani
          ? '-webkit-transform'
          : 'opacity',
        transitionDuration: this.interval / 1000 + 's',
        transitionTimingFunction: 'linear'
      };
    },

    /*修正参数 amendment
     *使用transition动画时，为1，否则为0。
     */
    amendment() {
      return this.CurrentMode === 'static' ? 0 : 1;
    },
    leftCover() {
      let rotate, zIndex;

      if (!this.showProess) {
        rotate = 0;
        zIndex = -1;
      } else if (this.currentTime <= this.time / 2) {
        rotate = 180;
        zIndex = 1;
      } else {
        rotate =
          (180 / (this.time / 2)) *
          (this.time - this.currentTime + this.amendment);
        zIndex = 0;
      }
      return {
        transform: `rotate(${rotate}deg) scale(0.95)`,
        'z-index': zIndex
      };
    },
    rightCover() {
      let rotate, zIndex;

      if (this.currentTime === 0) {
        rotate = 180;
        zIndex = 1;
      } else if (this.currentTime > this.time / 2) {
        rotate = 0;
        zIndex = -1;
      } else {
        rotate =
          (180 / (this.time / 2)) *
          (this.time / 2 - this.currentTime + this.amendment);
        zIndex = 1;
      }

      return {
        transform: `rotate(${rotate}deg) scale(0.95)`,
        'z-index': zIndex
      };
    }
  },
  methods: {
    init() {
      clearInterval(this.timer);
      Object.assign(this.$data, this.$options.data());
      this.currentTime = this.time;
      this.CurrentMode = this.mode;
    },
    play() {
      this.isContinue('auto');
      if (this.autoParams.isEnd) {
        this.init();
      }
      if (this.autoParams.autoing) return console.error('已经在倒数中');
      this.autoParams.autoing = true;

      //延迟50毫秒：给transition重置的时间
      let timer = setTimeout(() => {
        this.ani = true;
        this.showProess = true;
        return new Promise(resolve => {
          this.timer = setInterval(() => {
            this.currentTime--;
            if (this.currentTime === 0) {
              resolve();
              this.end();
            }
          }, this.interval);
        });
        clearTimeout(timer);
      }, 50);
    },
    pause() {
      this.isContinue('auto');
      this.autoParams.autoing = false;
      if (this.currentTime !== 1) {
        clearInterval(this.timer);
      }
    },
    reset() {
      this.init();
    },
    end() {
      this.autoParams.autoing = false;
      this.autoParams.isEnd = true;
      clearInterval(this.timer);
      this.$emit('end');
    },

    //设置实例开始倒计时的时间，
    setTime(time) {
      this.isContinue('manual');
      this.ani = true;
      this.showProess = true;
      this.currentTime = time;
    },

    //设置实例显示的时间
    setStaticTime(time) {
      this.isContinue('static');
      this.showProess = true;
      this.ani = false;
      this.currentTime = time;
    },

    isContinue(mode) {
      if (this.CurrentMode === mode) return true;
      throw new Error(`当前模式为${this.CurrentMode},请先调用setMode重置模式`);
    },

    setMode(mode) {
      if (!modeOptions.indexOf(mode) > -1) {
        throw new Error('mode的可选值为:' + modeOptions.join('、'));
      }
      this.init();
      this.CurrentMode = mode;
    }
  },
  created() {
    this.init();
  }
};
</script>

<style scoped>
* {
  font-size: 0;
}
.abs_both_middle {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.wrap {
  position: relative;
  border-radius: 50%;
}
.abs {
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 50%;
}
/* 半环外径  */
.annulus-OD {
  border-radius: 50%;
  width: 88%;
  height: 88%;
}
/* 半环内径  */
.annulus-ID {
  border-radius: 50%;
  width: 80%;
  height: 80%;
}
.second {
  z-index: 1;
  width: 100%;
  text-align: center;
}
</style>