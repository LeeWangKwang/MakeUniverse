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
import moment from "moment";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link/Link";

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
    const { classes } = this.props;
    const { investor} = this.state;

    return (
      <React.Fragment>
        <Typography variant="h5" component="h3" className={classes.info}>
          Investor
        </Typography>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Date</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Nationality</TableCell>
                <TableCell align="center">Email address</TableCell>
                <TableCell align="center"># of tokens</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {investor && investor.length < 1 ?
                  <TableRow>
                    <TableCell align="center" colSpan="5">Empty</TableCell>
                  </TableRow>
                  : investor && investor.map(row => (
                      <TableRow key={row.investor.id}>
                        <TableCell component="th" scope="row" align="center">
                          <Link href={`https://corgi.codechain.io/explorer/addr-asset/${row.address}`}>
                            {moment(row.createdAt).format('YYYY-MM-DD hh:mm:ss')}
                          </Link>
                        </TableCell>
                        <TableCell align="center">{row.investor.name}</TableCell>
                        <TableCell align="center">{row.investor.nationality}</TableCell>
                        <TableCell align="center">{row.investor.email}</TableCell>
                        <TableCell align="center">{row.investAmount}</TableCell>
                      </TableRow>
                  ))
              }
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(style)(InvestorSection);
