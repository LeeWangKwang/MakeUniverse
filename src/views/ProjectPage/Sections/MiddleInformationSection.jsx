import React, {Fragment} from "react";
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
        <div className={classes.infoWrap}>
          <Typography variant="h5" component="h3" className={classes.info}>
            Description
          </Typography>
          <Typography className={classes.infoText}>{project.scheme.metadata.description}</Typography>
        </div>
        <div className={classes.infoWrap}>
          <Typography variant="h5" component="h3" className={classes.info}>
            Notice
          </Typography>
          <Typography className={classes.infoText}>
            [구매방법]<br/><br/>
            - 위에 창에서 구매할 음원의 소유권 개수(Quantity)를 선택하세요 (*개수에 따라 달라지는 가격을 확인하세요. wCCC는 이 플랫폼상에서 쓰이는 원화입니다)<br/>
            - 구매버튼을 누르면 뜨는 QR코드를 통해 앱을 다운로드 받으신 후, 회원가입을 하시면 구매하신 음원을 확인하실 수 있습니다.<br/>
            <br/>
            [공동제작자의 관리]<br/><br/>
            - 구매하신 디지털 리워드는 상기 음원의 공동제작자 참여에 대한 디지털 계약서가 됩니다. <br/>
            (*공동제작자 권리에는 본 음원에 대한 저작인접권을 일부 포함합니다)<br/>
            - 상기 음원의 공동제작자 권리에 대한 디지털 계약서는 플랫폼상 기록이 되며 구매자들 간 거래도 가능합니다.<br/>
            **가입 정보 및 보유하고 디지털 계약서는 분실 시 다시 찾을 수 없으니, 보관에 유의하십시오<br/>
            <br/>
            [혜택]<br/><br/>
            1. 공동제작자들만의 특별한 커뮤니티 운영<br/>
            - 본 음워의 공동 제작자로써, 향후 공동제작자 커뮤니티를 통해 아티스트와 관련된 투표 어젠다를 직접 제시하고 참여할 수 있습니다 (예시. 세븐틴 해외투어 콘서트 팬 이벤트를 위한 슬로건 디자인 투표)<br/>
            <br/>
            2. 음원 수익에 따른 혜택 발생 가능성<br/>
            - 본 음원의 저작인접권 수익률에 따라 일정기간 공동제작자로 참여하신 여러분께 소정의 혜택이 발생할 수 있습니다. (*소정의 혜택이 발생 시 공동제작자 권리 보유량에 따라 아티스트 관련 리워드 등으로 보상될 수 있습니다)<br/>
          </Typography>
        </div>
        <div className={classes.infoWrap}>
          <Typography variant="h5" component="h3" className={classes.info}>
            Total Supply
          </Typography>
          <Typography className={classes.infoText}>{parseInt(project.scheme.supply, 16)}</Typography>
        </div>
        <div className={classes.infoWrap}>
          <Typography variant="h5" component="h3" className={classes.info}>
            Exchange Rate
          </Typography>
          <Typography className={classes.infoText}>{`${project.fundingAssets[0].ratio} ${project.fundingAssets[0].assetName} = 1 Token`}</Typography>
        </div>
        <div className={classes.infoWrap}>
          <Typography variant="h5" component="h3" className={classes.info}>
            Attachments
          </Typography>
          {project.scheme.metadata.attachments ? project.scheme.metadata.attachments.map((a, i) => {
            return (
                <a href={a.url}>{a.name}</a>
            )
          }) : undefined}
        </div>
        <div className={classes.infoWrap}>
          <Typography variant="h5" component="h3" className={classes.info}>
            Wallet
          </Typography>
          <a className={classes.modalText} href={"https://s3-us-west-1.amazonaws.com/universe-scenario.makestar.com/codechain-wallet-test-ec1da79797694f1a80b8f9c7963da668-signed.apk"}>지갑 다운받기</a>
        </div>
        {project.vote ?
          <Fragment>
            <Typography variant="h5" component="h3" className={classes.info}>
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
                Vote
              </Button>
              <Dialog
                  open={this.state.open}
                  onClose={this.handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
              >
                <DialogTitle id="alert-dialog-title">{"Vote"}</DialogTitle>
                <DialogContent>
                  <DialogContentText id="alert-dialog-description">
                    Confirm vote?
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
          </Fragment>
          : undefined }

        {/*<GridContainer>*/}
          {/*<GridItem xs={12} md={6} className={classes.info}>*/}
            {/*<Typography variant="h6" component="h3">*/}
              {/*Digital Asset Revenue*/}
            {/*</Typography>*/}
            {/*<ChartistGraph*/}
                {/*data={data}*/}
                {/*options={options}*/}
                {/*type={type}*/}
                {/*listener={animation}*/}
            {/*/>*/}
          {/*</GridItem>*/}
          {/*<GridItem xs={12} md={6} className={classes.info}>*/}
            {/*<Typography variant="h6" component="h3">*/}
              {/*Digital revenue category breakdown*/}
            {/*</Typography>*/}
            {/*<Typography className={classes.category}>*/}
              {/*Music streaming (Melon, Genie, Spotify, Apple Music, Amazon Music)*/}
            {/*</Typography>*/}
            {/*<Typography className={classes.category}>*/}
              {/*Performance royalties (TV, radio)*/}
            {/*</Typography>*/}
          {/*</GridItem>*/}
        {/*</GridContainer>*/}
      </div>
    );
  }
}

export default withStyles(style)(MiddleInformationSection);
