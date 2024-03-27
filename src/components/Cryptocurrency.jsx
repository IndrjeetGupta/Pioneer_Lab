import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

function Cryptocurrency() {
    const [data, setData] = useState([])

    const fetctdata = async () => {
        try {
            const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
            const data = await res.json();
            setData(data.bpi)
        }
        catch (err) {
            console.log(err)

        }

    }
    useEffect(() => {
        fetctdata()
    }, [])
    console.log(data.USD)
    const card1 = data.USD
    const card2 = data.GBP

    const card3 = data.USD
    return (

        <main>
            <div className='main-title'>
                <h3>Cryptocurrency Prices</h3>

            </div>
            {
                <div className="main-cards">
                    {Object.keys(data).map((crypto, index) => (
                        <div key={index} className="card">
                            <h3>{crypto}</h3>
                            <p>{data[crypto].rate}</p>
                        </div>
                    ))}
                </div>
            }


        </main>

    )
}

export default Cryptocurrency
