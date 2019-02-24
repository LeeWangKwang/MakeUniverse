import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components

import workStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CustomInput from "../../../components/CustomInput/CustomInput";
import Button from "../../../components/CustomButtons/Button";


class ContactUsSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem cs={12} sm={12} md={8}>
            <h2 className={classes.title}>CONTACT US</h2>
            <h4 className={classes.description}>
              You need more information?
              Check what other persons are saying about our product.
              They are very happy with their purchase.
            </h4>
            <form>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <CustomInput
                    labelText="Your Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <CustomInput
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 5
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={12}
                    className={classes.textCenter}
                  >
                    <Button color="primary">Send Message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(workStyle)(ContactUsSection);
