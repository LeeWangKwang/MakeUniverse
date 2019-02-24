/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// @material-ui/icons
import { Apps, AttachMoney, Build, Person, QuestionAnswerRounded } from "@material-ui/icons";

// core components
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function NewHeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <AttachMoney className={classes.icons} /> Pre-sale
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Build className={classes.icons} /> How it works
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.creative-tim.com/product/material-kit-react"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <QuestionAnswerRounded className={classes.icons} /> FAQ
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href='/login-page'
          color="transparent"
          className={classes.navLink}
        >
          <Person className={classes.icons} /> LOGIN
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(NewHeaderLinks);
