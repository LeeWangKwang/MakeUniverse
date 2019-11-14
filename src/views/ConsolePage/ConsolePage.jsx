import React from "react";

import Header from "../../components/Header/Header";

import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import Footer from "../../components/Footer/Footer";

import NewHeaderLinks from "../../components/Header/NewHeaderLinks";
import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage";

import IssueAssetSection from "./Sections/IssueAssetSection";


class ConsolePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    const dashboardRoutes = [];
    return (
      <div>
        <Header
          routes={dashboardRoutes}
          brand="makeUNIVERSE"
          rightLinks={<NewHeaderLinks />}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        {/*<Parallax filter image={require("assets/img/landing-bg.jpg")}>*/}
        {/*  <div className={classes.container}>*/}
        {/*    <GridContainer>*/}
        {/*      <GridItem xs={12} sm={12} md={6}>*/}
        {/*        <h1 className={classes.title}>BTS NEW ALBUM</h1>*/}
        {/*        <h4>*/}
        {/*          You’ve attended their concerts. Streamed countless hours of their music. Clicked a million times for a chance to buy an A.R.M.Y Bomb.*/}
        {/*          Now, join millions of A.R.M.Y worldwide and become an official co-owner of BTS songs and albums!*/}
        {/*          Receive exclusive membership benefits as well as rights to vote on important BTS-related issues!*/}
        {/*        </h4>*/}
        {/*        <br />*/}
        {/*      </GridItem>*/}
        {/*    </GridContainer>*/}
        {/*  </div>*/}
        {/*</Parallax>*/}

        <div className={classNames(classes.main)}>
          <div className={classes.container}>
              <IssueAssetSection />
          </div>
        </div>

        {/*<div>*/}
        {/*  <ProductSection />*/}
        {/*</div>*/}

        {/*<div className={classNames(classes.main)}>*/}
        {/*  <PartnerSection />*/}
        {/*  /!* <TeamSection /> *!/*/}
        {/*</div>*/}

        {/*<div className={classNames(classes.main)}>*/}
        {/*  <div className={classes.container}>*/}
        {/*    <ContactUsSection />*/}
        {/*  </div>*/}
        {/*</div>*/}

        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(ConsolePage);
