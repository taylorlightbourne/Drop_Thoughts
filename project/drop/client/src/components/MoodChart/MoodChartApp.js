import React from 'react'
import { Bar } from 'react-chartjs-2'


export default function MoodChartApp() {
    return (

        <div>
            <Bar
                data={{
                    labels: ['Joy', 'Anger', 'Fear', 'Confident', 'Sadness'],
                    datasets: [
                        {
                            label: 'Your Mood',
                            data: [3, 2, 3, 12, 8],
                            backgroundColor: [
                                'rgba(255, 0, 0, 0.2)',
                                'rgba(0, 0, 225, 0.2)',
                                'rgba(255, 255, 0, 0.2)',
                                'rgba(75, 192, 192, 0.2)',
                                'rgba(153, 102, 255, 0.2)',
                            ],
                            borderColor: [
                                'rgba(255, 0, 0, 1)',
                                'rgba(0, 0, 225, 1)',
                                'rgba(255, 255, 0, 1)',
                                'rgba(75, 192, 192, 1)',
                                'rgba(153, 102, 255, 1)',
                            ],
                            borderWidth: 2,
                        },
                    ],
                }}
                height={400}
                width={600}
                options={{
                    maintainAspectRatio: false,
                    scales: {
                        yAxes: [
                            {
                                ticks: {
                                    beginAtZero: true,
                                },
                            },
                        ],
                    },
                    legend: {
                        labels: {
                            fontSize: 60,
                        },
                    },
                }}
            />
        </div>
    )
}
