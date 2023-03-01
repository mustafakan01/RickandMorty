import React from 'react'
import ReactPagination from 'react-paginate'

const Pagination = ({info,pageNumber,setPageNumber}) => {
 
  return (
   <ReactPagination 
   className='pagination justify-content-center gap-4 mb-5'
   nextLabel='Sonraki'
   previousLabel='Önceki'
   nextClassName='btn btn-outline-info'
   previousClassName='btn btn-outline-info'
   pageClassName='page-item'
   pageLinkClassName='page-link'
   onPageChange={(data)=>{
   setPageNumber(data.selected+1)}}
   pageCount={info?.pages}

   />
  )
}

export default Pagination