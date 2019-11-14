import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
// core components

import * as apiClient from "../../../apiClient";

import workStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle";
import Grid from '@material-ui/core/Grid';
import ButtonBase from '@material-ui/core/ButtonBase';
import Input from '@material-ui/core/Input';
import imagesStyles from "../../../assets/jss/material-kit-react/imagesStyles";
import consolePageStyle from "../../../assets/jss/material-kit-react/views/consolePage";

import Card from "components/Card/Card.jsx";
import CardBody from "../../../components/Card/CardBody";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import Typography from "@material-ui/core/Typography";
import CustomLinearProgress from "../../../components/CustomLinearProgress/CustomLinearProgress";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";


//todo  프로젝트의 정보를 나타네는 메타섹션

const style = {
    ...imagesStyles,
    ...workStyle,
    ...consolePageStyle
};

class IssueAssetSection extends React.Component {
    state = {
        projects: []
    };

    // componentDidMount() {
    //     apiClient.kodeBox(`assets`, null, res => {
    //         this.setState({projects: res});
    //     });
    // }

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.section}>
                <h2 className={classes.title}>Issue Asset</h2>
                {/*// <div className={classes.assetHead}>*/}
                {/*//     <Grid container spacing={2}>*/}
                {/*//         <Grid item>*/}
                {/*            <ButtonBase className={classes.image}>*/}
                {/*                <input className={classes.assetImage} alt="프로젝트 이미지"/>*/}
                {/*            </ButtonBase>*/}
                {/*        </Grid>*/}
                {/*        <Grid item xs={12} sm container>*/}
                {/*            <Grid item xs container direction="column" spacing={2}>*/}
                {/*                <Grid item xs>*/}
                {/*                    /!*Asset Name*!/*/}
                {/*                    <Input tmlFor="my-inputh" className={classes.assetName}>Asset name here</Input>*/}
                {/*                </Grid>*/}
                {/*                <Grid item xs>*/}
                {/*                    /!*Asset description*!/*/}
                {/*                </Grid>*/}
                {/*            </Grid>*/}
                {/*        </Grid>*/}
                {/*    </Grid>*/}
                {/*</div>*/}
                <Card>
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} md={6}>
                                <input
                                    style={{width: "100%", display: "block", height: "auto"}}
                                    alt="Card-img-cap"
                                />
                            </GridItem>
                            <GridItem xs={12} md={6}>
                                Asset Name
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    className={classNames(
                                        classes.margin,
                                        classes.textField
                                    )}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment
                                                style={{textAlign: "left"}}
                                                position="start"
                                            />
                                        )
                                    }}
                                />
                                Asset Description
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    className={classNames(
                                        classes.margin,
                                        classes.textField
                                    )}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment
                                                style={{textAlign: "left"}}
                                                position="start"
                                            />
                                        )
                                    }}
                                />
                                Total Supply
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    className={classNames(
                                        classes.margin,
                                        classes.textField
                                    )}
                                    type="number"
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment
                                                style={{textAlign: "left"}}
                                                position="start"
                                            />
                                        )
                                    }}
                                />
                                <Button
                                    variant="contained"
                                    size="large"
                                    color="primary"
                                    className={classes.button}
                                    onClick={this.handleClickOpen}
                                >
                                    Create
                                </Button>
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>
                <div>
                    todo
                    {/*total supply, input*/}
                    {/*soft cap, input check box*/}
                    {/*hard cap input*/}
                    {/*raise fund in, check box*/}
                    {/*campaign end date, date input*/}
                    {/*privatefundraising radio*/}
                    {/*attachment, file input*/}

                    {/*issuebutton*/}

                </div>
            </div>

        );
    }
}


export default withStyles(workStyle)(IssueAssetSection);
