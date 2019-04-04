import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import { cardTitle } from "assets/jss/material-kit-react.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import imagesStyles from "../../../assets/jss/material-kit-react/imagesStyles";
import projectPageStyle from "../../../assets/jss/material-kit-react/views/projectPage";
import Paper from "@material-ui/core/Paper/Paper";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableBody from "@material-ui/core/TableBody/TableBody";
import TableCell from "@material-ui/core/TableCell/TableCell";

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle,
  ...projectPageStyle
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
function dateFormmating(date){
  let year = date.substring(0,4);
  let month = date.substring(4,6)
  let day = date.substring(6,8);

  return year+'-'+month+'-'+day

}
class HistorySection extends React.Component {
  render() {

    const { classes, project, transactions } = this.props;

    console.log(transactions)
    return (
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell align="right">Quantity</TableCell>
              <TableCell align="right">Price (￦)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((t,i) => (
              <TableRow className={classes.row} key={i}>
                <TableCell component="th" scope="row">
                  {dateFormmating(t.transaction_date)}
                </TableCell>
                <TableCell align="right">{numberWithCommas(t.quantity)}</TableCell>
                <TableCell align="right">{numberWithCommas(t.quantity * project.token_price)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(style)(HistorySection);
