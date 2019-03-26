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

let id = 0;
function createData(date, quantity, total) {
  id += 1;
  return { id, date, quantity, total};
}

const rows = [
  createData('2019-04-03', 3, "30,000"),
  createData('2018-11-30', 2, "20,000"),
  createData('2018-10-05', 10, "100,000"),
];


class HistorySection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>거래 일자</TableCell>
                <TableCell align="right">수량</TableCell>
                <TableCell align="right">가격 (￦)</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map(row => (
                  <TableRow className={classes.row} key={row.id}>
                    <TableCell component="th" scope="row">
                      {row.date}
                    </TableCell>
                    <TableCell align="right">{row.quantity}</TableCell>
                    <TableCell align="right">{row.total}</TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
    );
  }
}

export default withStyles(style)(HistorySection);
