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

const Item = props => {
  const { album_img, data_value, total_token, remain_token, classes } = props;
  let percent;
  if (remain_token == 0) percent = 100;
  else percent = parseInt(total_token / remain_token);
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
          <div>Total Token : {total_token}</div>
          <p>Remain Token : {remain_token} </p>
          <CustomLinearProgress
            variant="determinate"
            color="danger"
            value={percent}
          />
          <p>{percent}%</p>
          <GridContainer justify="center">
            <Button component={Link} to="/project" color="primary" round>
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
    apiClient.get(`/presales/get`, null, res => {
      this.setState({ projects: res.Items });
    });
  }

  render() {
    const { classes } = this.props;
    const { projects } = this.state;
    console.log(projects);
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
