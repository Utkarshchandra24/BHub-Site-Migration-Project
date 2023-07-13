import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts'

import "./Chart.css"

const Chart = () => {
    const [state,setState] = useState({
        series: [44, 55, 41, 17, 15],
        options: {
        chart: {type: 'donut',},
        responsive: [{
            breakpoint: 480,
            options: {
            chart: {width: 200},
            legend: {position: 'bottom'}
            }
        }]
        },      
    });
      
    return (
            <div className='main-div'>
                <h1>Simple Donut</h1>
                <div id="chart">
                    <ReactApexChart options={state.options} series={state.series} type="donut" />
                </div>
            </div>
    )
    
    
    }
    
           

export default Chart