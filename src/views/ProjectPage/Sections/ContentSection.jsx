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
    open: false,
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
    const { classes } = this.props;
    const { quantity, price } = this.state;

    return (
        <div className={classes.section}>
          <div>
            <GridContainer>
              <GridItem xs={12} md={12}>
                <Typography variant ="h4" component="h1" className={classes.projectTitle}>
                BTS NEW ALBUM
                </Typography>
              </GridItem>
              <GridItem xs={6} md={6}>
                <Typography variant="h6" component="h2" className={classes.projectSubTitle}>
                  Price
                </Typography>
                <Typography component="p">
                  10,000 KRW
                </Typography>
              </GridItem>
              <GridItem xs={6} md={6}>
                <Typography variant="h6" component="h2" className={classes.projectSubTitle}>
                  Total Value
                </Typography>
                <Typography component="p">
                  3,780,000,000 KRW
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
                        src="https://saluki.codechain.io/console/imgs/ab233b6e5143e64438622274d7386c78.PNG"
                        alt="Card-img-cap"
                    />
                    <GridContainer>
                      <GridItem xs={6} md={6}>
                        <Typography align="left">남은 토큰량 : 0개 </Typography>
                      </GridItem>
                      <GridItem xs={6} md={6}>
                        <Typography align="right">총 토큰량 : 378,000개</Typography>
                      </GridItem>
                    </GridContainer>
                    <CustomLinearProgress
                        variant="determinate"
                        color="danger"
                        value={100}
                    />
                      <Typography align="right">100%</Typography>

                    </GridItem>
                    <GridItem xs={12} md={6}>
                      <Typography>방탄소년단, LOVE YOURSELF 結 ‘Answer’ 발표! “팬들과의 축제” 시작<br/>
                        LOVE YOURSELF 모든 비밀이 드러나다! ‘진정한 사랑은 나 자신을 사랑하는 것부터’<br/>
                        타이틀곡 ‘IDOL’, 방탄소년단이 보여주는 ‘문화적 하이브리드’<br/><br/><br/></Typography>
                      Price
                      <TextField
                          variant="outlined"
                          id="filled-disabled"
                          fullWidth
                          defaultValue={price}
                          className={classNames(classes.margin, classes.textField)}
                      />
                      Quantity
                      <TextField
                          id="filled-adornment-amount"
                          className={classNames(classes.margin, classes.textField)}
                          variant="outlined"
                          type="number"
                          fullWidth
                          // defaultValue={""}
                          value={parseInt(quantity)}
                          onChange={this.handleChange('quantity')}
                          InputProps={{
                            startAdornment: <InputAdornment position="end"></InputAdornment>,
                          }}
                      />
                      Total
                      <TextField
                          variant="outlined"
                          id="filled-disabled"
                          type="number"
                          fullWidth
                          value={price*quantity}
                          className={classNames(classes.margin, classes.textField)}
                          InputProps={{
                            readOnly: true,
                            startAdornment: <InputAdornment style={{textAlign : "right"}} position="start"></InputAdornment>
                          }}
                      />
                      <Button variant="contained" size="large" color="primary" className={classes.button} onClick={this.handleClickOpen}>
                        Buy
                      </Button>
                      <Dialog
                          open={this.state.open}
                          onClose={this.handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                      >
                        <DialogTitle id="alert-dialog-title">{"BTS NEW ALBUM을 구매"}</DialogTitle>
                        <DialogContent>
                          <DialogContentText id="alert-dialog-description">
                            구매하시려는 개수가 {quantity}개가 맞습니까?
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
