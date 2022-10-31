import axios from "axios";
import Image from "./components/Image/Image";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./testing.css";
import InfiniteScroll from "react-infinite-scroll-component";

interface ITest {
  author: string;
  download_url: string;
  height: number;
  id: number;
  url: string;
  width: number;
}


const StyledApp = styled.div({
  display: "flex",
  flexWrap: "wrap",
  margin: "20px 5% 0 5%",
  justifyContent: "left",
  width: "90vw",
});

function App() {
  const [photoData, setPhotoData] = useState<ITest[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get(`https://picsum.photos/v2/list?page=${page}&limit=15`).then((res) => setPhotoData([...photoData, ...res.data]));
  }, [page]);

  return (
    <StyledApp className="App">
      <InfiniteScroll
      className="infinite-scroll"
        dataLength={photoData.length}
        loader={<h4>Loading...</h4>}
        hasMore={true}
        next={() => {
          setPage(page + 1);
        }}
      >
        {photoData.map((photo) => (
          <Image key={photo.id} url={photo.download_url}></Image>
        ))}
      </InfiniteScroll>
    </StyledApp>
  );
}

export default App;
