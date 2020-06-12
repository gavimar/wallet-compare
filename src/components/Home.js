import React,{useState, useEffect} from 'react';
import NavBar from './NavBar';
import Input from './Input';
import RatesTable from './RatesTable';
import axios from "axios";





function Home() {

  useEffect(() => {

    const fetchData = async() =>{
    const response = await axios.get("https://compare.monedero.com/api/getPrice?pair=btc-ltc");
    setData(response.data);
    // console.log(response.data)
    }
    setLoading(false)
    fetchData();
    parseCoinNames(pair);
    console.log(data)
}, [])

  const [data, setData] = useState([]);  
  const  [hasError, setErrors] =  useState(false);
  const [pair, setPair] = useState("btc-ltc");
  
  const [loading, setLoading] = useState(true);
  

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
    setLoading(true)
    setPair(event.target.value);
    parseCoinNames(event.target.value);
    console.log("hello");
    // const coins= event.target.getAttribute("coinsdata");
    // // const evCoins= event.target.attributes.getNamedItem('data-tag').value;
    // // console.log(evCoins)
    // setCoins(event.target.name)
    // console.log(event.target.name)
    const response = await axios.get(`https://compare.monedero.com/api/getPrice?pair=${event.target.value}`);
      setData(response.data);
    setLoading(false)
    
  };

  const [coins, setCoins] = useState(["btc","ltc"])
  const parseCoinNames = (pair) =>{
    
      pair = pair.toUpperCase();
      setCoins(pair.split("-"))
      
      
  }

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
    
    handleChange= {handleChange}
    />
    <RatesTable
    data = {data}
    walletsArr={walletsArr}
    priceArr= {priceArr}
    entries={entries}
    loading={loading}
    pair={pair}
    coins={coins}/>
    
    
    </div>
  );
}

export default Home;