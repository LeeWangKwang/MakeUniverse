import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";

import image from "assets/img/bg7.jpg";
import NewHeaderLinks from "../../components/Header/NewHeaderLinks";
import Header from "../../components/Header/Header";
import FormControlLabel from "@material-ui/core/FormControlLabel/FormControlLabel";
import {Link} from "react-router-dom";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Radio from "@material-ui/core/Radio/Radio";
import RadioGroup from "@material-ui/core/RadioGroup/RadioGroup";
import kyc1 from "assets/img/kyc/kyc1.png";
import kyc2 from "assets/img/kyc/kyc2.png";
import kyc3 from "assets/img/kyc/kyc3.png";
import kyc4 from "assets/img/kyc/kyc4.png";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage";

class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      cardAnimaton: "cardHidden",
      value: 'female',
      firstName:'',
      lastName:'',
      identity:'',
      birth:'',
      kyc:false
    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    setTimeout(
        function() {
          this.setState({ cardAnimaton: "" });
        }.bind(this),
        700
    );
  }
  handleChange = event => {
    this.setState({ value: event.target.value });
  };
  fillTheBlank(){
    this.setState({firstName:"Kyle", lastName:"Kim", identity:"C03005988", value:"male", birth:"19970405", kyc:true})
  }
  render() {
    const { classes, ...rest } = this.props;
    const { firstName, lastName, identity, birth, kyc } = this.state;
    return (
        <div>
          <Header
              absolute
              color="transparent"
              brand="makeUNIVERSE"
              rightLinks={<NewHeaderLinks />}
              {...rest}
          />
          <div
              className={classes.pageHeader}
              style={{
                backgroundImage: "url(" + image + ")",
                backgroundSize: "cover",
                backgroundPosition: "top center"
              }}
          >
            <div className={classes.container}>
              <GridContainer justify="center" className={classes.cardContainer}>
                <GridItem xs={12} sm={12} md={6}>
                  <Card className={classes[this.state.cardAnimaton]}>
                    <form className={classes.form}>
                      <CardHeader color="primary" className={classes.cardHeader}>
                        <h4>KYC</h4>
                      </CardHeader>
                      <p className={classes.divider}>
                        User Information<br/><br/>
                        Please, provide your information and valid personal identification document.
                      </p>
                      <CardBody>
                        <CustomInput
                            labelText="First Name"
                            id="first"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "text",
                              value: firstName,
                              onChange: e => {
                                this.setState({ firstName: e.target.value });
                              },
                            }}
                        />
                        <CustomInput
                            labelText="Last Name"
                            id="last"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "text",
                              value: lastName,
                              onChange: e => {
                                this.setState({ lastName: e.target.value });
                              },
                            }}
                        />
                        <FormControl component="fieldset" className={classes.formControl}>
                          <RadioGroup
                              aria-label="Gender"
                              name="gender1"
                              className={classes.group}
                              value={this.state.value}
                              onChange={this.handleChange}
                          >
                            <FormControlLabel value="female" control={<Radio />} label="Female" />
                            <FormControlLabel value="male" control={<Radio />} label="Male" />
                          </RadioGroup>
                        </FormControl>
                        <CustomInput
                            labelText="User Information"
                            id="identity"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "text",
                              value: identity,
                              onChange: e => {
                                this.setState({ identity: e.target.value });
                              },
                            }}
                        />
                        <CustomInput
                            labelText="Birthdate (YYYYMMDD)"
                            id="last"
                            formControlProps={{
                              fullWidth: true
                            }}
                            inputProps={{
                              type: "text",
                              value: birth,
                              onChange: e => {
                                this.setState({ birth: e.target.value });
                              },
                            }}
                        />
                        <img src={kyc ? kyc3 : kyc1} alt="Passport" className={classes.img} />
                        <img src={kyc ? kyc4 : kyc2} alt="Passport" className={classes.img} />
                      </CardBody>
                      <CardFooter className={classes.cardFooter}>
                        <Button simple color="white" size="lg" onClick={() => {this.fillTheBlank();}}>
                          Fill
                        </Button>
                        <Link to="/" color="transparent" className={classes.navLink}>
                          <Button simple color="primary" size="lg">
                            Done
                          </Button>
                        </Link>
                      </CardFooter>
                    </form>
                  </Card>
                </GridItem>
              </GridContainer>
            </div>
            <Footer whiteFont />
          </div>
        </div>
    );
  }
}

export default withStyles(loginPageStyle)(SignUpPage);
