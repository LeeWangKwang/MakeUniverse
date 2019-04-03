import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import { cardTitle } from "assets/jss/material-kit-react.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import imagesStyles from "../../../assets/jss/material-kit-react/imagesStyles";
import projectPageStyle from "../../../assets/jss/material-kit-react/views/projectPage";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle,
  ...projectPageStyle
};

let id = 0;
function createData(trackNo, trackName) {
  id += 1;
  return { id, trackNo, trackName };
}

class DetailSection extends React.Component {
  render() {
    const { classes, project } = this.props;
    let rows = [];
    project.album_track.map((t, i) => {
      rows.push(createData(i + 1, t));
    });

    return (
      <div>
        <h3>앨범 정보</h3>
        {project.album_detail}
        <br />
        <br />
        <h3>앨범 수록곡</h3>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell align="left">곡 정보</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow className={classes.row} key={row.id}>
                <TableCell component="th" scope="row">
                  {row.trackNo}
                </TableCell>
                <TableCell align="left">{row.trackName}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    );
  }
}

export default withStyles(style)(DetailSection);
