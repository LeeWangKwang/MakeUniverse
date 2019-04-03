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
  render() {
    const { classes, project } = this.props;
    let percent;
    if (project.remain_token == 0) percent = 100;
    else
      percent = parseInt(
        ((project.total_token - project.remain_token) / project.total_token) *
          100
      );
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
                {project.data_value}
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
              <Typography component="p">{project.token_price} KRW</Typography>
            </GridItem>
            <GridItem xs={6} md={6}>
              <Typography
                variant="h6"
                component="h2"
                className={classes.projectSubTitle}
              >
                Total Value
              </Typography>
              <Typography component="p">
                {project.token_price * project.total_token} KRW
              </Typography>
            </GridItem>

            <GridItem xs={12} md={12}>
              <Card>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} md={6}>
                      <img
                        style={{ width: "100%", display: "block" }}
                        className={classes.imgCardTop}
                        src={project.album_img}
                        alt="Card-img-cap"
                      />
                    </GridItem>
                    <GridItem xs={12} md={6}>
                      <Typography variant="h6" component="h2">
                        {project.data_value}
                      </Typography>
                      <Typography variant="h5" component="h3">
                        {project.album_intro}
                      </Typography>
                      <br />
                      <Typography>
                        발매일 : {project.release_date}
                        <br />
                        장르 : {project.album_genre}
                        <br />
                        발매사 : {project.album_publisher}
                        <br />
                        기획사 : {project.album_agency}
                        <br />
                        <br />
                      </Typography>
                      <Hidden>
                        <Typography>{project.album_detail}</Typography>
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
