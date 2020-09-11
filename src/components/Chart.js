import React, { useEffect, useRef, useState } from 'react'
import Chartjs from 'chart.js'

function rgba_palette_generator() {
    var o = Math.round(Math.random() * (191 - 63) + 63);
    var r = Math.round(Math.random() * (191 - 63) + 63);
    var s = Math.round(Math.random() * (191 - 63) + 63);
    console.log(o, r, s)
    return 'rgba(' + o + ',' + r + ',' + s + ')';
}

const Chart = ({ chartType, aggType, title, data }) => {

  const chartContainer = useRef(null);
  const [chartInstance, setChartInstance] = useState(null);
  const monthNames = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];
  function createChart (chartType, aggType, title, data) {
    var aggObj = {}
    var chartData = []
    var chartLabels = []
    var chartColors = []
    var ticks = {}
    var label = ''
    var xAxesLabel = ''
    var yAxesLabel = ''
    //come up with better flexibility for aggregation
    if (aggType == 'month') {
    //aggregate game sessions by date
      for (var i = 0; i < data.length; i++) {
        var d = new Date(data[i].date._seconds*1000)

        if (!aggObj.hasOwnProperty(d.getMonth())) {
          aggObj[d.getMonth()] = 1
        } else {
          aggObj[d.getMonth()] += 1
        }
      }
      var keys = Object.keys(aggObj);
      keys.sort();

      for (var key in aggObj) {
        if (aggObj.hasOwnProperty(key)) {
            chartData.push(aggObj[key])
            chartLabels.push(monthNames[key])
            chartColors.push(rgba_palette_generator())
        }
      }
      ticks = {beginAtZero: true, max: 5}
      label = '2020'
      xAxesLabel = 'Month'
      yAxesLabel = 'Number of Sessions'
    }
    else if (aggType == 'player') {

      for (var i = 0; i < data.length; i++) {
        if (!aggObj.hasOwnProperty(data[i].nickname)) {
          aggObj[data[i].nickname] = data[i].totalWins / (data[i].totalWins + data[i].totalLosses)
        }
      }
      for (var key in aggObj) {
        if (aggObj.hasOwnProperty(key)) {
            chartData.push(aggObj[key])
            chartLabels.push(key)
            chartColors.push(rgba_palette_generator())
        }
      }

      ticks = {
                beginAtZero: true,
                max: 1,
                callback: function (value) {
                  return value.toLocaleString('de-DE', {style:'percent'});
                }
              }
      label = 'Top Players'
      xAxesLabel = 'Nickname'
      yAxesLabel = 'Win %'

    }

    //reformat for the chartConfig
    const chartConfig = {
      type: "bar",
      data: {
        labels: chartLabels,
        datasets: [
          {
            //add flexibility to change this
            label: label,
            data: chartData,
            backgroundColor: chartColors,
            borderColor: chartColors,
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
            display: true,
            text: title
        },
        scales: {
          yAxes: [
            {
              ticks: ticks,
              scaleLabel: {
                display: true,
                labelString: yAxesLabel
              }
            }
          ],
          xAxes: [
            {
            scaleLabel: {
              display: true,
              labelString: xAxesLabel
            }
            }
          ]
        }
      }
    };
    console.log(chartConfig)
    return chartConfig;
  }

  useEffect(() => {
    if (chartContainer && chartContainer.current) {
      const newChartInstance = new Chartjs(chartContainer.current, createChart(chartType, aggType, title, data));
      setChartInstance(newChartInstance);
    }
  }, []);

  useEffect(() => {
    if(chartInstance){
      console.log(chartInstance)
      chartInstance.config = createChart(chartType, aggType, title, data)
      chartInstance.update()
    }
  }, [data]);

  return (
    <div>
      <canvas ref={chartContainer} />
    </div>
  );
}
export default Chart;
