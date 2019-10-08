import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-react.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import moment from "moment";
import Typography from "@material-ui/core/Typography/Typography";
import community from "assets/json/community.js"
import projectPageStyle from "../../assets/jss/material-kit-react/views/projectPage";
import classNames from "classnames";
import communityPageStyle from "../../assets/jss/material-kit-react/views/communityPageStyles";
import NewHeaderLinks from "../../components/Header/NewHeaderLinks";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import {Link} from "react-router-dom";
import * as apiClient from "../../apiClient";

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle,
  ...projectPageStyle,
  ...communityPageStyle
};

class CommunityPost extends React.Component {

  state = {
    user: null,
    title: '',
    content: '',
  };

  componentDidMount() {
    apiClient.get(`user/my`, null, res => {
      if(res.id === 69) {
        res.id = 0
      }
      this.setState({user:res.name})
    });
  }

  postCommunity(){
    apiClient.kodeBoxPost(
        `community/`,
        {
          author:this.state.user,
          title:this.state.title,
          content:this.state.content,
        }
    );
  }

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  render() {
    const { classes, ...rest } = this.props;
    const dashboardRoutes = [];
    return (
        <div className={classes.section}>
          <Header
              color="white"
              routes={dashboardRoutes}
              brand="makeUNIVERSE"
              rightLinks={<NewHeaderLinks />}
              fixed
              changeColorOnScroll={{
                height: 400,
                color: "white"
              }}
              {...rest}
          />
          <div className={classNames(classes.main, classes.communityPost)}>
            <div className={classes.container}>
              <Typography
                  variant="h6"
                  component="h2"
                  className={classes.projectSubTitle}
              >
                Title
              </Typography>
              <TextField
                  id="simple-start-adornment"
                  fullWidth
                  className={classNames(
                      classes.margin,
                      classes.textField,
                      classes.commentInput
                  )}
                  value={this.state.title}
                  onChange={this.handleChange("title")}
                  InputProps={{
                    startAdornment: <InputAdornment position="start"/>,
                  }}
              />
              <Typography
                  variant="h6"
                  component="h2"
                  className={classes.projectSubTitle}
              >
                Content
              </Typography>
              <div className={classes.comments}>
                <TextField
                    id="outlined-dense-multiline"
                    fullWidth
                    className={classNames(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    multiline
                    rows="10"
                    rowsMax="10"
                    value={this.state.content}
                    onChange={this.handleChange("content")}
                />
              </div>
              <Button
                  variant="contained"
                  size="large"
                  color="primary"
                  className={classNames(classes.button, classes.postBtn)}
                  onClick={() => {this.postCommunity()}}
                  component={Link}
                  to={'/community'}
              >
                Post
              </Button>
              <Button
                  component={Link}
                  to={'/community'}
                  variant="contained"
                  size="large"
                  color="secondary"
                  className={classNames(classes.button, classes.cancelBtn)}
              >
                Cancel
              </Button>
            </div>
          </div>
          <Footer />
        </div>
    );
  }
};

export default withStyles(style)(CommunityPost);