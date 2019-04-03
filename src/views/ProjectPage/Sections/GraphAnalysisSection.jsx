import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import { cardTitle } from "assets/jss/material-kit-react.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import imagesStyles from "../../../assets/jss/material-kit-react/imagesStyles";
import projectPageStyle from "../../../assets/jss/material-kit-react/views/projectPage";

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle,
  ...projectPageStyle
};

class GraphAnalysisSection extends React.Component {
  render() {
    const { classes } = this.props;
    return <div className={classes.section} />;
  }
}

export default withStyles(style)(GraphAnalysisSection);
