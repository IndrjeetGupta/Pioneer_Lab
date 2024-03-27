
import React from 'react'
// import '../css/Population.css'
import '../css/main.css'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
    from 'react-icons/bs'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line }
    from 'recharts';
import { useState } from 'react';
import { useEffect } from 'react';
import Cryptocurrency from './Cryptocurrency';

function Population() {
    const [data, setData] = useState([])

    const fetctdata = async () => {
        try {
            const res = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
            const data = await res.json();
            setData(data.data)
        }
        catch (err) {
            console.log(err)

        }

    }
    useEffect(() => {
        fetctdata()
    }, [])

    return (
        <main className='main-container'>

            <div className='charts'>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Nation" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Population" fill="#8884d8" />
                    </BarChart>
                </ResponsiveContainer>

            </div>

            <br />

            <Cryptocurrency />
        </main>
    )
}

export default Population