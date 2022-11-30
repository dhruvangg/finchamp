import React, { useEffect, useRef, useState } from 'react'
import Chart from "chart.js/auto";
import PropTypes from 'prop-types';

export function ChartView({ options }) {
    const { data, type } = options
    const chartRef = useRef()

    useEffect(() => {
        const chart = new Chart(chartRef.current.getContext("2d"), {
            type,
            data,
            options: {
                cutout: '65%',
                borderWidth: 0,
                responsive: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#0f0e17',
                            padding: 50,
                            font: {
                                size: 16
                            }
                        }
                    },
                    title: {
                        display: false,
                        text: ''
                    },
                    beforeInit: function (chart, options) {
                        chart.legend.afterFit = function () {
                            this.height = this.height + 100;
                        };
                    }
                }
            }
        })

        chart.canvas.parentNode.style.height = `400px`;
        chart.canvas.parentNode.style.width = `400px`;
        return () => {
            chart.destroy()
        }
    }, [data, type])

    return (
        <div>
            <canvas id='chart' ref={chartRef}></canvas>
        </div>
    )
}


ChartView.propTypes = {
    options: PropTypes.shape({
        type: PropTypes.string.isRequired,
        data: PropTypes.object.isRequired,
    })
}


