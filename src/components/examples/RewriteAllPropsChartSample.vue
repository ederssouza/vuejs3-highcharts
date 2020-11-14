<template>
  <ColumnChart
    :xAxis="chart.xAxis"
    :series="chart.series"
    :config="chart.config"
  />
</template>

<script>
import ColumnChart from 'components/charts/ColumnChart'

export default {
  name: 'RewriteAllPropsChartSample',
  components: {
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
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          },
          {
            name: 'Manufacturing',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
          }
        ],
        config: {
          colors: ['#2f7ed8', '#0d233a'],
          credits: {
            enabled: true
          },
          caption: {
            text: '<b>The caption renders in the bottom, and is part of the exported chart.</b>'
          }
        }
      }
    }
  }
}
</script>
