# Vue.js Highcharts

![GitHub](https://img.shields.io/github/license/ederssouza/vuejs-highcharts) ![npm](https://img.shields.io/npm/v/vuejs-highcharts) ![npm](https://img.shields.io/npm/dw/vuejs-highcharts) ![npm](https://img.shields.io/npm/dm/vuejs-highcharts)

Wrapper for Highcharts library for **Vue.js 3.x**.

## Documentation

For more features, access [ederssouza.github.io/vuejs-highcharts](https://ederssouza.github.io/vuejs-highcharts/).

## Installation

```bash
$ npm install vuejs-highcharts --save
# OR
$ yarn add vuejs-highcharts
```

## Basic usage

```html
<template>
  <ColumnChart
    :xAxis="chart.xAxis"
    :series="chart.series"
  />
</template>

<script>
import { ColumnChart } from 'vuejs-highcharts'

export default {
  name: 'BasicChartSample',
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
```