import React, { Fragment } from "react";
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
import Paper from "@material-ui/core/Paper/Paper";

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle,
  ...projectPageStyle
};

let id = 0;
function createData(trackNo, trackName) {
  id += 1;
  return { id, trackNo, trackName};
}

const rows = [
  createData(1, 'Euphoria'),
  createData(2, 'Trivia 起 : Just Dance'),
  createData(3, 'Serendipity (Full Length Edition)'),
  createData(4, 'DNA'),
  createData(5, '보조개'),
  createData(6, 'Trivia 承 : Love'),
  createData(7, 'Her'),
  createData(8, 'Singularity'),
  createData(9, 'FAKE LOVE'),
  createData(10, '전하지 못한 진심 (Feat. Steve Aoki)'),
  createData(11, 'Trivia 轉 : Seesaw'),
  createData(12, 'Tear'),
  createData(13, 'Epiphany'),
  createData(14, 'I`m Fine'),
  createData(15, 'IDOL'),
  createData(16, 'Answer : Love Myself'),
];


class DetailSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div>
          <h3>앨범 정보</h3>

          방탄소년단, LOVE YOURSELF 結 ‘Answer’ 발표! “팬들과의 축제” 시작<br/>
          LOVE YOURSELF 모든 비밀이 드러나다! ‘진정한 사랑은 나 자신을 사랑하는 것부터’<br/>
          타이틀곡 ‘IDOL’, 방탄소년단이 보여주는 ‘문화적 하이브리드’<br/><br/>

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
