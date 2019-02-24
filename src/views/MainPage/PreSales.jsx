import React, {Fragment} from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";

import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-react.jsx";
import CardBody from "../../components/Card/CardBody";
import Button from "../../components/CustomButtons/Button";
import CustomLinearProgress from "../../components/CustomLinearProgress/CustomLinearProgress";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

const style = {
  ...imagesStyles,
  cardTitle,
};

class PreSales extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div className="Main_PreSales" >
          <div className="tit">
            <h2>Pre Sales</h2>
          </div>
          <GridContainer>
            <GridItem xs={12} sm={4}>
              <Card style={{width: "20rem", display:"inline-block"}}>
                <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src="https://saluki.codechain.io/console/imgs/ab233b6e5143e64438622274d7386c78.PNG"
                    alt="Card-img-cap"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>방탄소년단 신규앨범</h4>
                  <p>총 토큰량 : 378,000개</p>
                  <p>남은 토큰량 : 0개 </p>
                  <Button color="primary">Buy</Button>
                  <CustomLinearProgress
                      variant="determinate"
                      color="danger"
                      value={100}
                  />
                  <p>100%</p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <Card style={{width: "20rem", display:"inline-block"}}>
                <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src="https://saluki.codechain.io/console/imgs/f94deb6d9aa20d1ddf21164f722e14b6.PNG"
                    alt="Card-img-cap"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>방탄소년단 신규앨범</h4>
                  <p>총 토큰량 : 500,000개</p>
                  <p>남은 토큰량 : 378,000개 </p>
                  <Button color="primary">Buy</Button>
                  <CustomLinearProgress
                      variant="determinate"
                      color="success"
                      value={75}
                  />
                  <p>75%</p>
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={4}>
              <Card style={{width: "20rem", display:"inline-block"}}>
                <img
                    style={{height: "180px", width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src="	https://saluki.codechain.io/console/imgs/b87908cbb7803ab4d8b4111dd4d4c863.PNG"
                    alt="Card-img-cap"
                />
                <CardBody>
                  <h4 className={classes.cardTitle}>라붐 뮤직비디오(4분30초)</h4>
                  <p>총 토큰량 : 400,000개</p>
                  <p>남은 토큰량 : 378,000개 </p>
                  <Button color="primary">Buy</Button>
                  <CustomLinearProgress
                      variant="determinate"
                      color="success"
                      value={95}
                  />
                  <p>95%</p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
    );
  }
};

export default withStyles(style)(PreSales);