import React, {Fragment} from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-react.jsx";
import CardBody from "../../components/Card/CardBody";

const style = {
  ...imagesStyles,
  cardTitle,
  textCenter: {
    textAlign: "center"
  },
};

class Banner extends React.Component {
  render() {
    const { classes } = this.props;
    return(
      <Fragment>
        <div className="tit">
          <h2>Banner</h2>
        </div>
        <Card>
          <img className={classes.imgCard} src="https://saluki.codechain.io/console/imgs/f94deb6d9aa20d1ddf21164f722e14b6.PNG" alt="Card-img" />
          <CardBody>
            <div className={classes.imgCardOverlay}>
              <h1 style={{color:"#FFF" , textAlign:"center"}}>Rainbow Concert</h1>

            </div>
          </CardBody>
        </Card>
      </Fragment>
    );
  }
};

export default withStyles(style)(Banner);