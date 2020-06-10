import React,{useState, useEffect} from 'react';
import axios from "axios";

import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({

  formControl:{
    margin: theme.spacing(1),
    minWidth: 120,
    display:"flex",
    justifyContent:"center",
    width:'50%',
    margin:10,
    backgroundColor:'white',
    borderRadius: 10,
    border: blue,
    padding:5
},
formContainer:{
  width:"100%",
  marginTop:20,
  display:"flex",
  justifyContent:"center",}
}));

export default function Input() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = (event) => {
    setAge(event.target.value);
    setPair(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const [data, setData] = useState([]);  
  const  [hasError, setErrors] =  useState(false);
  const [pair, setPair] = useState("btc-ltc");

  // const handleClick = (event) => {
    
  //   setPair(event.target.value);
  // };


  const fetchData = async () => {
    
  // const response = await axios.get('https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=36.7569945&lon=-3.5237027&maxDistance=100&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721');
  const response = await axios.get(`https://compare.monedero.com/api/getPrice?pair=${pair}`);
    setData(response.data);
    console.log(response.data)
  }
 


  return (
    <div className={classes.formContainer}>
       <FormControl className={classes.formControl}>
        <InputLabel id="demo-controlled-open-select-label" className={classes.inputLabel}>Choose coin pair</InputLabel>
        <Select
          labelId="demo-controlled-open-select-label"
          id="demo-controlled-open-select"
          open={open}
          onClose={handleClose}
          onOpen={handleOpen}
          value={pair}
          onChange={handleChange}
        >
          
          <MenuItem value="btc-ltc" onClick={fetchData}>BTC-LTC</MenuItem>
          <MenuItem value="ltc-btc" onClick={fetchData}>LTC-BTC</MenuItem>
          <MenuItem value="eth-btc" onClick={fetchData}>ETH-BTC</MenuItem>
          <MenuItem value="btc-eth" onClick={fetchData}>ETH-BTC</MenuItem>
          <MenuItem value="eth-ltc" onClick={fetchData}>ETH-LTC</MenuItem>
          <MenuItem value="ltc-ETH" onClick={fetchData}>LTC-ETH</MenuItem>

        </Select>
      </FormControl>
    </div>
  );
}