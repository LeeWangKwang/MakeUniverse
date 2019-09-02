import React from "react";
import PreSalesSection from "./Sections/PreSalesSection";
import MainChartSection from "./Sections/MainChartSection";
import Header from "../../components/Header/Header";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";

import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import Footer from "../../components/Footer/Footer";
import ProductSection from "../LandingPage/Sections/ProductSection";
import NewHeaderLinks from "../../components/Header/NewHeaderLinks";
import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage";
import ContactUsSection from "./Sections/ContactUsSection";
import PartnerSection from "./Sections/PartnerSection";
import TeamSection from "./Sections/TeamSection";

class MainPage extends React.Component {
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
            <PreSalesSection />
            {/*<MainChartSection />*/}
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

export default withStyles(landingPageStyle)(MainPage);
