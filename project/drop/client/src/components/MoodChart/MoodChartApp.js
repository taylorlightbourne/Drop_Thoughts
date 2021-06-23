import React, {Component} from 'react'
import { Line } from 'react-chartjs-2'

//x-ais will be dates
//y-axis will be the different moods

export default function MoodChartApp() {
    return (
        <div >
            <h1> Mood Chart</h1>
            <Line
            data={{
                labels:["Sadness", "Joy", "Anger", "Fear", "Confident"]
            }}
            width={400}
            height={600}
            options={{}}
            />
        </div>
    )
}
