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

class MembershipSection extends React.Component {
  render() {
    const { classes, project } = this.props;
    return (
      <div>
        <h3>#구매혜택</h3>
        {project.membership_detail}
      </div>
    );
  }
}

export default withStyles(style)(MembershipSection);
