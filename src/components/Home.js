import React,{useState, useEffect} from 'react';
import NavBar from './NavBar';
import Input from './Input';
import RatesTable from './RatesTable';
import axios from "axios";





function Home() {

  useEffect(async() => {
    const response = await axios.get("https://compare.monedero.com/api/getPrice?pair=btc-ltc");
    setData(response.data);
    // console.log(response.data)
}, [])

  const [data, setData] = useState([]);  
  const  [hasError, setErrors] =  useState(false);
  const [pair, setPair] = useState("btc-ltc");
  const [coins, setCoins] = useState("Bitcoin")
  console.log(coins)

  const entries = Object.entries(data);

  let walletsArr= [];
  let priceArr = [];

  console.log(data)
  console.log(entries)

  for (let i = 0; i<entries.length; i++){
    walletsArr= [...walletsArr, entries[i][0]]
    priceArr = [...priceArr, entries[i][1]]
  }


  console.log(walletsArr)
  console.log(priceArr)

  const handleChange = async(event) => {
    setPair(event.target.value);
    // const coins= event.target.getAttribute("coinsdata");
    // // const evCoins= event.target.attributes.getNamedItem('data-tag').value;
    // // console.log(evCoins)
    // setCoins(coins)
    const response = await axios.get(`https://compare.monedero.com/api/getPrice?pair=${event.target.value}`);
      setData(response.data);
    
  };

  // const fetchData = async () => {
    
  //   const response = await axios.get(`https://compare.monedero.com/api/getPrice?pair=${pair}`);
  //     setData(response.data);
  //     console.log(response.data)
  //   }

  return (
    <div>
    <NavBar/>
    <Input
    data={data}
    pair={pair}
    coins={coins}
    handleChange= {handleChange}
    />
    <RatesTable
    data = {data}
    walletsArr={walletsArr}
    priceArr= {priceArr}
    entries={entries}/>
    
    
    </div>
  );
}

export default Home;