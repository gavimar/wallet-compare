  import React,{useState} from 'react';
  import {TextField, Button} from '@material-ui/core';
  import { makeStyles} from '@material-ui/core/styles';
  import InputLabel from '@material-ui/core/InputLabel';
  import MenuItem from '@material-ui/core/MenuItem';
  import FormControl from '@material-ui/core/FormControl';
  import Select from '@material-ui/core/Select';
  import { blue } from '@material-ui/core/colors';


  const useStyles = makeStyles((theme) => ({

    formControl:{
      margin: theme.spacing(1),
      minWidth: 120,
      display:"flex",
      justifyContent:"center",
      width:'60%',
      margin:10,
      backgroundColor:'white',
      borderRadius: 10,
      border: blue,
      padding:5,
      ['@media (min-width:780px)']:{
        width:'50%',
      }
  },
  formContainer:{
    width:"100%",
    marginTop:20,
    display:"flex",
    justifyContent:"center"},
    icon:{
      width:"10px",
      height:"10px"
    },
    textFieldSearch:{
      width:"20%",
      backgroundColor:"white",
    },
    submitButton:{
      width:50,
      height:30,
      margin:10,
      marginLeft:30,
      ['@media (min-width:780px)']: {
        marginLeft:20
      }
    },
    formSubmit:{
      display:"flex",
      flexDirection:"row",
      alignItems:"flex-end",
      width:"100%",
    },
    select : { 
      borderWidth: 1, 
      borderStyle: 'solid',
      borderColor: "lightgrey",
      '&:hover':{
        borderColor: "black",
      },
      borderRadius: "10px",
      padding:"5px",
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

    return (
      <div className={classes.formContainer}>
        <FormControl className={classes.formControl}>
          <InputLabel id="demo-controlled-open-select-label" className={classes.inputLabel}>Select pair</InputLabel>
          
          <Select className={classes.select} disableUnderline
            labelId="demo-controlled-open-select-label"
            id="demo-controlled-open-select"
            open={open}
            onClose={handleClose}
            onOpen={handleOpen}
            value={props.pair}
            onChange={props.handleChange}
            InputProps={{ disableUnderline: true }}
          >
            
            <MenuItem value="btc-ltc"  data-comp="Hello" name="Hello">Bitcoin to Litecoin</MenuItem>
            <MenuItem value="ltc-btc" name ="Bye">Litecoin to Bitcoin</MenuItem>
            <MenuItem value="eth-btc">Ethereum to Bitcoin</MenuItem>
            <MenuItem value="btc-eth">Bitcoin to Ethereum</MenuItem>
            <MenuItem value="eth-ltc">Ethereum to Litecoin</MenuItem>
            <MenuItem value="ltc-eth">Litecoin to Ethereum</MenuItem>

          </Select>
          

          <div className={classes.formSubmit}>
          
          <TextField
              labelId="textfield-label"
              id="textfield"
              label="Amount"
              defaultValue="1"
              placeholder = "1"
              value={props.searchText}
              onChange={props.handleSearchTextChange}
              margin="normal"
              className={classes.textFieldSearch}
              InputProps={{ disableUnderline: true }}
              variant="outlined"
              />

          <Button variant="contained" color="primary" className={classes.submitButton} onClick={props.handleSubmit}>
            Go
          </Button>
          </div>

        </FormControl>
      </div>
    );
  }