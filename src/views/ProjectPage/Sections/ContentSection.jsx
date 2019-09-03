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
import * as apiClient from "../../../apiClient";

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle,
  ...projectPageStyle
};

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class ContentSection extends React.Component {
  state = {
    quantity: 1,
    price:'',
    open: false,
    userId: null,
    transactions: null,
    addressInfo:null,
    user:null
  };

  componentDidMount() {
    apiClient.get(`/user/my`, null, res => {
      this.setState({userId:res.id, user:res.investor});
    });
    apiClient.get('/user/addresses', null, res => {
      this.setState({addressInfo:res})
    })
    this.setState({price:this.props.project.fundingAssets[0].ratio + ' '+ this.props.project.fundingAssets[0].assetName})
  }

  buyTokens(quantity) {
    this.handleClose()
    let investAmount = quantity * this.props.project.fundingAssets[0].ratio
    let payload = {
      address:this.state.addressInfo[0].address,
      asset:this.props.project.assetType,
      investAmount:investAmount.toString(),
      investAssetType:this.props.project.fundingAssets[0].assetType,
      legalName:this.state.user.legalName,
      nationality:this.state.user.nationality
    }
    apiClient.post(`/asset/${this.props.project.assetType}/investment`, payload, res =>{
      this.setState({transactions: res.Items});
    });
  }

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
    let percent = parseInt(
      (1 - (parseInt(project.scheme.supply, 16) - project.soldToken) / parseInt(project.scheme.supply, 16)) * 100
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
                {project.name}
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
              <Typography component="p">{`${project.fundingAssets[0].ratio} ${project.fundingAssets[0].assetName}`} </Typography>
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
                {`${numberWithCommas(parseInt(project.scheme.supply, 16) * project.fundingAssets[0].ratio)} ${project.fundingAssets[0].assetName}`}
              </Typography>
            </GridItem>

            <GridItem xs={12} md={12}>
              <Card>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} md={6}>
                      <img
                        style={{ width: "100%", display: "block", height: "auto" }}
                        className={classes.imgCardTop}
                        src={project.scheme.metadata.icon_url}
                        alt="Card-img-cap"
                      />
                      <GridContainer style={{marginTop: '10px', marginBottom: '5px'}}>
                        <GridItem xs={6} md={6}>
                          <Typography align="left">
                            Tokens remaining:{numberWithCommas(parseInt(project.scheme.supply, 16) - project.soldToken)}
                          </Typography>
                        </GridItem>
                        <GridItem xs={6} md={6}>
                          <Typography align="right">
                            Total Token:{numberWithCommas(parseInt(project.scheme.supply, 16))}
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
                      Price
                      <TextField
                        variant="outlined"
                        id="filled-disabled"
                        fullWidth
                        value={price}
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
                        fullWidth
                        value={`${numberWithCommas(project.fundingAssets[0].ratio * quantity)} ${project.fundingAssets[0].assetName}`}
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
                          {"Buying"}
                        </DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            Check the amount : {quantity}
                          </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                          <Button onClick={this.handleClose} color="primary">
                            No
                          </Button>
                          <Button
                            onClick={ () => this.buyTokens(quantity)}
                            color="primary"
                            autoFocus
                          >
                            Buy
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
