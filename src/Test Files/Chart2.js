import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

import "./Chart2.css"

const Chart2 = () => {
    const [state,setState] = useState({
        series: [70],
        options: {
          chart: {height: 350,type: 'radialBar',},
          plotOptions: {
            radialBar: {hollow: {size: '70%',}},
          },
          labels: ['Earned Leaves'],
        },
    });

    return (
      <div className='main-div'>
        <h1>Basic RadialBar Chart</h1>
          <div id="chart">
              <ReactApexChart options={state.options} series={state.series} type="radialBar" height={350} />
          </div>
      </div>
    )


    }
        


export default Chart2