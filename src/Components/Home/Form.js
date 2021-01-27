import React, { useEffect, useState }from 'react';
import { Select, Button } from 'antd';
import Options from './Options';
import logo from '../img/logo.jpeg';

const Form = ({codes, airlines }) => {
  const [ origin, setOrigin ] = useState('')
  const [ destination, setDestination ] = useState('')
  const [ routeInfo, setRouteInfo ] =useState([]);
  const [ total, setTotal ] = useState(0)
  const [ price, setPrice ] = useState([]);
  const [ ids, setIds] = useState([])
 
  const getRoute=()=> {
    fetch(`${process.env.REACT_APP_API_URL}/flights/from/${origin}/to/${destination}`, {
      method: 'GET',
      headers: new Headers({
      Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
      }),
    })
    .then((response) => response.json())
    .then((data => setRouteInfo(data.data)))  
    .catch(err=>{
      console.log(err,'error')
      alert('Found a problem fetching data')
    })
}
console.log(routeInfo)


  useEffect(
    () => {
      if (routeInfo) {
        setPrice(routeInfo.map(el => el.price));
        setIds(routeInfo.map(el => el.airlineId));
        getPrice()
      }
    },
    [routeInfo]
  );

 useEffect(
    () => {
      if (price) {
        setTotal(price.reduce((accumulator, currentValue) => 
    accumulator + currentValue, 0))
      }
    },
    [price]
  );

 // trevel cost function(taking in consieration the stops)
 const getPrice = () => {
      setTotal(price.reduce((accumulator, currentValue) => 
      accumulator + currentValue, 0))

}

    return(
      <>
      <img src={logo} alt='logo' style={{width:'5rem', margin:'1.2rem', display:'flex'}} />
      <div className='form-box'>
        <div className='Form-form'>
          <div>
            <h3>Origin</h3>
               <Select
                    size='large'
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select origin"
                    onSelect={value =>setOrigin(value)}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                    {codes.map((el,index) => (
                        <Select.Option key={index} value={el}>{el}</Select.Option>
                ))}

                </Select> 
            </div>
          <div>
            <h3>Destination</h3>
            <Select
                    size='large'
                    showSearch
                    style={{ width: 200 }}
                    placeholder="Select destination"
                    optionFilterProp="children"
                    onSelect={value =>setDestination(value)}
                    filterOption={(input, option) =>
                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                    >
                    {codes.map((el,index) => (
                        <Select.Option key={index} value={el}>{el}</Select.Option>
                ))}
                </Select>
            </div>
        <div>
          <Button onClick={getRoute} shape="round" size='large'
              style={{boxShadow:'0 0 3px #ebff00, 0 0 10px #0606ff',background:'#ffcc29', fontWeight:'bold'}}
          
          >Check flight
          </Button>
        </div> 
        </div>
          <Options
              origin ={origin}
              destination={destination}
              routeInfo={routeInfo}
              total={total}
              ids={ids}
              airlines={airlines}
          /> 
      </div>
      </>
    )
}

export default Form
