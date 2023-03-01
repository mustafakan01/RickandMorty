import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap'
import Cards from './components/Cards/Cards';
import Filter from './components/Filter/Filter';
import React, { useState, useEffect } from 'react';
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import './App.css'
import Navbar from './components/Navcar/Navbar';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Episode from './Pages/Episode';
import CardDetails from './components/Cards/CardDetails';

function App(){
  return(
    <Router>
      <div className="App">
       <Navbar/>
      </div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<CardDetails/>}/>
        
        <Route path="/episode" element={<Episode/>}/>
      </Routes>
    </Router>
  )
}

const Home=()=> {

  let [pageNumber, setPageNumber]=useState(1);
  let [search, setSearch]=useState("")
  let [fetchData, updateFetchData]= useState([]);
  let {info, results}=fetchData;
  // console.log(results);
  let api= `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}`
  useEffect(()=>{
    
    (async function(){
      let data=await fetch(api).then(res=>res.json())
      updateFetchData(data);
      // console.log(data.results)

    })()
   
  },[api])

  return (
    <div className='App'>
     
      
     <h1 className="text-center mb-3">Karakterler</h1>
     <Search setPageNumber={setPageNumber} setSearch={setSearch}></Search>
      <div className="container">
        <div className="row">
          
          <div className="col-lg-11">
            <div className="row">

              <Cards page="/" results={results} />
            </div>
          </div>
        </div>
      </div>

       <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}></Pagination>
      </div>
  );
}

export default App;
