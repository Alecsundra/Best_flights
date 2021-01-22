import React from 'react';
import { Card, Statistic } from 'antd';


const Options = ({ total, origin, destination, routeInfo, ids }) => {
    console.log(ids)

    return (
        <div className="option">
        {total>0 && 
            <div>
                <Card title={`From ${origin} to ${destination} `} headStyle={{background:'#ffcc29', fontSize:'1.5rem'}}
                    bodyStyle={{background:'#d9edf6'}} >
                    <h2>You got your trip with <span className='red'>{routeInfo.length-1}</span>  stop(s)</h2>
                    <Statistic
                        style={{fontSize:'bold', color:'red'}}
                        title="Price"
                        prefix="$"
                        value={total.toFixed(2)}
                        style={{ margin: '0 32px'}}
                    />
                    {/* <h2>Airline(s): {
                        
                    }</h2> */}
                </Card>
            </div>
            }
            </div>
    )
}

export default Options