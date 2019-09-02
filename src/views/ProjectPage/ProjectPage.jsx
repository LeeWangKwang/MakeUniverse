import React, { Fragment } from "react";
import Header from "../../components/Header/Header";
import withStyles from "@material-ui/core/styles/withStyles";
import NewHeaderLinks from "../../components/Header/NewHeaderLinks";
import classNames from "classnames";
import projectPageStyle from "../../assets/jss/material-kit-react/views/projectPage";
import ContentSection from "./Sections/ContentSection";
import Footer from "../../components/Footer/Footer";
import * as apiClient from "../../apiClient";
import MiddleInformationSection from "./Sections/MiddleInformationSection";
import InvestorSection from "./Sections/InvestorSection";
import VotingSection from "./Sections/VotingSection";

class ProjectPage extends React.Component {
  state = {
    project: null
  };

  componentDidMount() {
    const { match } = this.props;
    apiClient.kodeBox(
      `assets/${match.params.projectId}`,
      null,
      res => {
        this.setState({ project: res });
      }
    );
  }

  render() {
    const { classes, ...rest } = this.props;
    const { project } = this.state;
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
            {project !== null ? (
              <Fragment>
                <ContentSection project={project} />
                <MiddleInformationSection project={project} />
                <InvestorSection project={project} />
                <VotingSection project={project} />
              </Fragment>
            ) : (
              undefined
            )}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(projectPageStyle)(ProjectPage);
