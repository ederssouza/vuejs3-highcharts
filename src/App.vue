<template>
  <div>
    <Header />

    <div class="wrapper">
      <Menu />
      <router-view />
    </div>

    <ColumnChart :xAxis="chart.xAxis" :series="chart.series" />

    <Footer />
  </div>
</template>

<script>
import Header from 'components/Header'
import Menu from 'components/Menu'
import Footer from 'components/Footer'
import { ColumnChart } from '../dist/vuejs-highcharts.umd'

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    Footer,
    ColumnChart
  },
  data () {
    return {
      chart: {
        xAxis: {
          categories: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007]
        },
        series: [
          {
            name: 'Installation',
            color: '#03bbd4',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          },
          {
            name: 'Manufacturing',
            color: '#f7a35c',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
          }
        ]
      }
    }
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
