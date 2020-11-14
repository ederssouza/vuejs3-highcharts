<template>
  <ColumnChart
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
    :plotOptions="chart.plotOptions"
  />
</template>

<script>
import ColumnChart from 'components/charts/ColumnChart'

export default {
  name: 'ColumnChartSample',
  components: {
    ColumnChart
  },
  data () {
    return {
      chart: {
        title: 'Column chart title',
        subtitle: 'Column chart subtitle',
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
            color: '#03bbd4',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          },
          {
            name: 'Manufacturing',
            color: '#f7a35c',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
          }
        ],
        crosshair: true,
        customStyles: {
          color: '#666',
          fontFamily: 'Nunito Sans'
        },
        plotOptions: {
          column: {
            borderRadius: 2
          }
        }
      }
    }
  }
}
</script>
