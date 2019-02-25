import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import pwcLogo from "assets/img/partnerships/pwc_logo.webp"
import kodeboxLogo from "assets/img/partnerships/kodebox_logo.webp"
import bighitLogo from "assets/img/partnerships/bighit_logo.png"
import ygLogo from "assets/img/partnerships/yg_logo.jpg"
import partnershipStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/partnershipStyle";


class PartnerSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div  className={classes.section}>
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title}>Official Partners</h2>
            </GridItem>
          </GridContainer>
          <GridContainer justify="center">
            <GridItem xs={12} sm={2}>
              <img
                  src={pwcLogo}
                  alt="..."
                  className={classes.icon}
              />
            </GridItem>
            <GridItem xs={12} sm={2}>
              <img
                  src={kodeboxLogo}
                  alt="..."
                  className={classes.icon}
              />
            </GridItem>
            <GridItem xs={12} sm={2}>
              <img
                  src={bighitLogo}
                  alt="..."
                  className={classes.icon}
              />
            </GridItem>
            <GridItem xs={12} sm={2}>
              <img
                  src={ygLogo}
                  alt="..."
                  className={classes.icon}
              />
            </GridItem>
          </GridContainer>
        </div>
    );
  }
}

export default withStyles(partnershipStyle)(PartnerSection);
