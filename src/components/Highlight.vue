<template>
  <prism
    v-if="visible"
    :language="language"
    class="prism"
    :class="[
      { 'prism--fixed': fixed },
      { 'prism--bottom': bottom },
      { 'prism--left': left },
      { 'prism--right': right },
      { 'prism--top': top },
    ]"
  >
    <slot></slot>
  </prism>
</template>

<script>
import Prism from 'vue-prism-component'
import 'prismjs'
// import 'prismjs/themes/prism-coy.css'
// import 'prismjs/themes/prism-dark.css'
// import 'prismjs/themes/prism-funky.css'
// import 'prismjs/themes/prism-okaidia.css'
// import 'prismjs/themes/prism-solarizedlight.css'
// import 'prismjs/themes/prism-tomorrow.css'
// import 'prismjs/themes/prism-twilight.css'
import 'prismjs/themes/prism.css'

export default {
  name: 'Highlight',
  props: {
    language: {
      type: String,
      default: 'javascript'
    },
    fixed: {
      type: Boolean,
      default: false
    },
    bottom: {
      type: Boolean,
      default: false
    },
    left: {
      type: Boolean,
      default: false
    },
    right: {
      type: Boolean,
      default: false
    },
    top: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Prism
  },
  computed: {
    visible () {
      return process.env.NODE_ENV === 'development'
    }
  }
}
</script>

<style lang="scss" scoped>
.prism {
  border: 1px solid #ccc;
  font-size: 12px;
  overflow-x: hidden;
  overflow-y: auto;
  height: 100%;

  code {
    background-color: transparent;
    border-radius: 0;
    height: 100%;
    padding: 10px;
  }

  &:before,
  &:after {
    display: none;
  }
}

.prism--fixed {
  position: fixed;
  z-index: 10;

  &.prism--bottom {
    bottom: 0;
  }

  &.prism--left {
    left: 0;
  }

  &.prism--right {
    right: 0;
  }

  &.prism--top {
    top: -6px;
  }
}
</style>
