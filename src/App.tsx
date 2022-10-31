import axios from 'axios';
import Image from './components/Image/Image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import "./testing.css";

interface ITest {
  author: string,
  download_url: string,
  height: number,
  id: number,
  url: string,
  width: number
}

const StyledApp = styled.div({
  display: "flex",
  flexWrap: "wrap",
  margin: "20px 5% 0 5%",
  justifyContent: "left",
  width: "90vw",
})

function App() {
  const [photoData, setPhotoData] = useState<ITest[]>([]);
  
  useEffect( () => {
    axios.get("https://picsum.photos/v2/list?page=2&limit=30").then(res => setPhotoData(res.data));
  }, [])

  return (
    <StyledApp className="App">
      {photoData.map(photo => 
      <Image 
      key = {photo.id} 
      url = {photo.download_url} 
      />)}
      </StyledApp>
  );
}

export default App;
