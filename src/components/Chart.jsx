import React, {Component} from 'react';
import glamorous from 'glamorous';
import data from '../fakeData.json';
import Chart from 'chart.js';
import moment from 'moment';

const ChartDiv = glamorous.div({
  position: 'relative',
  height: '15vh',
  width: '30vw',
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
    let minutes = this.organizeByMinute()

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
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
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