import React, {useState} from 'react'
import "./LeaveChart.css"

import ReactApexChart from 'react-apexcharts';

const LeaveChart = () => {
  
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
    <div className="main-div">
        <div className='sub-div1'>
            <div className='sub-div11'>
                <h3>Leave Chart</h3>
            </div>
            <div className='sub-div11'>         
                <p className='phead'><strong>Week |</strong></p>
                <p className='phead'><strong>Month |</strong></p>
                <p className='phead'><strong>Year</strong></p>
            </div>
        </div>
        <div className='sub-div2'>
              <ReactApexChart options={state.options} series={state.series} type="radialBar" height={350} />
              <ReactApexChart options={state.options2} series={state.series2} type="radialBar" height={350} />
              <ReactApexChart options={state.options3} series={state.series3} type="radialBar" height={350} />
              <ReactApexChart options={state.options4} series={state.series4} type="radialBar" height={350} />
        </div>
        <div className='sub-div3'>
          <p><strong>Earned Leaves</strong></p>
          <p><strong>CompOff Leaves</strong></p>
          <p><strong>Flexi Leaves</strong></p>
          <p><strong>Loss of Pay Leaves</strong></p>
        </div>
    </div>
  )
}

export default LeaveChart