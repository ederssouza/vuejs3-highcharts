<template>
  <LineChart
    :title="chart.title"
    :subtitle="chart.subtitle"
    :backgroundColor="chart.backgroundColor"
    :gridLineColor="chart.gridLineColor"
    :thousandsSep="chart.thousandsSep"
    :decimalPoint="chart.decimalPoint"
    :height="chart.height"
    :yAxis="chart.yAxis"
    :xAxis="chart.xAxis"
    :series="chart.series"
    :crosshair="chart.crosshair"
    :customStyles="chart.customStyles"
  />
</template>

<script>
import LineChart from 'components/charts/LineChart'

export default {
  name: 'LineChartSample',
  components: {
    LineChart
  },
  data () {
    return {
      chart: {
        title: 'Line chart title',
        subtitle: 'Line chart subtitle',
        backgroundColor: '#fff',
        gridLineColor: '#ccd6eb',
        thousandsSep: '.',
        decimalPoint: ',',
        height: 400,
        xAxis: {
          title: {
            text: 'xAxis title'
          },
          categories: [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007]
        },
        yAxis: {
          title: {
            text: 'yAxis title'
          }
        },
        series: [
          {
            name: 'Installation',
            type: 'spline',
            color: '#03bbd4',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          },
          {
            name: 'Manufacturing',
            type: 'spline',
            color: '#f7a35c',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
          }
        ],
        crosshair: true,
        customStyles: {
          color: '#666',
          fontFamily: 'Nunito Sans'
        }
      }
    }
  }
}
</script>
