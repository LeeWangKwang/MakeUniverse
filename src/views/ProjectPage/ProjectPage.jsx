import React from "react";
import Header from "../../components/Header/Header";
import withStyles from "@material-ui/core/styles/withStyles";
import NewHeaderLinks from "../../components/Header/NewHeaderLinks";
import classNames from "classnames";
import projectPageStyle from "../../assets/jss/material-kit-react/views/projectPage";
import ContentSection from "./Sections/ContentSection";
import InformationSection from "./Sections/InformationSection";
import Footer from "../../components/Footer/Footer";

class ProjectPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;

    const dashboardRoutes = [];
    return (
        <div>
          <Header
              color="white"
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
          <div className={classNames(classes.main)}>
            <div className={classes.container}>
              <ContentSection />
              <InformationSection/>
            </div>
          </div>
          <Footer />
        </div>
    );
  }
}

export default withStyles(projectPageStyle)(ProjectPage);
