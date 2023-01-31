import axios from 'axios'; 
import './App.css';
import { useState, useEffect } from 'react';
import Users from './component/Users';
import Albums from './component/Albums';
import Photos from './component/Photos';
import Ualbums from './component/Ualbums';
import Uphotos from './component/Uphotos';
import {Routes, Route , Link,useNavigate } from 'react-router-dom';
function App() {

  const [users, setUsers] = useState([])
  const [albums, setAlbums] = useState([])
  const [photos,setPhotos] = useState([])
  const [uAlbum,setuAlbum] = useState([])
  const [uPhotos,setuPhotos] = useState([])
 const navigate = useNavigate()

  useEffect(() => {
axios ("https://jsonplaceholder.typicode.com/users")
.then(response => setUsers(response.data))

axios("https://jsonplaceholder.typicode.com/albums")
.then(response => setAlbums(response.data))

axios("https://jsonplaceholder.typicode.com/photos")
.then(response => setPhotos(response.data))

  },[])

function albumFilter(a){
  let array = albums.filter(i => i.userId == a)
  setuAlbum(i=>array)
 navigate("/uAlbum")
}

function photoFilter(b){
  let result = photos.filter(j => j.albumId == b)
  setuPhotos(j=>result)
  navigate("/uPhotos")
 
}
  return (
    
    <div className="app" >

<button><Link to={'/albums'}>Albums</Link></button> 
<button><Link to={'/photos'}>Photos</Link></button> 
 <Routes>

<Route path="/" element = {< Users users={users} albumFilter={albumFilter} />} />
<Route path="/albums" element = { < Albums albums={albums} photoFilter={photoFilter} />} />
<Route path="/photos" element = {< Photos photos ={photos} />} />

<Route path='/uAlbum' element ={<Ualbums uAlbum={uAlbum}/>} />

<Route path='/uPhotos' element = {<Uphotos uPhotos={uPhotos} />} />



    
</Routes>   
    </div>
    
  );
}

export default App;
