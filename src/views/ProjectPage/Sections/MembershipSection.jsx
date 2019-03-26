import React, { Fragment } from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import { cardTitle } from "assets/jss/material-kit-react.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import imagesStyles from "../../../assets/jss/material-kit-react/imagesStyles";
import projectPageStyle from "../../../assets/jss/material-kit-react/views/projectPage";

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle,
  ...projectPageStyle
};

class MembershipSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
        <div>
          <h3>#구매혜택</h3>
          공개방송 우선 입장 기회 제공<br/>
          BTS 팬미팅, 단독콘서트, 이벤트 선예매 기회 제공<br/>
          BTS 공식 팬카페 정회원 대상 우수회원 등급 조정<br/>
          BTS 공식 팬카페 내 전용 공간 제공<br/>
          BTS Membership Card 발급 및 굿즈 제공
        </div>
    );
  }
}

export default withStyles(style)(MembershipSection);
