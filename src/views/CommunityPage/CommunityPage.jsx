import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.jsx";

import { cardTitle } from "assets/jss/material-kit-react.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import moment from "moment";
import Typography from "@material-ui/core/Typography/Typography";
// import community from "assets/json/community.js"
import projectPageStyle from "../../assets/jss/material-kit-react/views/projectPage";
import classNames from "classnames";
import communityPageStyle from "../../assets/jss/material-kit-react/views/communityPageStyles";
import NewHeaderLinks from "../../components/Header/NewHeaderLinks";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import * as apiClient from "../../apiClient";

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle,
  ...projectPageStyle,
  ...communityPageStyle
};

class CommunityPage extends React.Component {

  state = {
    community: null,
    user: null,
    commentText: ''
  };

  componentDidMount(){
    const { match: { params } } = this.props;
    apiClient.kodeBox(
      `community/${params.communityId}`,
      null,
      res => {
        this.setState({ community: res[0] });
      }
    );

    apiClient.get(`user/my`, null, res => {
      if(res.id !== 69) {
        this.setState({user: res})
      }
    });
  }

  postComment(){
    const { match: { params: { communityId } } } = this.props;
    if (this.state.user !== null) {
      apiClient.kodeBoxPost(
        `community/${communityId}/comment`,
        {
          author:this.state.user.author,
          text:this.state.commentText
        },
        res => {
          apiClient.kodeBox(
            `community/${communityId}`,
            null,
            res => {
              this.setState({ community: res });
            }
          );
        }
      );
    } else {
      alert("로그인이 필요합니다.")
    }
  }

  render() {
    const { classes, ...rest } = this.props;
    const { community } = this.state;
    const dashboardRoutes = [];
    if (community !== null) {
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
          <div className={classNames(classes.main)}>
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} md={12}>
                  <Typography
                    variant="h4"
                    component="h1"
                    className={classes.projectTitle}
                  >
                    {community.title}
                  </Typography>
                </GridItem>
                <GridItem xs={6} md={6}>
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.projectSubTitle}
                  >
                    Author
                  </Typography>
                  <Typography component="p">{community.author} </Typography>
                </GridItem>
                <GridItem xs={6} md={6}>
                  <Typography
                    variant="h6"
                    component="h2"
                    className={classes.projectSubTitle}
                  >
                    Published at
                  </Typography>
                  <Typography component="p">
                    {moment(community.published).format('YYYY-MM-DD hh:mm:ss')}
                  </Typography>
                </GridItem>
              </GridContainer>
              <div className={classes.communityContent}>
                <Typography component="p">
                  {community.content}
                </Typography>
              </div>

              <Typography
                variant="h6"
                component="h2"
                className={classes.projectSubTitle}
              >
                Comments
              </Typography>
              <div className={classes.comments}>
                <TextField
                  variant="outlined"
                  id="filled-disabled"
                  value={this.state.commentText}
                  onChange={(e) => this.setState({commentText: e.target.value})}
                  fullWidth
                  className={classNames(
                    classes.margin,
                    classes.textField,
                    classes.commentInput
                  )}
                  InputProps={{
                    readOnly: false,
                    startAdornment: (
                      <InputAdornment
                        style={{ textAlign: "right" }}
                        position="start"
                      />
                    ),
                    endAdornment: (
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        className={classes.button}
                        // onClick={this.handleClickOpen}
                      >
                        Post
                      </Button>
                    )
                  }}
                />
              </div>
              <div className={classes.commentsWrap}>
                {community && community.comment && community.comment.length > 0 ?
                  community.comment.map(row => (
                    <div className={classes.comment}>
                      <div className={classes.commentId}>{row.author}</div>
                      <div className={classes.commentContent}>{row.contents}</div>
                    </div>
                  ))
                  : undefined
                }
              </div>
            </div>
          </div>
          <Footer />
        </div>
      );
    } else {
      return (<div></div>)
    }
  }
};

export default withStyles(style)(CommunityPage);