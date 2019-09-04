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
import Typography from "@material-ui/core/Typography";
import moment from "moment";

const style = {
  ...imagesStyles,
  ...workStyle,
  ...projectPageStyle
};


class VotingSection extends React.Component {
  state = {
    vote: undefined
  };

  componentDidMount() {
    const { project } = this.props;
    apiClient.kodeBox(
        `assets/${project.assetType}/votes`,
        null,
        res => {
          this.setState({ vote: res });
        }
    );
  }

  render() {
    const { classes } = this.props;
    const { vote} = this.state;

    return (
      <React.Fragment>
        <Typography variant="h5" component="h3" className={classes.info}>
          Vote
        </Typography>
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell align="center">Question</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Vote opens at</TableCell>
                <TableCell align="center">Vote closes at</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vote && vote.total > 0 ?
                vote.data.map(row => (
                  <TableRow key={row.id}>
                    <TableCell component="th" scope="row" align="center">
                      {row.title}
                    </TableCell>
                    <TableCell align="center">{row.status.type}</TableCell>
                    <TableCell align="center">{moment(row.schedule.open).format('YYYY-MM-DD hh:mm:ss')}</TableCell>
                    <TableCell align="center">{moment(row.schedule.close).format('YYYY-MM-DD hh:mm:ss')}</TableCell>
                  </TableRow>
                ))
                :
                <TableRow>
                  <TableCell align="center" colspan="4">Empty</TableCell>
                </TableRow>
              }
            </TableBody>
          </Table>
        </Paper>
      </React.Fragment>
    );
  }
}

export default withStyles(style)(VotingSection);
