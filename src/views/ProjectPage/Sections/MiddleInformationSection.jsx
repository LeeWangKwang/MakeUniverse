import React, { Fragment } from "react";
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
import FormLabel from "@material-ui/core/FormLabel/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import Radio from "@material-ui/core/Radio/Radio";
import Button from "@material-ui/core/Button/Button";
import DialogTitle from "@material-ui/core/DialogTitle/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions/DialogActions";
import Dialog from "@material-ui/core/Dialog/Dialog";

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle,
  ...projectPageStyle
};

class MiddleInformationSection extends React.Component {
  state = {
    value: '1',
    open: false,
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
    const { classes } = this.props;
    return (
        <div className={classes.middleInfo}>
          <GridContainer>
            <GridItem xs={12} md={6} className={classes.info}>
              <Typography variant ="h6" component="h3">
                기본 정보
              </Typography>
              <Typography className={classes.type}>저작권 보호기간</Typography>
              <Typography className={classes.typeValue}>원작자 사후 70년</Typography>
              <Typography className={classes.type}>최근 1년 저작권료 (1조각)</Typography>
              <Typography className={classes.typeValue}>688원</Typography>
              <Typography className={classes.type}>시작가 대비</Typography>
              <Typography className={classes.typeValue}>15.3%</Typography>
              <Typography className={classes.type}>저작권신탁</Typography>
              <Typography className={classes.typeValue}>한국음악저작권협회</Typography>
              <Typography className={classes.type}>대표신탁자</Typography>
              <Typography className={classes.typeValue}>Make Universe</Typography>
            </GridItem>
            <GridItem xs={12} md={6} className={classes.info}>
              <Typography variant ="h6" component="h3">
                최근 1년 저작권료 (1조각 기준)
              </Typography>
              <Typography className={classes.type}>방송 (TV, 라디오, 유튜브 등)</Typography>
              <Typography className={classes.typeValue}>19원 (2.8%)</Typography>
              <Typography className={classes.type}>전송 (음원유통사, 컬러링 등)</Typography>
              <Typography className={classes.typeValue}>360원 (52.3%)</Typography>
              <Typography className={classes.type}>복제 (음반, 영화, 광고 등)</Typography>
              <Typography className={classes.typeValue}>19원 (2.8%)</Typography>
              <Typography className={classes.type}>공연 (노래방, 유원시설 등)</Typography>
              <Typography className={classes.typeValue}>182원 (26.5%)</Typography>
              <Typography className={classes.type}>방송 (TV, 라디오, 유튜브 등)</Typography>
              <Typography className={classes.typeValue}>19원 (2.8%)</Typography>
              <Typography className={classes.type}>해외</Typography>
              <Typography className={classes.typeValue}>108원 (15.7%)</Typography>
              <Typography className={classes.type}>기타</Typography>
              <Typography className={classes.typeValue}>0원 (0%)</Typography>
            </GridItem>
            <GridItem xs={12} md={6} className={classes.info}>
              <Typography variant ="h6" component="h3">
                Issue Voting
              </Typography>

              <FormControl component="fieldset" className={classes.formControl}>
                <RadioGroup
                    name="Issue Voting"
                    className={classes.group}
                    value={this.state.value}
                    onChange={this.handleChange}
                >
                  <FormControlLabel
                      value="1"
                      control={<Radio color="primary" />}
                      label="밥차 지원"
                  />
                  <FormControlLabel
                      value="2"
                      control={<Radio color="primary" />}
                      label="쇼핑 시켜주기"
                  />
                  <FormControlLabel
                      value="3"
                      control={<Radio color="primary" />}
                      label="치킨 사주기"
                  />
                </RadioGroup>
                <Button variant="contained" size="medium" color="primary" className={classes.button} onClick={this.handleClickOpen}>
                  권력 행사
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">{"권력 행사"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      선택된 항목에 대하여 가지신 지분만큼 권력을 행사하시겠습니까?
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
              <Typography variant ="h6" component="h3">
                Digital Asset Revenue
              </Typography>
            </GridItem>
          </GridContainer>
        </div>
    );
  }
}

export default withStyles(style)(MiddleInformationSection);
