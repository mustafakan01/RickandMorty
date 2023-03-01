import React from 'react'
import styles from './Cards.module.scss'
import { Link } from 'react-router-dom';

const Cards = ({results,page}) => {
    // console.log(results)
    let display;
    console.log(results)

    if(results){
        display=results.map(x=>{
            let {id, name, image, location, status}=x
            return (
        <>            <Link style={{TextDecoration:"none"}} to={`${page}${id}`} key={id} className='col-4 mb-4  position-relative text-dark'>
        <div className={styles.cards}>
            <img src={image} alt="" className='img-fluid' />
            <div style={{padding:"10px"}} className="content">
                <div className="fs-4 fw-bold mb-4">{name}</div>
                <div className="">
                    <div className="fs-6">Son konum:</div>
                    <div className="fs-5">{location.name}</div>
                </div>
            </div>
        </div>
        {(()=>{
            if(status=='Dead'){
                return( <div className={`${styles.badge} position-absolute badge bg-danger`}>{status}</div>)
            }
            else if(status=='Alive'){ return(<div className={`${styles.badge} position-absolute badge bg-success`}>{status}</div>)}
            else{ return(<div className={`${styles.badge} position-absolute badge bg-secondary`}>{status}
            </div>)}
        })()}
       
      </Link> <br /></>

        
            );
        })
    }
    else {display="Bulunamadı"}
  return (
   
    <div>{display}</div>
  )
}

export default Cards