<template>
  <article class="doc__content">
    <section style="padding-top: 10px;">
      <h2 class="section__title">Vue.js Highcharts</h2>
      <p>Wrapper for Highcharts library for <strong>Vue.js 3.x</strong></p>
    </section>

    <section class="section">
      <h2 class="section__title">Instalation</h2>
      <pre><code class="zsh">$ npm install vuejs3-highcharts --save
# OR
$ yarn add vuejs3-highcharts</code></pre>
    </section>

    <section class="section">
      <h2 class="section__title">How to use</h2>
      <pre><code class="html">&lt;!-- Add chart custom tag --&gt;
&lt;ColumnChart :xAxis="chart.xAxis" :series="chart.series" /&gt;</code></pre>

      <pre><code class="javascript">// import one or more chart components
import { ColumnChart } from 'vuejs3-highcharts'

export default {
  components: {
    ColumnChart
  },
  data () {
    return {
      chart: {
        xAxis: {
          // config here
        },
        series: [
          // config here
        ]
      }
    }
  }
}</code></pre>
    </section>

    <section class="section">
      <h2 class="section__title">Options</h2>
      <h3>Properties</h3>
      <table id="customers">
        <tr>
          <th style="font-weight: 600;">name</th>
          <th style="font-weight: 600;">type</th>
          <th style="font-weight: 600;white-space: nowrap;">defalt value</th>
          <th style="font-weight: 600;">required</th>
          <th style="font-weight: 600;">description</th>
        </tr>
        <tr>
          <td>xAxis</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Object</code></td>
          <td></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.5); color: #fff; border-radius: 6px;">true</code></td>
          <td>The X axis or category axis. Normally this is the horizontal axis, though if the chart is inverted this is the vertical axis. In case of multiple axes, the xAxis node is an array of configuration objects.</td>
        </tr>
        <tr>
          <td>yAxis</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Object</code></td>
          <td></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>The Y axis or value axis. Normally this is the vertical axis, though if the chart is inverted this is the horizontal axis. In case of multiple axes, the yAxis node is an array of configuration objects.</td>
        </tr>
        <tr>
          <td>series</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Array</code></td>
          <td></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.5); color: #fff; border-radius: 6px;">true</code></td>
          <td>Series options for specific data and the data itself.</td>
        </tr>
        <tr>
          <td>backgroundColor</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">String</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">'#ffffff'</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Controls the background color of the chart.</td>
        </tr>
        <tr>
          <td>crosshair</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Boolean</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Configure a crosshair that follows either the mouse pointer or the hovered point.</td>
        </tr>
        <tr>
          <td>curvedLine</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Boolean</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Only for line chart type.</td>
        </tr>
        <tr>
          <td>customStyles</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Object</code></td>
          <td></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Render chart with custom styles.</td>
        </tr>
        <tr>
          <td>decimalPoint</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">String</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">','</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Decimal point.</td>
        </tr>
        <tr>
          <td>gridLineColor</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">String</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">'#e6e6e6'</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Custom grid line color.</td>
        </tr>
        <tr>
          <td>height</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Number</code>, <code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">String</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">400</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Controls the height of the chart.</td>
        </tr>
        <tr>
          <td>legend</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Object</code></td>
          <td></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>The legend is a box containing a symbol and name for each series item or point item in the chart. Each series (or points in case of pie charts) is represented by a symbol and its name in the legend.</td>
        </tr>
        <tr>
          <td>subtitle</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">String</code></td>
          <td></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Insert main subtitle.</td>
        </tr>
        <tr>
          <td>thousandsSep</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">String</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">'.'</code></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Thousands separator.</td>
        </tr>
        <tr>
          <td>title</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">String</code></td>
          <td></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Insert main title.</td>
        </tr>
        <tr>
          <td>tooltip</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Object</code></td>
          <td></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Tooltip configs.</td>
        </tr>
        <tr>
          <td>config</td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">Object</code></td>
          <td></td>
          <td><code style="padding: .2em .4em; margin: 0; font-size: 100%; background-color: rgba(27,31,35,.05); border-radius: 6px;">false</code></td>
          <td>Overwrites all properties.</td>
        </tr>
      </table>
    </section>

    <section class="section">
      <h2 class="section__title" style="margin-bottom: 0;">Examples</h2>
    </section>

    <section class="section">
      <h3 class="section__title" style="margin-top: 0;">Basic chart</h3>
      <p>Minimum configuration for rendering the chart.</p>
      <BasicChartSample />

      <h4>Code</h4>
      <pre><code class="html">&lt;template&gt;
  &lt;ColumnChart :xAxis="chart.xAxis" :series="chart.series" /&gt;
&lt;/template&gt;

&lt;script&gt;
import { ColumnChart } from 'vuejs3-highcharts'

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
&lt;/script&gt;</code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Area chart</h3>
      <p>Demonstrating a basic area chart, also known as a mountain chart. Area charts are similar to line charts, but commonly used to visualize volumes.</p>
      <AreaChartSample />

      <h4>Code</h4>
      <pre><code class="html">&lt;template&gt;
  &lt;AreaChart
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
  /&gt;
&lt;/template&gt;

&lt;script&gt;
import { AreaChart } from 'vuejs3-highcharts'

export default {
  name: 'AreaChartSample',
  components: {
    AreaChart
  },
  data () {
    return {
      chart: {
        title: 'Area chart title',
        subtitle: 'Area chart subtitle',
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
        }
      }
    }
  }
}
&lt;/script&gt;</code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Bar chart</h3>
      <p>Bar chart showing horizontal columns. This chart type is often beneficial for smaller screens, as the user can scroll through the data vertically, and axis labels are easy to read.</p>
      <BarChartSample />

      <h4>Code</h4>
      <pre><code class="html">&lt;template&gt;
  &lt;BarChart
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
  /&gt;
&lt;/template&gt;

&lt;script&gt;
import { BarChart } from 'vuejs3-highcharts'

export default {
  name: 'BarChartSample',
  components: {
    BarChart
  },
  data () {
    return {
      chart: {
        title: 'Bar chart title',
        subtitle: 'Bar chart subtitle',
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
        }
      }
    }
  }
}
&lt;/script&gt;</code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Column chart</h3>
      <p>A basic column chart compares rainfall values between four cities. Tokyo has the overall highest amount of rainfall, followed by New York. The chart is making use of the axis crosshair feature, to highlight months as they are hovered over.</p>
      <ColumnChartSample />

      <h4>Code</h4>
      <pre><code class="html">&lt;template&gt;
  &lt;ColumnChart
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
  /&gt;
&lt;/template&gt;

&lt;script&gt;
import { ColumnChart } from 'vuejs3-highcharts'

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
&lt;/script&gt;</code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Scatter chart</h3>
      <p>Scatter charts are often used to visualize the relationships between data in two dimensions. This chart is visualizing height and weight by gender, showing a clear trend where men are on average taller and heavier than women.</p>
      <ScatterChartSample />

      <h4>Code</h4>
      <pre><code class="html">&lt;template&gt;
  &lt;ScatterChart
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
  /&gt;
&lt;/template&gt;

&lt;script&gt;
import { ScatterChart } from 'vuejs3-highcharts'

export default {
  name: 'ScatterChartSample',
  components: {
    ScatterChart
  },
  data () {
    return {
      chart: {
        title: 'Scatter chart title',
        subtitle: 'Scatter chart subtitle',
        backgroundColor: '#fff',
        gridLineColor: '#ccd6eb',
        thousandsSep: '.',
        decimalPoint: ',',
        height: 400,
        xAxis: {
          title: {
            enabled: true,
            text: 'xAxis title'
          },
          categories: [],
          startOnTick: true,
          endOnTick: true,
          showLastLabel: true
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
            data: [
              [161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
              [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
              [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
              [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8],
              [159.5, 50.6], [175.0, 82.5], [166.8, 57.2], [176.5, 87.8], [170.2, 72.8],
              [174.0, 54.5], [173.0, 59.8], [179.9, 67.3], [170.5, 67.8], [160.0, 47.0],
              [154.4, 46.2], [162.0, 55.0], [176.5, 83.0], [160.0, 54.4], [152.0, 45.8],
              [162.1, 53.6], [170.0, 73.2], [160.2, 52.1], [161.3, 67.9], [166.4, 56.6],
              [168.9, 62.3], [163.8, 58.5], [167.6, 54.5], [160.0, 50.2], [161.3, 60.3],
              [167.6, 58.3], [165.1, 56.2], [160.0, 50.2], [170.0, 72.9], [157.5, 59.8],
              [167.6, 61.0], [160.7, 69.1], [163.2, 55.9], [152.4, 46.5], [157.5, 54.3],
              [168.3, 54.8], [180.3, 60.7], [165.5, 60.0], [165.0, 62.0], [164.5, 60.3],
              [156.0, 52.7], [160.0, 74.3], [163.0, 62.0], [165.7, 73.1], [161.0, 80.0],
              [162.0, 54.7], [166.0, 53.2], [174.0, 75.7], [172.7, 61.1], [167.6, 55.7],
              [151.1, 48.7], [164.5, 52.3], [163.5, 50.0], [152.0, 59.3], [169.0, 62.5],
              [164.0, 55.7], [161.2, 54.8], [155.0, 45.9], [170.0, 70.6], [176.2, 67.2],
              [170.0, 69.4], [162.5, 58.2], [170.3, 64.8], [164.1, 71.6], [169.5, 52.8],
              [163.2, 59.8], [154.5, 49.0], [159.8, 50.0], [173.2, 69.2], [170.0, 55.9],
              [161.4, 63.4], [169.0, 58.2], [166.2, 58.6], [159.4, 45.7], [162.5, 52.2],
              [159.0, 48.6], [162.8, 57.8], [159.0, 55.6], [179.8, 66.8], [162.9, 59.4],
              [161.0, 53.6], [151.1, 73.2], [168.2, 53.4], [168.9, 69.0], [173.2, 58.4],
              [171.8, 56.2], [178.0, 70.6], [164.3, 59.8], [163.0, 72.0], [168.5, 65.2],
              [166.8, 56.6], [172.7, 105.2], [163.5, 51.8], [169.4, 63.4], [167.8, 59.0],
              [159.5, 47.6], [167.6, 63.0], [161.2, 55.2], [160.0, 45.0], [163.2, 54.0],
              [162.2, 50.2], [161.3, 60.2], [149.5, 44.8], [157.5, 58.8], [163.2, 56.4],
              [172.7, 62.0], [155.0, 49.2], [156.5, 67.2], [164.0, 53.8], [160.9, 54.4],
              [162.8, 58.0], [167.0, 59.8], [160.0, 54.8], [160.0, 43.2], [168.9, 60.5],
              [158.2, 46.4], [156.0, 64.4], [160.0, 48.8], [167.1, 62.2], [158.0, 55.5],
              [167.6, 57.8], [156.0, 54.6], [162.1, 59.2], [173.4, 52.7], [159.8, 53.2],
              [170.5, 64.5], [159.2, 51.8], [157.5, 56.0], [161.3, 63.6], [162.6, 63.2],
              [160.0, 59.5], [168.9, 56.8], [165.1, 64.1], [162.6, 50.0], [165.1, 72.3],
              [166.4, 55.0], [160.0, 55.9], [152.4, 60.4], [170.2, 69.1], [162.6, 84.5],
              [170.2, 55.9], [158.8, 55.5], [172.7, 69.5], [167.6, 76.4], [162.6, 61.4],
              [167.6, 65.9], [156.2, 58.6], [175.2, 66.8], [172.1, 56.6], [162.6, 58.6],
              [160.0, 55.9], [165.1, 59.1], [182.9, 81.8], [166.4, 70.7], [165.1, 56.8],
              [177.8, 60.0], [165.1, 58.2], [175.3, 72.7], [154.9, 54.1], [158.8, 49.1],
              [172.7, 75.9], [168.9, 55.0], [161.3, 57.3], [167.6, 55.0], [165.1, 65.5],
              [175.3, 65.5], [157.5, 48.6], [163.8, 58.6], [167.6, 63.6], [165.1, 55.2],
              [165.1, 62.7], [168.9, 56.6], [162.6, 53.9], [164.5, 63.2], [176.5, 73.6],
              [168.9, 62.0], [175.3, 63.6], [159.4, 53.2], [160.0, 53.4], [170.2, 55.0],
              [162.6, 70.5], [167.6, 54.5], [162.6, 54.5], [160.7, 55.9], [160.0, 59.0],
              [157.5, 63.6], [162.6, 54.5], [152.4, 47.3], [170.2, 67.7], [165.1, 80.9],
              [172.7, 70.5], [165.1, 60.9], [170.2, 63.6], [170.2, 54.5], [170.2, 59.1],
              [161.3, 70.5], [167.6, 52.7], [167.6, 62.7], [165.1, 86.3], [162.6, 66.4],
              [152.4, 67.3], [168.9, 63.0], [170.2, 73.6], [175.2, 62.3], [175.2, 57.7],
              [160.0, 55.4], [165.1, 104.1], [174.0, 55.5], [170.2, 77.3], [160.0, 80.5],
              [167.6, 64.5], [167.6, 72.3], [167.6, 61.4], [154.9, 58.2], [162.6, 81.8],
              [175.3, 63.6], [171.4, 53.4], [157.5, 54.5], [165.1, 53.6], [160.0, 60.0],
              [174.0, 73.6], [162.6, 61.4], [174.0, 55.5], [162.6, 63.6], [161.3, 60.9],
              [156.2, 60.0], [149.9, 46.8], [169.5, 57.3], [160.0, 64.1], [175.3, 63.6],
              [169.5, 67.3], [160.0, 75.5], [172.7, 68.2], [162.6, 61.4], [157.5, 76.8],
              [176.5, 71.8], [164.4, 55.5], [160.7, 48.6], [174.0, 66.4], [163.8, 67.3]
            ]
          },
          {
            name: 'Manufacturing',
            color: '#f7a35c',
            data: [
              [174.0, 65.6], [175.3, 71.8], [193.5, 80.7], [186.5, 72.6], [187.2, 78.8],
              [181.5, 74.8], [184.0, 86.4], [184.5, 78.4], [175.0, 62.0], [184.0, 81.6],
              [180.0, 76.6], [177.8, 83.6], [192.0, 90.0], [176.0, 74.6], [174.0, 71.0],
              [184.0, 79.6], [192.7, 93.8], [171.5, 70.0], [173.0, 72.4], [176.0, 85.9],
              [176.0, 78.8], [180.5, 77.8], [172.7, 66.2], [176.0, 86.4], [173.5, 81.8],
              [178.0, 89.6], [180.3, 82.8], [180.3, 76.4], [164.5, 63.2], [173.0, 60.9],
              [183.5, 74.8], [175.5, 70.0], [188.0, 72.4], [189.2, 84.1], [172.8, 69.1],
              [170.0, 59.5], [182.0, 67.2], [170.0, 61.3], [177.8, 68.6], [184.2, 80.1],
              [186.7, 87.8], [171.4, 84.7], [172.7, 73.4], [175.3, 72.1], [180.3, 82.6],
              [182.9, 88.7], [188.0, 84.1], [177.2, 94.1], [172.1, 74.9], [167.0, 59.1],
              [169.5, 75.6], [174.0, 86.2], [172.7, 75.3], [182.2, 87.1], [164.1, 55.2],
              [163.0, 57.0], [171.5, 61.4], [184.2, 76.8], [174.0, 86.8], [174.0, 72.2],
              [177.0, 71.6], [186.0, 84.8], [167.0, 68.2], [171.8, 66.1], [182.0, 72.0],
              [167.0, 64.6], [177.8, 74.8], [164.5, 70.0], [192.0, 101.6], [175.5, 63.2],
              [171.2, 79.1], [181.6, 78.9], [167.4, 67.7], [181.1, 66.0], [177.0, 68.2],
              [174.5, 63.9], [177.5, 72.0], [170.5, 56.8], [182.4, 74.5], [197.1, 90.9],
              [180.1, 93.0], [175.5, 80.9], [180.6, 72.7], [184.4, 68.0], [175.5, 70.9],
              [180.6, 72.5], [177.0, 72.5], [177.1, 83.4], [181.6, 75.5], [176.5, 73.0],
              [175.0, 70.2], [174.0, 73.4], [165.1, 70.5], [177.0, 68.9], [192.0, 102.3],
              [176.5, 68.4], [169.4, 65.9], [182.1, 75.7], [179.8, 84.5], [175.3, 87.7],
              [184.9, 86.4], [177.3, 73.2], [167.4, 53.9], [178.1, 72.0], [168.9, 55.5],
              [157.2, 58.4], [180.3, 83.2], [170.2, 72.7], [177.8, 64.1], [172.7, 72.3],
              [165.1, 65.0], [186.7, 86.4], [165.1, 65.0], [174.0, 88.6], [175.3, 84.1],
              [185.4, 66.8], [177.8, 75.5], [180.3, 93.2], [180.3, 82.7], [177.8, 58.0],
              [177.8, 79.5], [177.8, 78.6], [177.8, 71.8], [177.8, 116.4], [163.8, 72.2],
              [188.0, 83.6], [198.1, 85.5], [175.3, 90.9], [166.4, 85.9], [190.5, 89.1],
              [166.4, 75.0], [177.8, 77.7], [179.7, 86.4], [172.7, 90.9], [190.5, 73.6],
              [185.4, 76.4], [168.9, 69.1], [167.6, 84.5], [175.3, 64.5], [170.2, 69.1],
              [190.5, 108.6], [177.8, 86.4], [190.5, 80.9], [177.8, 87.7], [184.2, 94.5],
              [176.5, 80.2], [177.8, 72.0], [180.3, 71.4], [171.4, 72.7], [172.7, 84.1],
              [172.7, 76.8], [177.8, 63.6], [177.8, 80.9], [182.9, 80.9], [170.2, 85.5],
              [167.6, 68.6], [175.3, 67.7], [165.1, 66.4], [185.4, 102.3], [181.6, 70.5],
              [172.7, 95.9], [190.5, 84.1], [179.1, 87.3], [175.3, 71.8], [170.2, 65.9],
              [193.0, 95.9], [171.4, 91.4], [177.8, 81.8], [177.8, 96.8], [167.6, 69.1],
              [167.6, 82.7], [180.3, 75.5], [182.9, 79.5], [176.5, 73.6], [186.7, 91.8],
              [188.0, 84.1], [188.0, 85.9], [177.8, 81.8], [174.0, 82.5], [177.8, 80.5],
              [171.4, 70.0], [185.4, 81.8], [185.4, 84.1], [188.0, 90.5], [188.0, 91.4],
              [182.9, 89.1], [176.5, 85.0], [175.3, 69.1], [175.3, 73.6], [188.0, 80.5],
              [188.0, 82.7], [175.3, 86.4], [170.5, 67.7], [179.1, 92.7], [177.8, 93.6],
              [175.3, 70.9], [182.9, 75.0], [170.8, 93.2], [188.0, 93.2], [180.3, 77.7],
              [177.8, 61.4], [185.4, 94.1], [168.9, 75.0], [185.4, 83.6], [180.3, 85.5],
              [174.0, 73.9], [167.6, 66.8], [182.9, 87.3], [160.0, 72.3], [180.3, 88.6],
              [167.6, 75.5], [186.7, 101.4], [175.3, 91.1], [175.3, 67.3], [175.9, 77.7],
              [175.3, 81.8], [179.1, 75.5], [181.6, 84.5], [177.8, 76.6], [182.9, 85.0],
              [177.8, 102.5], [184.2, 77.3], [179.1, 71.8], [176.5, 87.9], [188.0, 94.3],
              [174.0, 70.9], [167.6, 64.5], [170.2, 77.3], [167.6, 72.3], [188.0, 87.3],
              [174.0, 80.0], [176.5, 82.3], [180.3, 73.6], [167.6, 74.1], [188.0, 85.9],
              [180.3, 73.2], [167.6, 76.3], [183.0, 65.9], [183.0, 90.9], [179.1, 89.1],
              [170.2, 62.3], [177.8, 82.7], [179.1, 79.1], [190.5, 98.2], [177.8, 84.1],
              [180.3, 83.2], [180.3, 83.2]
            ]
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
&lt;/script&gt;</code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Line chart</h3>
      <p>Basic line chart showing trends in a dataset. This chart includes the <code>series-label</code> module, which adds a label to each line for enhanced readability.</p>
      <LineChartSample />

      <h4>Code</h4>
      <pre><code class="html">&lt;template&gt;
  &lt;LineChart
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
  /&gt;
&lt;/template&gt;

&lt;script&gt;
import { LineChart } from 'vuejs3-highcharts'

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
&lt;/script&gt;</code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Pie chart</h3>
      <p>Pie charts are very popular for showing a compact overview of a composition or comparison. While they can be harder to read than column charts, they remain a popular choice for small datasets.</p>
      <PieChartSample />

      <h4>Code</h4>
      <pre><code class="html">&lt;template&gt;
  &lt;PieChart
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
  /&gt;
&lt;/template&gt;

&lt;script&gt;
import { PieChart } from 'vuejs3-highcharts'

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
          '#fdcd01',
          '#ffec47',
          '#a1c653',
          '#5baca7',
          '#61a6df',
          '#62aec5',
          '#904576',
          '#c04999',
          '#eb4f88',
          '#f15958',
          '#df8135',
          '#fd970f'
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
&lt;/script&gt;</code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Combination chart</h3>
      <p>Chart showing how different series types can be combined in a single chart. The chart is using a set of column series, overlaid by a line.</p>
      <CombinationChartSample />

      <h4>Code</h4>
      <pre><code class="html">&lt;template&gt;
  &lt;CombinationChart
    :title="chart.title"
    :subtitle="chart.subtitle"
    :backgroundColor="chart.backgroundColor"
    :gridLineColor="chart.gridLineColor"
    :thousandsSep="chart.thousandsSep"
    :decimalPoint="chart.decimalPoint"
    :height="chart.height"
    :xAxis="chart.xAxis"
    :series="chart.series"
    :crosshair="chart.crosshair"
    :customStyles="chart.customStyles"
  /&gt;
&lt;/template&gt;

&lt;script&gt;
import { CombinationChart } from 'vuejs3-highcharts'

export default {
  name: 'CombinationChartSample',
  components: {
    CombinationChart
  },
  data () {
    return {
      chart: {
        title: 'Combination chart title',
        subtitle: 'Combination chart subtitle',
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
        yAxis: [{
          className: 'highcharts-color-0',
          title: {
            text: 'Primary axis'
          }
        }, {
          className: 'highcharts-color-1',
          opposite: true,
          title: {
            text: 'Secondary axis'
          }
        }, {
          className: 'highcharts-color-2',
          opposite: true,
          title: {
            text: 'Tertiary axis'
          }
        }],
        series: [
          {
            type: 'column',
            name: 'Installation',
            color: '#03bbd4',
            data: [43934, 52503, 57177, 69658, 97031, 119931, 137133, 154175]
          },
          {
            type: 'column',
            name: 'Manufacturing',
            color: '#f7a35c',
            data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
          },
          {
            type: 'line',
            name: 'Services',
            color: '#d26464',
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
&lt;/script&gt;</code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Custom styles</h3>
      <p>Use CSS styles to customize the chart.</p>
      <CustomStylesChartSample />

      <h4>Code</h4>
      <pre><code class="html">&lt;template&gt;
  &lt;ColumnChart
    :xAxis="chart.xAxis"
    :series="chart.series"
    :customStyles="chart.customStyles"
  /&gt;
&lt;/template&gt;

&lt;script&gt;
import ColumnChart from 'components/charts/ColumnChart'

export default {
  name: 'CustomStylesChartSample',
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
        ],
        customStyles: {
          color: '#666',
          fontFamily: 'Nunito Sans',
          fontSize: 10,
          fontWeight: 'bold',
          fontStyle: 'italic'
        }
      }
    }
  }
}
&lt;/script&gt;</code></pre>
    </section>

    <section class="section">
      <h3 class="section__title">Rewrite all props</h3>
      <p>If you need any configuration that is not mapped, use the <code>config</code> property and consult the <a href="https://api.highcharts.com/highcharts" title="Highcharts documentation" target="_blank">Highcharts documentation</a> code for more details. <u>Can also be used to overwrite mapped props</u>.</p>
      <RewriteAllPropsChartSample />

      <h4>Code</h4>
      <pre><code class="html">&lt;template&gt;
  &lt;ColumnChart
    :xAxis="chart.xAxis"
    :series="chart.series"
    :config="chart.config"
  /&gt;
&lt;/template&gt;

&lt;script&gt;
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
            text: '&lt;b&gt;The caption renders in the bottom, and is part of the exported chart.&lt;/b&gt;'
          }
        }
      }
    }
  }
}
&lt;/script&gt;</code></pre>
    </section>
  </article>
</template>

<script>
// highlight
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'

// components
import BasicChartSample from 'components/examples/BasicChartSample'
import AreaChartSample from 'components/examples/AreaChartSample'
import BarChartSample from 'components/examples/BarChartSample'
import ColumnChartSample from 'components/examples/ColumnChartSample'
import CombinationChartSample from 'components/examples/CombinationChartSample'
import LineChartSample from 'components/examples/LineChartSample'
import PieChartSample from 'components/examples/PieChartSample'
import ScatterChartSample from 'components/examples/ScatterChartSample'
import CustomStylesChartSample from 'components/examples/CustomStylesChartSample'
import RewriteAllPropsChartSample from 'components/examples/RewriteAllPropsChartSample'

export default {
  name: 'Home',
  components: {
    BasicChartSample,
    AreaChartSample,
    BarChartSample,
    ColumnChartSample,
    CombinationChartSample,
    LineChartSample,
    PieChartSample,
    ScatterChartSample,
    CustomStylesChartSample,
    RewriteAllPropsChartSample
  },
  methods: {
    handleCopyCode (button, pre) {
      button.addEventListener('click', () => {
        const code = pre.querySelector('code')
        const range = document.createRange()
        range.selectNode(code)
        window.getSelection().removeAllRanges() // clear current selection
        window.getSelection().addRange(range) // to select text
        document.execCommand('copy')
        window.getSelection().removeAllRanges()// to deselect
      })
    },

    renderCopyButton () {
      const pres = document.querySelectorAll('pre')

      pres.forEach(pre => {
        const button = document.createElement('button')
        button.classList.add('button')
        button.classList.add('button--primary')
        button.textContent = 'Copy'
        pre.appendChild(button)
        this.handleCopyCode(button, pre)
      })
    }
  },
  mounted () {
    hljs.initHighlightingOnLoad()
    this.renderCopyButton()
  }
}
</script>

<style lang="scss">
.hljs,
.vuejs-highcharts {
  border: 1px solid var(--code-bg-color);
  border-radius: 4px;
}

.hljs {
  padding: 15px;

  *:not(.button) {
    line-height: 1.5;
  }
}

pre {
  position: relative;

  .button {
    position: absolute;
    right: 0;
    top: 0;
  }
}

.vuejs-highcharts {
  padding: 30px 15px 15px;
}
</style>
