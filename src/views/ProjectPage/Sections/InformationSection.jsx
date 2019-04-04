import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import NoSsr from "@material-ui/core/NoSsr";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import GraphAnalysisSection from "./GraphAnalysisSection";
import DetailSection from "./DetailSection";
import MembershipSection from "./MembershipSection";
import HistorySection from "./HistorySection";
import * as apiClient from "../../../apiClient";

function InformationSection(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

InformationSection.propTypes = {
  children: PropTypes.node.isRequired
};

function LinkTab(props) {
  return (
    <Tab component="a" onClick={event => event.preventDefault()} {...props} />
  );
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper
  }
});

class NavTabs extends React.Component {
  state = {
    value: 0,
    isLogin: 0,
    userId: null,
    transactions: null
  };

  getUsersTransactions() {
    apiClient.get(`?type=transaction&action=get&project=${this.props.project.data_value}&userId=${this.state.userId}`, null, res =>{
      this.setState({transactions: res.Items});
    });
  }

  componentDidMount() {
    apiClient.get(`?type=user&action=isLogin`, null, res => {
      this.setState({ isLogin: res.Items[0].isLogin, userId:res.Items[0].loginedId });
      this.getUsersTransactions()
    });
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, project } = this.props;
    const { value, userId, transactions } = this.state;

    return (
      <NoSsr>
        <div className={classes.root}>
          <AppBar position="static" color="default">
            <Tabs
              variant="scrollable"
              scrollButtons="auto"
              value={value}
              onChange={this.handleChange}
            >
              <LinkTab label="Graph Analysis" href="page1" />
              <LinkTab label="Detail" href="page2" />
              <LinkTab label="Membership" href="page3" />
              {userId ? <LinkTab label="My History" href="page4" /> : undefined}
            </Tabs>
          </AppBar>
          {value === 0 && (
            <InformationSection>
              <GraphAnalysisSection project={project} />
            </InformationSection>
          )}
          {value === 1 && (
            <InformationSection>
              <DetailSection project={project} />
            </InformationSection>
          )}
          {value === 2 && (
            <InformationSection>
              <MembershipSection project={project} />
            </InformationSection>
          )}
          {/*My history는 로그인 시에만 보이게*/}
          {value === 3 && (
            <InformationSection>
              <HistorySection project={project} transactions={transactions}/>
            </InformationSection>
          )}
        </div>
      </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(NavTabs);
