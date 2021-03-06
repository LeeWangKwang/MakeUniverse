import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-react.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import Table from "@material-ui/core/Table/Table";
import TableHead from "@material-ui/core/TableHead/TableHead";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import TableBody from "@material-ui/core/TableBody/TableBody";
import moment from "moment";
import Paper from "@material-ui/core/Paper/Paper";
import community from "assets/json/community.js"
import { Link } from "react-router-dom";
import NewHeaderLinks from "../../components/Header/NewHeaderLinks";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import classNames from "classnames";
import projectPageStyle from "../../assets/jss/material-kit-react/views/projectPage";
import Typography from "@material-ui/core/Typography/Typography";
import communityPageStyle from "../../assets/jss/material-kit-react/views/communityPageStyles";
import Button from "@material-ui/core/Button/Button";
import * as apiClient from "../../apiClient";

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle,
  ...projectPageStyle,
  ...communityPageStyle,
};

class CommunityList extends React.Component {

  state = {
    community: null
  };

  componentDidMount(){
    apiClient.kodeBox(
        `community/`,
        null,
        res => {
          this.setState({ community: res });
        }
    );
  }
  render() {
    const { classes, ...rest } = this.props;
    const { community } = this.state
    const dashboardRoutes = [];
    return (
        <div className={classes.section}>
          <Header
              color="white"
              routes={dashboardRoutes}
              brand="makeUNIVERSE"
              rightLinks={<NewHeaderLinks />}
              fixed
              changeColorOnScroll={{
                height: 400,
                color: "white"
              }}
              {...rest}
          />
          <div className={classNames(classes.main)}>
            <div className={classes.container}>
              <h2 className={classes.communityTitle}>
                Community
                <Button
                    component={Link}
                    to={'/community/post'}
                    variant="contained"
                    size="large"
                    color="primary"
                    className={classes.button}
                    // onClick={this.handleClickOpen}
                >
                  Post
                </Button>
              </h2>
              <Paper className={classes.root}>
                <Table className={classes.table}>
                  <TableHead>
                    <TableRow>
                      <TableCell align="left">Title</TableCell>
                      <TableCell align="center">Name</TableCell>
                      <TableCell align="center">Published at</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {community ?
                        community.map(row => (
                            <TableRow key={row.Idx}>
                              <TableCell component="th" scope="row" align="left">
                                <Link to={`/community/${row.Idx}`} className={classes.link}>
                                  {row.title}
                                </Link>
                              </TableCell>
                              <TableCell align="center">{row.author}</TableCell>
                              <TableCell align="center">{moment(row.published).format('YYYY-MM-DD hh:mm:ss')}</TableCell>
                            </TableRow>
                        ))
                        :
                        <TableRow>
                          <TableCell align="center" colSpan="3">Empty</TableCell>
                        </TableRow>
                    }
                  </TableBody>
                </Table>
              </Paper>
            </div>
          </div>
          <Footer />
        </div>
    );
  }
};

export default withStyles(style)(CommunityList);