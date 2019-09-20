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
            [부분 소유권 보유 혜택]<br/><br/>
            - 해당 음원의 부분소유권을 보유함으로써, 향후 아티스트에 관련한 이벤트 발생시 투표 권한을 갖게 됩니다 (예시. 아육대 출전! 플랜카드 슬로건 셀렉에 대한 투표권 행사 가능!)<br/>
            - 구매하신 부분소유권에 대한 계약증명서는 구매 시점부터 약 1년 후 저작인접권 수익률에 따라 70년동안 소량의 수익이 발생할 수 있습니다.<br/>
            <br/>
            [구매방법]<br/><br/>
            - 위에 창에서 구매할 부분소유권 계약증명서의 개수(Quantity)를 선택하세요 (*개수에 따라 달라지는 가격을 확인하세요)<br/>
            - 구매버튼을 누르면 뜨는 QR코드를 통해 앱을 다운로드 받으신 후, 회원 가입을 진행하세요<br/>
            - 안내받은 이메일 링크에 지갑주소를 입력하여 CCC를 받으세요 (CCC: 부분소유권 구매를 위한 코인)<br/>
            - 해당 프로젝트를 선택 후 구매를 진행하세요<br/>
            <br/>
            [유의사항]<br/><br/>
            - 가입한 정보 및 key 주소를 항상 백업하세요. Key를 잃어버리면 음원의 부분소유권 및 보유하고 계신 금액을 다시 찾을 수 없습니다.<br/>
            - 부분소유권 구매자 간 서로 계약증명서 거래가 가능합니다. 거래는 모든 플랫폼상에 저장되오니 이용에 차질이 없으시길 바랍니다.<br/>
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
