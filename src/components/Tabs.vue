<template>
  <div class="tabs">
    <ul class="tabs__list">
      <li :class="{ 'active': currentTab === 'tab1' }">
        <a @click.prevent="handleClick('tab1')">Preview</a>
      </li>

      <li :class="{ 'active': currentTab === 'tab2' }">
        <a @click.prevent="handleClick('tab2')">Code</a>
      </li>
    </ul>

    <section v-show="currentTab === 'tab1'" class="tabs__content">
      <slot name="preview"></slot>
    </section>

    <section v-show="currentTab === 'tab2'" class="tabs__content">
      <slot name="code"></slot>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Tabs',
  data () {
    return {
      currentTab: 'tab1'
    }
  },
  methods: {
    handleClick (target) {
      this.currentTab = target
    }
  }
}
</script>

<style lang="scss" scoped>
.tabs {
  margin-bottom: 16px;
}

.tabs__list {
  list-style-type: none;
  padding: 0;
  margin: 0;
  position: relative;
  top: 2px;

  li {
    display: inline-block;
    position: relative;
    z-index: 0;

    + li {
      left: -1px;
    }

    a {
      background-color: #ebf1f3;
      border: 1px solid #afc4cc;
      border-radius: 6px 6px 0 0;
      color: #7a858b;
      cursor: pointer;
      display: block;
      font-size: 11px;
      font-weight: 400;
      padding: 12px 16px;
      text-transform: uppercase;
    }

    &.active {
      z-index: 3;

      a {
        background-color: #fff;
        border-bottom: none;
        color: #636a6d;
        font-weight: 600;
        cursor: default;
      }
    }
  }
}

.tabs__content {
  background-color: #fff;
  border: 1px solid #afc4cc;
  border-radius: 0 6px 6px 6px;
  padding: 16px;
  position: relative;
  z-index: 2;
}
</style>
