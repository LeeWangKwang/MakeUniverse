import React, {Fragment} from 'react';
import PreSalesSection from "./Sections/PreSalesSection";
import MainChartSection from "./Sections/MainChartSection";
import Header from "../../components/Header/Header";
import Parallax from "../../components/Parallax/Parallax";
import GridContainer from "../../components/Grid/GridContainer";
import GridItem from "../../components/Grid/GridItem";
import Button from "../../components/CustomButtons/Button";

import landingPageStyle from "assets/jss/material-kit-react/views/landingPage.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import Footer from "../../components/Footer/Footer";
import WorkSection from "../LandingPage/Sections/WorkSection";
import ProductSection from "../LandingPage/Sections/ProductSection";
import NewHeaderLinks from "../../components/Header/NewHeaderLinks";

class MainPage extends React.Component {

  render() {
    const { classes, ...rest } = this.props;

    const dashboardRoutes = [];
    return (
      <div>
        <Header
          color="transparent"
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
        <Parallax filter image={require("assets/img/landing-bg.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your Story Starts With Us.</h1>
                <h4>
                  Every landing page needs a small description after the big
                  bold title, that's why we added this text here. Add here all
                  the information that can make you or your product create the
                  first impression.
                </h4>
                <br />
                <Button
                  color="danger"
                  size="lg"
                  href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fas fa-play" />
                  Watch video
                </Button>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main)}>
          <div className={classes.container}>
            <PreSalesSection />
            <MainChartSection/>
            <ProductSection />
            <WorkSection />
          </div>
        </div>
        <Footer />

      </div>
    );
  }
}

export default withStyles(landingPageStyle)(MainPage);
