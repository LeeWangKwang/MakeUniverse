import React from "react";
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
import { Link } from "react-router-dom";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import imagesStyles from "../../../assets/jss/material-kit-react/imagesStyles";
import * as apiClient from "../../../apiClient";

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle
};
function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Item = props => {
  const { album_img, data_value, total_token, remain_token, classes } = props;
  let percent;
  if (remain_token == 0) percent = 100;
  else percent = parseInt(((total_token - remain_token) / total_token) * 100);
  return (
    <GridItem xs={12} md={4}>
      <Card>
        <img
          style={{ width: "100%", display: "block" }}
          className={classes.imgCardTop}
          src={album_img}
          alt="Card-img-cap"
        />
        <CardBody>
          <h4 className={classes.cardTitle}>{data_value}</h4>
          <div>Total Token : {numberWithCommas(total_token)}</div>
          <p>Tokens Remaining : {numberWithCommas(remain_token)} </p>
          <CustomLinearProgress
            variant="determinate"
            color="danger"
            value={percent}
          />
          <p>{percent}%</p>
          <GridContainer justify="center">
            <Button
              component={Link}
              to={`/projects/${data_value}`}
              color="primary"
              round
            >
              GET STARTED
            </Button>
          </GridContainer>
        </CardBody>
      </Card>
    </GridItem>
  );
};

class PreSalesSection extends React.Component {
  state = {
    projects: []
  };

  componentDidMount() {
    apiClient.get(`?type=presale&action=get`, null, res => {
      this.setState({ projects: res.Items.reverse() });
    });
  }

  render() {
    const { classes } = this.props;
    const { projects } = this.state;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Projects at a Glance</h2>
            <h5 className={classes.description}>
              These great K-POP artists are waiting for you to join them in creating amazing music and content!
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            {projects.map(p => (
              <Item {...p} classes={classes} key={p.data_value} />
            ))}
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(style)(PreSalesSection);
