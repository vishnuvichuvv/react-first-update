import React from 'react'
import { useParams } from 'react-router-dom'
import { useState,useEffect } from 'react'
import { Image,Button } from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Operatingtime from './Operatingtime';
import Review from './Review';

function ViewRest() {
    
  const Params=useParams()
  

    const [allrestaurent,setallrestaurent]=useState([])
        // function to call for datas inside json file
        const getrestaurentdata=async ()=>{
            await fetch('/restaurants.json').then(data=>{data.json().then(result=>{
              
                setallrestaurent(result.restaurants)
                  // console.log(result);
            })
            
        })
      }

      // console.log(allrestaurent);

      const restdata=allrestaurent.find(item=>item.id==Params.id)
      console.log(restdata);
        useEffect(()=>{
            getrestaurentdata()
        },[])
      
        

  return (
    <>
  {restdata?(
    <Row>
      <Col >
      <Image className='p-3 ' src={restdata.photograph} fluid/>
      </Col>
      <Col className='mt-5'>
      <h1>{restdata.name}</h1>
      <h3>{restdata.neighborhood}</h3>
      <h4>cuisine type : {restdata.cuisine_type}</h4>
      <h4>address :{restdata.address}</h4>

       <Operatingtime timedata={restdata.operating_hours}></Operatingtime><Review review={restdata.reviews}/>
      </Col>
    </Row>


  ):'null'}
        
    </>
  )
  }
 
  export default ViewRest