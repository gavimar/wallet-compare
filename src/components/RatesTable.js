import React,{useEffect,useState} from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Loader from './Loader'

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#325eec",
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);


const useStyles = makeStyles((theme) => ({
  table: {
    width:"100%",
  },
  tableContainer: {
    width:"60%",
    
  },
  ratesTable:{
    display:"flex",
    justifyContent:"center"
  }
}));

export default function RatesTable(props) {
  const classes = useStyles();
  
  
  const createData = (wallet, coinFrom, coinTo) => {
    return { wallet, coinFrom, coinTo };
  }
  

  const rows = props.entries.map(item => createData(item[0],1,item[1]))
  console.log(rows)
  const aver=[rows.map(row=> row.wallet)]
  console.log(aver)

  // const rows=[
    
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];


  if (!!props.coins){
    console.log(props.coins)
  }

  console.log(props.coins)

  return (
    <div className={classes.ratesTable}>
      {!props.loading ?
    <TableContainer component={Paper} className={classes.tableContainer}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead >
          <TableRow className={classes.tableHead}>
            <StyledTableCell>Wallet</StyledTableCell>
      <StyledTableCell align="right">{props.coins[0]}</StyledTableCell>
      <StyledTableCell align="right">{props.coins[1]}</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.wallet}>
              <StyledTableCell component="th" scope="row">
                {row.wallet}
              </StyledTableCell>
              <StyledTableCell align="right">{row.coinFrom}</StyledTableCell>
              <StyledTableCell align="right">{row.coinTo}</StyledTableCell>
              
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    : <Loader></Loader>
  }
    </div>
  );
}