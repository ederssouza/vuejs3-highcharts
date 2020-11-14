<template>
  <div class="vuejs-highcharts" ref="pieChart" />
</template>

<script>
import Highcharts from 'highcharts'

export default {
  name: 'PieChart',
  props: {
    config: {
      type: Object,
      default: () => {}
    },
    height: {
      type: [Number, String],
      default: 400
    },
    title: {
      type: String,
      default: ''
    },
    subtitle: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: '#ffffff'
    },
    xAxis: {
      type: Object,
      default: () => {}
    },
    yAxis: {
      type: Object,
      default: () => ({
        title: {
          text: ''
        }
      })
    },
    series: {
      type: Array,
      required: true
    },
    legend: {
      type: Object,
      default: () => {}
    },
    thousandsSep: {
      type: String,
      default: '.'
    },
    decimalPoint: {
      type: String,
      default: ','
    },
    customStyles: {
      type: Object,
      default: () => {}
    },
    gridLineColor: {
      type: String,
      default: '#e6e6e6'
    },
    colors: {
      type: Array,
      default: () => []
    },
    tooltip: {
      type: Object,
      default: () => {}
    },
    plotOptions: {
      type: Object,
      default: () => {}
    }
  },
  computed: {
    allProps () {
      return {
        date: new Date(),
        ...this.$props
      }
    }
  },
  data () {
    return {
      chart: null
    }
  },
  methods: {
    renderChart () {
      const {
        backgroundColor,
        gridLineColor,
        thousandsSep,
        decimalPoint,
        height,
        title,
        subtitle,
        xAxis,
        yAxis,
        series,
        legend,
        customStyles,
        tooltip
      } = this

      const seriesDataWithColors = series[0].data.map((serie, index) => {
        var obj = this.colors[index]
          ? { ...serie, color: this.colors[index] }
          : { ...serie }

        return obj
      })

      Highcharts.setOptions({
        lang: {
          thousandsSep,
          decimalPoint
        }
      })

      this.chart = Highcharts.chart(this.$refs.pieChart, {
        chart: {
          type: 'pie',
          backgroundColor,
          height,
          style: {
            ...customStyles
          }
        },
        title: {
          text: title,
          style: {
            ...customStyles
          }
        },
        subtitle: {
          text: subtitle,
          style: {
            ...customStyles
          }
        },
        xAxis: {
          ...xAxis,
          gridLineColor,
          lineColor: gridLineColor,
          title: {
            ...xAxis.title,
            style: {
              ...customStyles
            }
          },
          labels: {
            ...xAxis.labels,
            style: {
              ...customStyles
            }
          }
        },
        yAxis: {
          ...yAxis,
          gridLineColor,
          lineColor: gridLineColor,
          title: {
            ...yAxis.title,
            style: {
              ...customStyles
            }
          },
          labels: {
            ...yAxis.labels,
            style: {
              ...customStyles
            }
          }
        },
        series: [
          { data: seriesDataWithColors }
        ],
        tooltip: {
          shared: true,
          style: {
            ...customStyles
          },
          ...tooltip
        },
        legend: {
          itemStyle: {
            ...customStyles
          },
          ...legend
        },
        credits: {
          enabled: false
        },
        ...this.config
      })
    }
  },
  watch: {
    allProps: {
      handler () {
        this.renderChart()
      },
      deep: true
    }
  },
  mounted () {
    this.renderChart()
  }
}
</script>
