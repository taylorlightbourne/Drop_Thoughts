import React, { useState, useEffect } from 'react'
import { Bar } from 'react-chartjs-2'
import { supabase } from "../SupabaseKey"
import "./MoodChart.css"
import Navbar from '../Navbar'
import footerDesign from '../../Assets/FooterDesign.png'

export default function MoodChartApp() {


    const [mood, setMood] = useState([])
    const [moodObject, setMoodObject] = useState({})
    useEffect(() => {
        const moodData = async () => {
            const { data, error } = await supabase
                .from('Post')
                .select()
            const joy = []
            const sadness = []
            const anger = []
            const fear = []
            const confidence = []

            for (const datum of data) {


                if (datum.respond === "Joy") {

                    joy.push(datum)
                }
                if (datum.respond === "Sadness") {
                    sadness.push(datum)
                }
                if (datum.respond === "Anger") {
                    anger.push(datum)
                }
                if (datum.respond === "Fear") {
                    fear.push(datum)
                }
                if (datum.respond === "Confident") {
                    confidence.push(datum)
                }

            }
            setMoodObject({

                joy,
                sadness,
                anger,
                fear,
                confidence
            })
        }
        moodData()
    }, [])

    const joyLength = moodObject.joy ? moodObject.joy.length : 0
    const angerLength = moodObject.anger ? moodObject.anger.length : 0
    const fearLength = moodObject.fear ? moodObject.fear.length : 0
    const confidenceLength = moodObject.confidence ? moodObject.confidence.length : 0
    const sadnessLength = moodObject.sadness ? moodObject.sadness.length : 0

    return (
        <>
            <div>
                <Navbar />
            </div>
            <div className="chartHeader">
                <h1 className="moodChartHeader">Mood Chart</h1>
            </div>

            < div className="chartDiv" >
                <Bar
                    data={{
                        labels: ['Joy', 'Anger', 'Fear', 'Confident', 'Sadness'],
                        datasets: [
                            {
                                label: 'Your Mood',
                                data: [joyLength,
                                    angerLength,
                                    fearLength,
                                    confidenceLength,
                                    sadnessLength],
                                backgroundColor: [
                                    'rgba(173,255,47, 0.2)',
                                    'rgba(255,0,0, 0.2)',
                                    'rgba(255,140,0, 0.2)',
                                    'rgba(153, 102, 255, 0.2)',
                                    'rgba(75, 192, 192, 0.2)',
                                ],
                                borderColor: [
                                    'rgba(173,255,47, 1)',
                                    'rgba(255,0,0, 1)',
                                    'rgba(255,140,0, 1)',
                                    'rgba(153, 102, 255, 1)',
                                    'rgba(75, 192, 192, 1)',
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

                    }}
                />
            </div>
            <div >
                <footer >
                    <img className="moodChartFooter"  src={footerDesign} />
                </footer>
            </div>
        </>
    )
}
