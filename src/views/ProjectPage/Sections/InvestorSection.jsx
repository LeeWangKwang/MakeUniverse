import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { withStyles } from "@material-ui/core/styles";
import imagesStyles from "../../../assets/jss/material-kit-react/imagesStyles";
import projectPageStyle from "../../../assets/jss/material-kit-react/views/projectPage";
import workStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle";
import * as apiClient from "../../../apiClient";

const style = {
  ...imagesStyles,
  ...workStyle,
  ...projectPageStyle
};


class InvestorSection extends React.Component {
  state = {
    investor: undefined
  };

  componentDidMount() {
    const { project } = this.props;
    apiClient.kodeBox(
        `assets/${project.assetType}/investments`,
        null,
        res => {
          this.setState({ investor: res });
        }
    );
  }

  render() {
    const { classes, project } = this.props;
    const { investor} = this.state;

    return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Nationality</TableCell>
                <TableCell align="right">Email address</TableCell>
                <TableCell align="right"># of tokens</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {investor && investor.length < 1 ?
                  <TableRow>
                    <TableCell align="center" colspan="5">Empty</TableCell>
                  </TableRow>
                  : investor && investor.map(row => (
                      <TableRow key={row.investor.id}>
                        <TableCell component="th" scope="row">
                          {row.createdAt}
                        </TableCell>
                        <TableCell align="right">{row.investor.name}</TableCell>
                        <TableCell align="right">{row.investor.nationality}</TableCell>
                        <TableCell align="right">{row.investor.email}</TableCell>
                        <TableCell align="right">{row.investAmount}</TableCell>
                      </TableRow>
                  ))
              }
            </TableBody>
          </Table>
        </Paper>
    );
  }
}

export default withStyles(style)(InvestorSection);
