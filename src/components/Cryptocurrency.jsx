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
  
 
    return (

        <main>
            <div className='main-title'>
                <h3>Cryptocurrency Prices</h3>

            </div>
            {
                <div className="main-cards">
                    {Object.keys(data).map((crypto, index) => (
                        <div key={index} className="card">
                            <h3> Current Price in {getCurrencySymbol(crypto)}</h3>
                            <h5>Price : {data[crypto].rate}</h5>
                            <h5>Description : {data[crypto].description}</h5>
                            
                        </div>
                    ))}
                </div>
            }


        </main>

    )

    function getCurrencySymbol(currencyName) {
        switch (currencyName.toUpperCase()) {
          case 'EUR':
            return '€ (euro)';
          case 'GBP':
            return '£ (pound)';
          case 'USD':
            return '$ (dollar)';
          default:
            return currencyName; // Return the currency name if no matching symbol is found
        }
      }
}

export default Cryptocurrency
