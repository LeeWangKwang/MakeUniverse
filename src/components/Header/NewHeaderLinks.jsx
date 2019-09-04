/*eslint-disable*/
import React, { Fragment } from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import * as apiClient from "../../apiClient";

// @material-ui/icons
import {
  Apps,
  AttachMoney,
  Build,
  Person,
  QuestionAnswerRounded
} from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

class NewHeaderLinks extends React.Component {
  state = {
    isLogin: undefined,
  }

  componentDidMount() {
    apiClient.get(`user/my`, null, res => {
      if(res.id === 69) {
        res.id = 0
      }
      this.setState({isLogin:res.id})
    });
  }

  Logout() {
    apiClient.post(
        `user/session`,
        {
          "email":"makestar@kodebox.io",
          "password":"1q2w3e4r",
          "remember":true
        },
    );
    this.setState({isLogin:0})
  }

  render() {
    const { classes } = this.props;
    const { isLogin } = this.state;

    return (
      <List className={classes.list}>
        {/* <ListItem className={classes.listItem}>
          <Button href="/" color="transparent" className={classes.navLink}>
            <AttachMoney className={classes.icons} /> Pre-sale
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button href="/" color="transparent" className={classes.navLink}>
            <Build className={classes.icons} /> How it works
          </Button>
        </ListItem>
        <ListItem className={classes.listItem}>
          <Button href="/" color="transparent" className={classes.navLink}>
            <QuestionAnswerRounded className={classes.icons} /> FAQ
          </Button>
        </ListItem> */}
        <ListItem className={classes.listItem}>
          {!isLogin > 0 ? (
            <Link
              to="/login-page"
              color="transparent"
              className={classes.navLink}
            >
              <Person className={classes.icons} /> LOGIN
            </Link>
          ) : (
            <a
              color="transparent"
              className={classes.navLink}
              onClick={() => this.Logout()}
            >
              <Person className={classes.icons} /> LOGOUT
            </a>
          )}
        </ListItem>
      </List>
    );
  }
}

export default withStyles(headerLinksStyle)(NewHeaderLinks);
