import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import Gavel from "@material-ui/icons/Gavel";
import Waves from "@material-ui/icons/Waves";
import FindInPage from "@material-ui/icons/FindInPage";
import Link from "@material-ui/icons/Link"

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import productStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/productStyle";
import InfoArea from "../../../components/InfoArea/InfoArea";


class ProductSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>WHAT IS MAKEUNIVERSE?</h2>
            <h5 className={classes.description}>
              메이크유니버스는 K-Contents인 음원, 영상, 관련 콘텐츠 및 오프라인 활동수익에 대한 사업권을
              기존의 소유권자인 기획사로부터 공동소유권을 구입하여 이를 분할하여 판매하고 있습니다.
              분할된 소유권자들에게는 투명한 의사결정 수단을 제공하고, 그에 따른 수익금 활용정책을 수립합니다.
              콘텐츠 수익 분배 증명은 판매되는 저작사업권인 온라인 음원, 뮤직비디오 또는 유사 디지털콘텐츠에서
              발생하는 수익 및 오프라인 활동수익으로 이루어지고 있습니다.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                  title="Hallyu"
                  description="The Korean Wave (Hallyu) refers to the global popularity of South Korea’s cultural economy exporting pop culture, entertainment, music, TV dramas and movies."
                  icon={Waves}
                  iconColor="rose"
                  vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Right"
                description="The powers not delegated to the United States by the Constitution, nor prohibited by it to the States, are reserved to the States respectively, or to the people."
                icon={Gavel}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                  title="Blockchain"
                  description="The Litecoin blockchain is capable of handling higher transaction volume than its counterpart - Bitcoin. Due to more frequent block generation, the network supports more transactions without a need to modify the software in the future. "
                  icon={Link}
                  iconColor="info"
                  vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={3}>
              <InfoArea
                title="Smart Contarct"
                description="The smart contract code facilitates, verifies, and enforces the negotiation or performance of an agreement or transaction. It is the simplest form of decentralized automation."
                icon={FindInPage}
                iconColor="warning"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(productStyle)(ProductSection);
