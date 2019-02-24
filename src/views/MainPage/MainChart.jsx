import React, {Fragment} from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-react.jsx";
import chart from "assets/img/CopyrightChart.png"

const style = {
  ...imagesStyles,
  cardTitle,
};

class MainChart extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className="Main_PreSales" >
          <div className="tit">
            <h2>Market Chart</h2>
          </div>
          <img style={{width:"100%"}} src={chart}/>
        </div>
    );
  }
};

export default withStyles(style)(MainChart);