import React, {Component} from 'react';
import {Chart} from 'primereact/chart';

export default  class ChartInfo extends Component {

    render() {
        const data = {
            labels: ['January', 'February', 'March', 'April'],
            datasets: [
                {
                    label: 'Body Fat %',
                    data: [23, 19, 18.5, 20, 22, 22.5, 21],
                    fill: false,
                    backgroundColor: '#42A5F5',
                    borderColor: '#42A5F5'
                }
            ]
        };

        const multiAxisData = {
			labels: ['January', 'February', 'March', 'April'],
			datasets: [{
                label: 'Body Fat',
                fill: true,
				backgroundColor: '#42A5F5',
                borderColor: '#42A5F5',
				yAxisID: 'y-axis-1',
				data: [23, 22, 19, 19.5, 21, 20, 18]
			}, {
                label: 'Weight',
                fill: true,
				backgroundColor: '#66BB6A',
                borderColor: '#66BB6A',
				yAxisID: 'y-axis-2',
				data: [246, 243, 236, 239]
			}]
        };

        const multiAxisOptions = {
            responsive: true,
            hoverMode: 'index',
            stacked: false,
            scales: {
                yAxes: [{
                    type: 'linear',
                    display: true,
                    position: 'left',
                    id: 'y-axis-1',
                }, {
                    type: 'linear',
                    display: true,
                    position: 'right',
                    id: 'y-axis-2',
                    gridLines: {
                        drawOnChartArea: false
                    }
                }]
            }
        }

        // const lineStylesData = {
        //     labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        //     datasets: [
        //         {
        //             label: 'First Dataset',
        //             data: [65, 59, 80, 81, 56, 55, 40],
        //             fill: false,
        //             borderColor: '#42A5F5'
        //         },
        //         {
        //             label: 'Second Dataset',
        //             data: [28, 48, 40, 19, 86, 27, 90],
        //             fill: false,
        //             borderDash: [5, 5],
        //             borderColor: '#66BB6A'
        //         },
        //         {
        //             label: 'Third Dataset',
        //             data: [12, 51, 62, 33, 21, 62, 45],
        //             fill: true,
        //             borderColor: '#FFA726',
        //             backgroundColor: '#FFCC80'
        //         }
        //     ]
        // };

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                        {/* <h1>Body Fat % over time</h1> */}
                        {/* <p>A line chart or line graph is a type of chart which displays information as a series of data points called 'markers' connected by straight line segments.</p> */}
                    </div>
                </div>

                <div className="content-section implementation">
                    {/* <h3>Basic</h3>
                    <Chart type="line" data={data} /> */}

                    <h1>Body Composiiton Data</h1>
                    <Chart type="line" data={multiAxisData} options={multiAxisOptions} />

                    {/* <h3>Line Styles</h3>
                    <Chart type="line" data={lineStylesData}  /> */}
                </div>
            </div>
        )
    }
}