import React from 'react';
import Form from './Form';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import logo from '../img/logo.jpeg'

const Home = ({ airports,airlines }) => {

    const [ codes, setCodes ] = React.useState([])
    const [ click, setClick ] = React.useState(false)

    const getCodeList = () => {
        setCodes(airports.data.map(el=>el.codeIata))
        setClick(true)
    }

    return(
      <>
        {click===false && 
          <div className='home-form'>
             <img src={logo} alt='logo' />
              <Button icon={<SearchOutlined style={{fontSize:'30px', color:'#ffcc29'}} />} 
                shape="round" size='large'
                style={{boxShadow:'0 0 3px #ebff00, 0 0 10px #0606ff',height:'55px',background:'#00af918f', fontSize:'23px',fontWeight:'bold'}}
                onClick={getCodeList}>
                 Click and Get best flights
              </Button>
          </div>
        }
          <div>
            {click && 
              <Form codes={codes} airlines={airlines}/>
            }
          </div>  
      </>

    )
}

export default Home