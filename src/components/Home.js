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


  const handleChange = (event) => {
    setPair(event.target.value);
    parseCoinNames(event.target.value);
    console.log("hello");
  };

  const handleSubmit = async() => {
    setLoading(true)
    setAmountTable(searchText)
    const response = await axios.get(`https://compare.monedero.com/api/getPrice?pair=${pair}&amount=${searchText}`);
      setData(response.data);
    setLoading(false)
    
  };

  const [coins, setCoins] = useState(["btc","ltc"])
  const parseCoinNames = (pair) =>{
    
      pair = pair.toUpperCase();
      setCoins(pair.split("-"))
      
      
  }

  const [searchText, setSearchText] = useState("1");
  const handleSearchTextChange = event => {
    setSearchText(event.target.value);
  };

  const [amountTable, setAmountTable] = useState("1")
  

  return (
    <div>
    <NavBar/>
    <Input
    data={data}
    pair={pair}
    handleChange= {handleChange}
    searchText={searchText}
    handleSearchTextChange={handleSearchTextChange}
    handleSubmit={handleSubmit}
    />
    <RatesTable
    data = {data}
    walletsArr={walletsArr}
    priceArr= {priceArr}
    entries={entries}
    loading={loading}
    pair={pair}
    coins={coins}
    amountTable={amountTable}
    />
    
    
    </div>
  );
}

export default Home;