import React from "react";

import Header from "../../components/Header/Header";

import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";
import Footer from "../../components/Footer/Footer";

import NewHeaderLinks from "../../components/Header/NewHeaderLinks";
import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage";

import IssueAssetSection from "./Sections/IssueAssetSection";
import ListItem from "@material-ui/core/ListItem";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import {Divider} from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import AssetDetailSection from "./Sections/AssetDetailSection";
import * as apiClient from "../../apiClient";

class ConsolePage extends React.Component {

    render() {

        const {classes, ...rest} = this.props;

        const dashboardRoutes = [];
        return (
            <div>
                <Header
                    routes={dashboardRoutes}
                    brand="makeUNIVERSE"
                    rightLinks={<NewHeaderLinks/>}
                    fixed
                    changeColorOnScroll={{
                        height: 400,
                        color: "white"
                    }}
                    {...rest}
                />


                <div className={classNames(classes.main)}>
                    <div className={classes.container}>
                        {/*todo 페이지 선택*/}
                        <IssueAssetSection/>
                        {/*<AssetDetailSection/>*/}
                    </div>
                </div>


                <Footer/>
            </div>
        );
    }
}

export default withStyles(landingPageStyle)(ConsolePage);
