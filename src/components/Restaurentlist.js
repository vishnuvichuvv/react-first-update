import React from 'react'
import { useState,useEffect } from 'react'
import RestCard from './RestCard'
import Row from 'react-bootstrap/Row';


function Restaurentlist() {
    const [allrestaurent,setallrestaurent]=useState([])
        // function to call for datas inside json file
        const getrestaurentdata=async ()=>{
            await fetch('/restaurants.json').then(data=>{data.json().then(result=>{
              
                setallrestaurent(result.restaurants)
                  // console.log(result);
            })
            
        })
      }
      console.log(allrestaurent);
        useEffect(()=>{
            getrestaurentdata()
        },[])

  return (

    <Row>
      {
        allrestaurent.map(item=>(
          <RestCard data={item}/>
          ))
      }

    </Row>
  )
}

export default Restaurentlist