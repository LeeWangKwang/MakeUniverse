import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";

import { cardTitle } from "assets/jss/material-kit-react.jsx";
import CardBody from "../../../components/Card/CardBody";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import imagesStyles from "../../../assets/jss/material-kit-react/imagesStyles";
import Typography from "@material-ui/core/Typography/Typography";
import projectPageStyle from "../../../assets/jss/material-kit-react/views/projectPage";
import Hidden from "@material-ui/core/Hidden/Hidden";

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle,
  ...projectPageStyle
};

class ClosedContentSection extends React.Component {
  state = {};

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <div>
          <GridContainer>
            <GridItem xs={12} md={12}>
              <Typography
                variant="h4"
                component="h1"
                className={classes.projectTitle}
              >
                B.A.P NOIR
              </Typography>
            </GridItem>
            <GridItem xs={6} md={6}>
              <Typography
                variant="h6"
                component="h2"
                className={classes.projectSubTitle}
              >
                Price
              </Typography>
              <Typography component="p">10,000 KRW</Typography>
            </GridItem>
            <GridItem xs={6} md={6}>
              <Typography
                variant="h6"
                component="h2"
                className={classes.projectSubTitle}
              >
                Total Value
              </Typography>
              <Typography component="p">3,780,000,000 KRW</Typography>
            </GridItem>

            <GridItem xs={12} md={12}>
              <Card>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} md={6}>
                      <img
                        style={{ width: "100%", display: "block" }}
                        className={classes.imgCardTop}
                        src="https://cdnimg.melon.co.kr/cm/album/images/100/12/902/10012902_500.jpg/melon/resize/282/quality/80/optimize"
                        alt="Card-img-cap"
                      />
                    </GridItem>
                    <GridItem xs={12} md={6}>
                      <Typography variant="h6" component="h2">
                        NOIR
                      </Typography>
                      <Typography variant="h5" component="h3">
                        두 번째 정규앨범 'NOIR'로 돌아온 B.A.P. '느와르'라는
                        옷을 입고 거친 '남자'로 돌아오다.
                      </Typography>
                      <br />
                      <Typography>
                        발매일 : 2016.11.07
                        <br />
                        장르 : Dance, Ballad
                        <br />
                        발매사 : 티에스앤엔터테인먼트
                        <br />
                        기획사 : (주)RBW
                        <br />
                        <br />
                      </Typography>
                      <Hidden mdDown>
                        <Typography>
                          두 번째 정규앨범 'NOIR'로 거친 남자가 되어 돌아온
                          B.A.P. 그간 독보적인 강렬한 컨셉으로 전 세계를
                          사로잡은 여섯 남자는 16개국 32회라는 월드투어의
                          대장정으로 다져진 경험을 통해 명실공히 세계가 인정하는
                          아티스트로 거듭났다. B.A.P의 아이덴티티를 다시 한 번
                          각인시킬 이번 정규앨범 'NOIR'는 멤버들의 수준 높은
                          퍼포먼스와 음악 그리고 한층 더 성숙해진 비주얼까지
                          'Best', 'Absolute', 'Perfect'라는 수식어가 아깝지 않은
                          B.A.P의 확고한 존재감을 엿볼 수 있는 결과물이다.
                        </Typography>
                      </Hidden>
                    </GridItem>
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

export default withStyles(style)(ClosedContentSection);
