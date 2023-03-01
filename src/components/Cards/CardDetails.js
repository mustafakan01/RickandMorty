import React from 'react'
import {useParams} from 'react-router-dom'
import { useState, useEffect } from 'react'


const CardDetails = () => {

    let {id}=useParams();
    let [fetchData, updateFetchData]= useState([]);
    let {name, image, location, gender, species, status, type, origin}=fetchData
    let api= `https://rickandmortyapi.com/api/character/${id}`

    useEffect(()=>{
    
        (async function(){
          let data=await fetch(api).then(res=>res.json())
          updateFetchData(data);
          // console.log(data.results)
    
        })()
       
      },[api])
    


  return (
    <>
    <div className="container d-flex justify-content-center ">
        <div className='d-flex flex-column gap-3'>
            <h1 className='text-center'>{name}</h1>
            <img src={image} alt="" className='img-fluid' />
            {(()=>{
                if(status=='Dead'){
                    return( <div className="badge bg-danger fs-5" >{status}</div>)
                }
                else if(status=='Alive'){ return(<div className="badge bg-success fs-5">{status}</div>)}
                else{ return(<div className="badge bg-secondary fs-5">{status}</div>)}
            })()}
            <div className="content">
                <div className=''>
                    <span className='fw-bold'>Cinsiyet:{gender}</span>
                </div>
                <div className=''>
                    <span className='fw-bold'>Konum:{location?.name}</span>
                </div>
                <div className=''>
                    <span className='fw-bold'>Türü:{species}</span>
                </div>
                <div className=''>
                    <span className='fw-bold'>Nereden:{origin?.name}</span>
                </div>
                
            </div>
            </div>    
    </div>   
    </>
  )
}

export default CardDetails