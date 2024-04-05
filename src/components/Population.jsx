import React, { useState, useEffect } from 'react';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip,  ResponsiveContainer } from 'recharts';
import Cryptocurrency from './Cryptocurrency';
import '../css/main.css'

function Population() {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try {
            const res = await fetch("https://datausa.io/api/data?drilldowns=Nation&measures=Population")
            const data = await res.json();
            setData(data.data)
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const handleClick = (event) => {
        if (event.activePayload && event.activePayload.length) {
            const payload = event.activePayload[0].payload;
            alert(`Country: ${payload.Nation}, Population: ${payload.Population}`);
        }
    }

    return (
        <main className='main-container'>
            <h2>Population Data for Different Nations</h2>
            <div className='charts'>
                <ResponsiveContainer width="100%" height={300}>
                    
                    <BarChart
                        data={data}
                        margin={{ top: 5, right: 20, left: 20, bottom: 5 }}
                        onClick={handleClick}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="Nation" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="Population" fill="lightgreen" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
            <br />
            <Cryptocurrency />
        </main>
    )
}

export default Population;
