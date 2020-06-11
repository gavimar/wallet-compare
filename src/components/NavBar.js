import React, { useState } from "react";
import {AppBar, Toolbar, Typography, makeStyles, IconButton, Button, TextField} from '@material-ui/core'
import Monedero from '../images/icon.jpg'



const useStyles = makeStyles(theme => ({

   
    offset: theme.mixins.toolbar,
      

    menuButton: {
        marginRight: theme.spacing(2),
        // [theme.breakpoints.up('sm')]: {
        //     display: 'none',
        // },
    },
    title:{
        
        marginLeft:20,
        marginRight:20,
        flexGrow: 1,
    },

    appBar:{
      backgroundColor:"white",
      color:"black"
    },

    loginButton:{
      backgroundColor: 	"#fee74b",
      '&:hover': {
        background: "#325eec",
        color: "white"
     }
    }

}))

const Navbar = (props) => {

  
    const [anchorEl, setAnchorEl] = useState(null);

    const classes = useStyles()
    return (
        <div>

        <AppBar className={classes.appBar}>
            <Toolbar>
    <img src={Monedero}></img>
               
                

                <Typography variant='h6' className={classes.title}>
                    Monedero
                </Typography>
               

                <Button variant="text" color="inherit">
                </Button>
                <Button variant="text" color="inherit" className={classes.loginButton}>
                    Login
                </Button>
            </Toolbar>
        </AppBar> 
        <div className={classes.offset}></div>
        </div>
    )
}

export default Navbar