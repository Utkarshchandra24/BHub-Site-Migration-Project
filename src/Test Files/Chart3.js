import React, {useState} from 'react'
import ReactApexChart from 'react-apexcharts';

import "./Chart3.css"

const Chart3 = () => {
    const [state,setState] = useState({
        series: [70],
        options: {
          chart: {height: 350,type: 'radialBar',},
          plotOptions: {
            radialBar: {hollow: {size: '70%',}},
          },
          labels: ['Earned Leaves'],
        },
        series2: [10],
        options2: {
          chart: {height: 350,type: "radialBar",},
          plotOptions: {
            radialBar: {hollow: {size: "70%",}},
          },
          labels: ['CompOff Leaves'],
        },
        series3: [40],
        options3: {
          chart: {height: 350,type: "radialBar",},
          plotOptions: {
            radialBar: {hollow: {size: "70%",}},
          },
          labels: ['Flexi Leaves'],
        },
        series4: [50],
        options4: {
          chart: {height: 350,type: "radialBar",},
          plotOptions: {
            radialBar: {hollow: {size: "70%",}},
          },
          labels: ['Loss of Pay Leaves'],
        },
    });

    return (
      <div className='main-div'>
        <h1>Basic RadialBar Chart</h1>
        <div className='sub-div'>
          <div id="chart">
            <div className='sub-div1'>
              <ReactApexChart options={state.options} series={state.series} type="radialBar" height={350} />
              <ReactApexChart options={state.options2} series={state.series2} type="radialBar" height={350} />
              <ReactApexChart options={state.options3} series={state.series3} type="radialBar" height={350} />
              <ReactApexChart options={state.options4} series={state.series4} type="radialBar" height={350} />
            </div>
            <div className='sub-div2'>
              <p><strong>Earned Leaves</strong></p>
              <p><strong>CompOff Leaves</strong></p>
              <p><strong>Flexi Leaves</strong></p>
              <p><strong>Loss of Pay Leaves</strong></p>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Chart3