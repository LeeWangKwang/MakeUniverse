import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import GraphAnalysisSection from "./GraphAnalysisSection";
import DetailSection from "./DetailSection";
import MembershipSection from "./MembershipSection";
import HistorySection from "./HistorySection";

function InformationSection(props) {
  return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
  );
}

InformationSection.propTypes = {
  children: PropTypes.node.isRequired,
};

function LinkTab(props) {
  return <Tab component="a" onClick={event => event.preventDefault()} {...props} />;
}

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class NavTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;
    const { value } = this.state;

    return (
        <NoSsr>
          <div className={classes.root}>
            <AppBar position="static" color="default">
              <Tabs variant="fullWidth" variant="scrollable" scrollButtons="auto" value={value} onChange={this.handleChange}>
                <LinkTab label="Graph Analysis" href="page1" />
                <LinkTab label="Detail" href="page2" />
                <LinkTab label="Membership" href="page3" />
                <LinkTab label="My History" href="page4" />
              </Tabs>
            </AppBar>
            {value === 0 && <InformationSection><GraphAnalysisSection/></InformationSection>}
            {value === 1 && <InformationSection><DetailSection/></InformationSection>}
            {value === 2 && <InformationSection><MembershipSection/></InformationSection>}
            {/*My history는 로그인 시에만 보이게*/}
            {value === 3 && <InformationSection><HistorySection/></InformationSection>}
          </div>
        </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);