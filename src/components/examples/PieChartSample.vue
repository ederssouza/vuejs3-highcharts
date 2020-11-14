<template>
  <PieChart
    :title="chart.title"
    :subtitle="chart.subtitle"
    :backgroundColor="chart.backgroundColor"
    :gridLineColor="chart.gridLineColor"
    :colors="chart.colors"
    :thousandsSep="chart.thousandsSep"
    :decimalPoint="chart.decimalPoint"
    :height="chart.height"
    :yAxis="chart.yAxis"
    :xAxis="chart.xAxis"
    :series="chart.series"
    :customStyles="chart.customStyles"
  />
</template>

<script>
import PieChart from 'components/charts/PieChart'

export default {
  name: 'PieChartSample',
  components: {
    PieChart
  },
  data () {
    return {
      chart: {
        title: 'Pie chart title',
        subtitle: 'Pie chart subtitle',
        backgroundColor: '#fff',
        gridLineColor: '#ccd6eb',
        colors: [
          '#fdcd01', '#ffec47', '#a1c653', '#5baca7', '#61a6df', '#62aec5', '#904576', '#c04999', '#eb4f88', '#f15958', '#df8135', '#fd970f'
        ],
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
        series: [{
          data: [{
            name: 'Chrome',
            y: 61.41
          }, {
            name: 'Internet Explorer',
            y: 11.84
          }, {
            name: 'Firefox',
            y: 10.85
          }, {
            name: 'Edge',
            y: 4.67
          }, {
            name: 'Safari',
            y: 4.18
          }, {
            name: 'Sogou Explorer',
            y: 1.64
          }, {
            name: 'Opera',
            y: 1.6
          }, {
            name: 'QQ',
            y: 1.2
          }, {
            name: 'Other',
            y: 2.61
          }]
        }],
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
