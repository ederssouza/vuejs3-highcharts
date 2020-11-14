<template>
  <div>
    <Header />

    <div class="wrapper">
      <Menu />
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>
import Header from 'components/Header'
import Menu from 'components/Menu'
import Footer from 'components/Footer'

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Footer
  }
}
</script>

<style lang="scss">
@import 'assets/scss/app.scss';

#app {
  position: relative;
  top: 80px;
}
</style>
