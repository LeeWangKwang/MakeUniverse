import React from "react";
import classNames from "classnames";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";

import { cardTitle } from "assets/jss/material-kit-react.jsx";
import CardBody from "../../../components/Card/CardBody";
import CustomLinearProgress from "../../../components/CustomLinearProgress/CustomLinearProgress";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import imagesStyles from "../../../assets/jss/material-kit-react/imagesStyles";
import Typography from "@material-ui/core/Typography/Typography";
import projectPageStyle from "../../../assets/jss/material-kit-react/views/projectPage";
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment/InputAdornment";
import Button from "@material-ui/core/Button/Button";
import Dialog from "@material-ui/core/Dialog/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle,
  ...projectPageStyle
};

class ContentSection extends React.Component {
  state = {
    quantity: 1,
    price: 10000,
    open: false
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };
  render() {
    const { classes, project } = this.props;
    const { quantity, price } = this.state;
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
                      <GridContainer>
                        <GridItem xs={6} md={6}>
                          <Typography align="left">
                            Remain Token:{project.remain_token}
                          </Typography>
                        </GridItem>
                        <GridItem xs={6} md={6}>
                          <Typography align="right">
                            Total Token:{project.total_token}
                          </Typography>
                        </GridItem>
                      </GridContainer>
                      <CustomLinearProgress
                        variant="determinate"
                        color="danger"
                        value={percent}
                      />
                      <Typography align="right">{percent}%</Typography>
                    </GridItem>
                    <GridItem xs={12} md={6}>
                      <Typography>{project.album_intro}</Typography>
                      Price
                      <TextField
                        variant="outlined"
                        id="filled-disabled"
                        fullWidth
                        defaultValue={price}
                        className={classNames(
                          classes.margin,
                          classes.textField
                        )}
                      />
                      Quantity
                      <TextField
                        id="filled-adornment-amount"
                        className={classNames(
                          classes.margin,
                          classes.textField
                        )}
                        variant="outlined"
                        type="number"
                        fullWidth
                        // defaultValue={""}
                        value={parseInt(quantity)}
                        onChange={this.handleChange("quantity")}
                        InputProps={{
                          startAdornment: <InputAdornment position="end" />
                        }}
                      />
                      Total
                      <TextField
                        variant="outlined"
                        id="filled-disabled"
                        type="number"
                        fullWidth
                        value={price * quantity}
                        className={classNames(
                          classes.margin,
                          classes.textField
                        )}
                        InputProps={{
                          readOnly: true,
                          startAdornment: (
                            <InputAdornment
                              style={{ textAlign: "right" }}
                              position="start"
                            />
                          )
                        }}
                      />
                      <Button
                        variant="contained"
                        size="large"
                        color="primary"
                        className={classes.button}
                        onClick={this.handleClickOpen}
                      >
                        Buy
                      </Button>
                      <Dialog
                        open={this.state.open}
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-title"
                        aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">
                          {"BTS NEW ALBUM을 구매"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            구매하시려는 개수가 {quantity}개가 맞습니까?
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={this.handleClose} color="primary">
                            No
                          </Button>
                          <Button
                            onClick={this.handleClose}
                            color="primary"
                            autoFocus
                          >
                            Yes
                          </Button>
                        </DialogActions>
                      </Dialog>
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

export default withStyles(style)(ContentSection);
