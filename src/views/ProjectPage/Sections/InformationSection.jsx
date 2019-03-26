import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import NoSsr from '@material-ui/core/NoSsr';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

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
              <Tabs variant="fullWidth" value={value} onChange={this.handleChange}>
                <LinkTab label="Graph Analysis" href="page1" />
                <LinkTab label="Detail" href="page2" />
                <LinkTab label="Membership" href="page3" />
              </Tabs>
            </AppBar>
            {value === 0 && <InformationSection>그래프 분석 결과가 보여질 예정입니다.</InformationSection>}
            {value === 1 && <InformationSection>앨범 정보 <br/><br/>방탄소년단, LOVE YOURSELF 結 ‘Answer’ 발표! “팬들과의 축제” 시작<br/>
              LOVE YOURSELF 모든 비밀이 드러나다! ‘진정한 사랑은 나 자신을 사랑하는 것부터’<br/>
              타이틀곡 ‘IDOL’, 방탄소년단이 보여주는 ‘문화적 하이브리드’<br/><br/>
            앨범 수록곡 정보들이 나올 예정입니다.</InformationSection>}
            {value === 2 && <InformationSection>멤버십 혜택이 보여질 예정입니다.</InformationSection>}
          </div>
        </NoSsr>
    );
  }
}

NavTabs.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NavTabs);