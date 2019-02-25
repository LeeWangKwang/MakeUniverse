import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import teamStyle from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.jsx";

import kyle from "assets/img/team/kyle.jpg";
import shane from "assets/img/team/shane.jfif";
import brian from "assets/img/team/brian.jfif";
import lukas from "assets/img/team/lukas.jfif";

class TeamSection extends React.Component {
  render() {
    const { classes } = this.props;
    const imageClasses = classNames(
        classes.imgRaised,
        classes.imgRoundedCircle,
        classes.imgFluid
    );
    return (
        <div className={classes.section}>
          <h2 className={classes.title}>Here is our team</h2>
          <div>
            <GridContainer>
              <GridItem xs={12} sm={12} md={3}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={kyle} alt="Kyle Kim" className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Kyle Kim
                    <br />
                    <small className={classes.smallTitle}>God Father</small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      This is the kyle. PERIOD!
                    </p>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <a href="https://www.linkedin.com/in/brian-kim-936b0635/" className={classes.link}>
                      <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                      >
                        <i className={classes.socials + " fab fa-linkedin"} />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={brian} alt="Brian Kim" className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Brian Kim
                    <br />
                    <small className={classes.smallTitle}>Model</small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      Both excited and mortified by the future where computers take over our menial data jobs.
                      I warmly welcome it with my guards fully up and ready to fight to the death.
                    </p>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <a href="https://www.linkedin.com/in/brian-kim-936b0635/" className={classes.link}>
                      <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                      >
                        <i className={classes.socials + " fab fa-linkedin"} />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={shane} alt="SeongHwan Kim" className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Shane Kim
                    <br />
                    <small className={classes.smallTitle}>Full Stack Developer</small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      풀스택을 지향하는 개발자
                    </p>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <a href="https://www.linkedin.com/in/seonghwan-kim-306497119/" className={classes.link}>
                      <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                      >
                        <i className={classes.socials + " fab fa-linkedin"} />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </GridItem>
              <GridItem xs={12} sm={12} md={3}>
                <Card plain>
                  <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                    <img src={lukas} alt="Lukas Lee" className={imageClasses} />
                  </GridItem>
                  <h4 className={classes.cardTitle}>
                    Lukas Lee
                    <br />
                    <small className={classes.smallTitle}>Web Developer</small>
                  </h4>
                  <CardBody>
                    <p className={classes.description}>
                      Hello, I'm junior web developer and I'm eager to do with something BRAND NEW
                    </p>
                  </CardBody>
                  <CardFooter className={classes.justifyCenter}>
                    <a href="https://www.linkedin.com/in/wangkwang-lee-679a2016b" className={classes.link}>
                      <Button
                          justIcon
                          color="transparent"
                          className={classes.margin5}
                      >
                        <i className={classes.socials + " fab fa-linkedin"} />
                      </Button>
                    </a>
                  </CardFooter>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
    );
  }
}

export default withStyles(teamStyle)(TeamSection);
