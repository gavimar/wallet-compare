import React from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import Loader from './Loader';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.primary.main,
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
    width:"90%",
    ['@media (min-width:780px)']: {
      width:"60%"
    }
    
  },
  ratesTable:{
    display:"flex",
    justifyContent:"center"
  },
  smallCol:{
    width:"15px",
    ['@media (min-width:780px)']: {
      width:"auto"
    }
  },
  wallet:{
    width:"40px",
    ['@media (min-width:780px)']: {
      width:"auto"
    }
  }
}));

export default function RatesTable(props) {
  const classes = useStyles();
  const createData = (wallet, coinFrom, coinTo) => {
    return { wallet, coinFrom, coinTo };
  }
  const rows = props.entries.map(item => createData(item[0],props.amountTable,item[1]))
  
  

  return (
    <div className={classes.ratesTable}>
      {!props.loading ?
        <TableContainer component={Paper} className={classes.tableContainer}>
          <Table className={classes.table} aria-label="customized table" style={{ tableLayout: 'fixed' }}>
            <TableHead >
              <TableRow className={classes.tableHead}>
                <StyledTableCell className={classes.wallet}>Wallet</StyledTableCell>
                <StyledTableCell align="right" className={classes.smallCol}>{props.coins[0]}</StyledTableCell>
                <StyledTableCell align="right" className={classes.smallCol}><NavigateNextIcon fontSize="small" /></StyledTableCell>
                <StyledTableCell align="right">{props.coins[1]}</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <StyledTableRow key={row.wallet}>
                  <StyledTableCell component="th" scope="row">
                    {row.wallet}
                  </StyledTableCell>
                  <StyledTableCell align="right" className={classes.smallCol}>{row.coinFrom}</StyledTableCell>
                  <StyledTableCell align="right" className={classes.smallCol}><NavigateNextIcon fontSize="small" /></StyledTableCell>
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