<template>
  <footer class="footer">
    <span class="copyright">
      VueJS Highcharts v{{ version }} - Template created exclusively for <a href="https://tympanus.net/codrops/?p=33686" target="_blank" class="link link--light">Codrops</a>.</span>
  </footer>
</template>

<script>
import { version } from '../../package.json'

export default {
  name: 'Footer',
  computed: {
    version () {
      return version
    }
  }
}
</script>

<style lang="scss" scoped>
.footer {
  background-color: #333;
  color: white;
  font-size: 12px;
  padding: 2rem;
  text-align: center;

  .copyright {
    display: block;
  }
}
</style>
