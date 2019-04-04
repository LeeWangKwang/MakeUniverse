import React from "react";
import ChartistGraph from "react-chartist";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import { cardTitle } from "assets/jss/material-kit-react.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import imagesStyles from "../../../assets/jss/material-kit-react/imagesStyles";
import projectPageStyle from "../../../assets/jss/material-kit-react/views/projectPage";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Typography from "@material-ui/core/Typography/Typography";
import FormControl from "@material-ui/core/FormControl/FormControl";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import Button from "@material-ui/core/Button/Button";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Dialog from "@material-ui/core/Dialog/Dialog";

var Chartist = require("chartist");
var delays = 80,
  durations = 500;

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle,
  ...projectPageStyle
};

class MiddleInformationSection extends React.Component {
  state = {
    value: "1",
    open: false
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes, project } = this.props;

    let data = {
      labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      series: [project.asset_revenue]
    };

    let options = {
      high: 200,
      low: 0,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return value;
        }
      }
    };
    let type = "Bar";

    var animation = {
      draw: function(data) {
        if (data.type === "line" || data.type === "area") {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path
                .clone()
                .scale(1, 0)
                .translate(0, data.chartRect.height())
                .stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === "point") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: "ease"
            }
          });
        }
      }
    };

    return (
      <div className={classes.middleInfo}>
        <GridContainer>
          <GridItem xs={12} md={6} className={classes.info}>
            <Typography variant="h6" component="h3">
              Basic Information
            </Typography>
            <Typography className={classes.type}>Validity period of rights</Typography>
            <Typography className={classes.typeValue}>
              {project.basic_information[0]}
            </Typography>
            <Typography className={classes.type}>
              Copyright trust
            </Typography>
            <Typography className={classes.typeValue}>
              {project.basic_information[1]}
            </Typography>
            <Typography className={classes.type}>Trustee</Typography>
            <Typography className={classes.typeValue}>
              {project.basic_information[2]}
            </Typography>
          </GridItem>
          <GridItem xs={12} md={6} className={classes.info}>
            <Typography variant="h6" component="h3">
              Digital Asset Revenue
            </Typography>
            <ChartistGraph
                data={data}
                options={options}
                type={type}
                listener={animation}
            />
          </GridItem>
          <GridItem xs={12} md={6} className={classes.info}>
            <Typography variant="h6" component="h3">
              Issue Voting
            </Typography>
            <FormControl component="fieldset" className={classes.formControl}>
              <RadioGroup
                name="Issue Voting"
                className={classes.group}
                value={this.state.value}
                onChange={this.handleChange}
              >
                {project.issue_voting.map((item, i) => {
                  return (
                    <FormControlLabel
                      key={`vote_${i}`}
                      value={(i + 1).toString()}
                      control={<Radio color="primary" />}
                      label={item}
                    />
                  );
                })}
              </RadioGroup>
              <Button
                variant="contained"
                size="medium"
                color="primary"
                className={classes.button}
                onClick={this.handleClickOpen}
              >
                투표
              </Button>
              <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"투표"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    투표하시겠습니까?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color="primary">
                    No
                  </Button>
                  <Button onClick={this.handleClose} color="primary" autoFocus>
                    Yes
                  </Button>
                </DialogActions>
              </Dialog>
            </FormControl>
          </GridItem>
          <GridItem xs={12} md={6} className={classes.info}>
            <Typography variant="h6" component="h3">
              Digital revenue category breakdown
            </Typography>
            <Typography className={classes.category}>
              Music streaming (Melon, Genie, Spotify, Apple Music, Amazon Music)
            </Typography>
            <Typography className={classes.category}>
              Performance royalties (TV, radio)
            </Typography>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(style)(MiddleInformationSection);
