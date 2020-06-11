import React,{useState} from 'react';
import axios from "axios";

import { makeStyles, StylesProvider } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { blue } from '@material-ui/core/colors';
import {bitcoin} from '../images/bitcoin2.png'

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
  justifyContent:"center"},
  icon:{
    width:"10px",
    height:"10px"
  }
}));

export default function Input(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  

  // const handleClick = (event) => {
    
  //   setPair(event.target.value);
  // };

  
  const fetch = (event) => {
    props.fetchData(event.target.value)
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
          value={props.pair}
          onChange={props.handleChange}
        >
          
          <MenuItem value="btc-ltc"  data-comp="Hello" name="Hello">Bitcoin to Litecoin</MenuItem>
          <MenuItem value="ltc-btc" name ="Bye">LTC-BTC</MenuItem>
          <MenuItem value="eth-btc">ETH-BTC</MenuItem>
          <MenuItem value="btc-eth">ETH-BTC</MenuItem>
          <MenuItem value="eth-ltc">ETH-LTC</MenuItem>
          <MenuItem value="ltc-eth">LTC-ETH</MenuItem>

        </Select>
      </FormControl>
    </div>
  );
}