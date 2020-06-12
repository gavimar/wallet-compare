import React from "react";
import {AppBar, Toolbar, Typography, makeStyles, Button} from '@material-ui/core'
import Monedero from '../images/icon.jpg'


const useStyles = makeStyles(theme => ({
    offset: theme.mixins.toolbar,
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title:{
        marginLeft:20,
        marginRight:20,
        flexGrow: 1,
        fontFamily: 'Prompt',
        fontWeight:700
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

const Navbar = () => {
    const classes = useStyles()
    return (
        <div>
            <AppBar className={classes.appBar}>
                <Toolbar>
                    <img src={Monedero} alt="icon"></img>
                    <Typography variant='h6' className={classes.title}>
                        monedero
                    </Typography>
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