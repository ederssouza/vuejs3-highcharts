<template>
  <div class="vuejs-highcharts" ref="scatterChart" />
</template>

<script>
import Highcharts from 'highcharts'

export default {
  name: 'ScatterChart',
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
    crosshair: {
      type: Boolean,
      default: false
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
        crosshair,
        xAxis,
        yAxis,
        series,
        legend,
        customStyles,
        tooltip
      } = this

      Highcharts.setOptions({
        lang: {
          thousandsSep,
          decimalPoint
        }
      })

      this.chart = Highcharts.chart(this.$refs.scatterChart, {
        chart: {
          type: 'scatter',
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
          crosshair,
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
        series,
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
