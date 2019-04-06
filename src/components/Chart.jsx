import React, {Component} from 'react';
import glamorous from 'glamorous';
import data from '../fakeData.json';
import Chart from 'chart.js';
import moment from 'moment';

const ChartDiv = glamorous.div({
  position: 'relative',
  height: '20vh',
  width: '40vw',
});

class SampleChart extends Component {
  constructor(props) {
    super(props)

    this.organizeByMinute = this.organizeByMinute.bind(this)
  }

  organizeByMinute() {
    let minutes = {}
    data.forEach((tweet) => {
      let time = moment(tweet.created_at).format('h:mm a')
      minutes[time] = (minutes[time]+1) || 1
    })
    return minutes
  }

  componentDidMount() {
    let geo = 0
    let noGeo = 0
    data.forEach((tweet) => {
      tweet.geo ? geo++ : noGeo++
    })

    let minutes = this.organizeByMinute()
    console.log(minutes)

    var ctx = 'sampleChart'
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: Object.keys(minutes).reverse(),
            datasets: [{
                label: 'Tweets Per Minute',
                data: Object.values(minutes).reverse(),
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
  }

  render() {
    return (
      <ChartDiv>
        <canvas id="sampleChart"/>
      </ChartDiv> 
    )
  }
}

export default SampleChart;