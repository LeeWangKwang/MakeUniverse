import React, {Fragment} from "react";
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
              <h2 className={classes.title}>Market Chart</h2>
              <h5 className={classes.description}>
                This is the paragraph where you can write more details about your
                product. Keep you user engaged by providing meaningful
                information. Remember that by this time, the user is curious,
                otherwise he wouldn't scroll to get here. Add a button if you want
                the user to see more.
              </h5>
            </GridItem>
          </GridContainer>
          <img style={{width:"100%"}} src={chart}/>
        </div>
    );
  }
};

export default withStyles(style)(MainChartSection);