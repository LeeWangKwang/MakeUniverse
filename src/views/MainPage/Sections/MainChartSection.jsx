import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-react.jsx";
import chart from "assets/img/CopyrightChart.png"

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle
};

class MainChartSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className="Main_PreSales" >
          <GridContainer justify="center">
            <GridItem xs={12} sm={12} md={8}>
              <h2 className={classes.title}>The Market</h2>
              <h5 className={classes.description}>
                Did you know that most music content generates only 20% of their lifetime revenue in the first year of their release?

              </h5>
            </GridItem>
          </GridContainer>
          <img style={{width:"100%"}} src={chart} alt={"main chart"}/>
        </div>
    );
  }
};

export default withStyles(style)(MainChartSection);