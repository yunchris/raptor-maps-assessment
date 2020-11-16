import { useState, useEffect } from "react";
import { Header } from './Components/Header';
import { Map } from './Components/Map';
import { loadData } from './Data/fetchData';

import './App.css';

export default function App() {
  const [data, setData] = useState();


  // useEffect(() => {
  //   loadData(index).then((result) => setData(result));
  // }, [index]);
  useEffect(() => {
    let data = loadData();
    setData(data)
  }, []);

  // setTimeout(() => {
  //   let idx = (index + 1) % 16;
  //   setIndex(idx);
  // }, 5000);

  return (
    <div className="App">
      <Header />
      <Map data={data} />
    </div>
  );
}