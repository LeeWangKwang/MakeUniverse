import React, { Fragment } from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";

import { cardTitle } from "assets/jss/material-kit-react.jsx";
import CardBody from "../../../components/Card/CardBody";
import Button from "../../../components/CustomButtons/Button";
import CustomLinearProgress from "../../../components/CustomLinearProgress/CustomLinearProgress";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import imagesStyles from "../../../assets/jss/material-kit-react/imagesStyles";

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle
};

class PreSalesSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>PRE-SALE</h2>
            <h5 className={classes.description}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn't scroll to get here. Add a button if you want
              the user to see more.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} md={4}>
              <Card>
                <img
                  style={{ width: "100%", display: "block" }}
                  className={classes.imgCardTop}
                  src="https://saluki.codechain.io/console/imgs/ab233b6e5143e64438622274d7386c78.PNG"
                  alt="Card-img-cap"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>방탄소년단 신규앨범</h4>
                  <div>총 토큰량 : 378,000개</div>
                  <p>남은 토큰량 : 0개 </p>
                  <CustomLinearProgress
                    variant="determinate"
                    color="danger"
                    value={100}
                  />
                  <p>100%</p>
                  <GridContainer justify="center">
                    <Button color="primary" round>
                      GET STARTED
                    </Button>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} md={4}>
              <Card>
                <img
                  style={{ width: "100%", display: "block" }}
                  className={classes.imgCardTop}
                  src="https://saluki.codechain.io/console/imgs/f94deb6d9aa20d1ddf21164f722e14b6.PNG"
                  alt="Card-img-cap"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>레인보우 콘서트</h4>
                  <div>총 토큰량 : 500,000개</div>
                  <p>남은 토큰량 : 378,000개 </p>
                  <CustomLinearProgress
                    variant="determinate"
                    color="success"
                    value={25}
                  />
                  <div>25%</div>
                  <GridContainer justify="center">
                    <Button color="primary" round>
                      GET STARTED
                    </Button>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} md={4}>
              <Card>
                <img
                  style={{ width: "100%", display: "block" }}
                  className={classes.imgCardTop}
                  src="	https://saluki.codechain.io/console/imgs/b87908cbb7803ab4d8b4111dd4d4c863.PNG"
                  alt="Card-img-cap"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>
                    라붐 뮤직비디오(4분30초)
                  </h4>
                  <div>총 토큰량 : 400,000개</div>
                  <p>남은 토큰량 : 378,000개 </p>
                  <CustomLinearProgress
                    variant="determinate"
                    color="success"
                    value={5}
                  />
                  <p>5%</p>
                  <GridContainer justify="center">
                    <Button color="primary" round>
                      GET STARTED
                    </Button>
                  </GridContainer>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(PreSalesSection);
