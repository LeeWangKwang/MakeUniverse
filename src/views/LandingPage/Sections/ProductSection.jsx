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
            <h2 className={classes.title}>What is makeUNIVERSE</h2>
            <h5 className={classes.description}>
              makeUNIVERSE makes it possible for K-Pop content fans and enthusiasts to go from observer to participant. We enabling the purchasing of content right fragments, fans can collectively become co-owners of their artists’ creative work. By retaining the majority of the content right, artists are able to keep creative control while being able to track and interact with their biggest supporters and fans. The control for the usage of revenue resulting from the fans’ share of the content right will be given to the fragment holders, allowing them to make impactful decisions.
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
