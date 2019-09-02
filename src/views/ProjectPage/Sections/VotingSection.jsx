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
    const { classes, project } = this.props;
    const { vote} = this.state;

    return (
        <Paper className={classes.root}>
          <Table className={classes.table}>
            <TableHead>
              <TableRow>
                <TableCell>Question</TableCell>
                <TableCell align="right">Status</TableCell>
                <TableCell align="right">Vote opens at</TableCell>
                <TableCell align="right">Vote closes at</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {vote && vote.total > 0 ?
                  vote.data.map(row => (
                      <TableRow key={row.id}>
                        <TableCell component="th" scope="row">
                          {row.title}
                        </TableCell>
                        <TableCell align="right">{row.status.type}</TableCell>
                        <TableCell align="right">{row.schedule.open}</TableCell>
                        <TableCell align="right">{row.schedule.close}</TableCell>
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
    );
  }
}

export default withStyles(style)(VotingSection);
