import React from "react";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";

import {cardTitle} from "assets/jss/material-kit-react.jsx";
import CardBody from "../../../components/Card/CardBody";
import Button from "../../../components/CustomButtons/Button";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import {Link} from "react-router-dom";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import imagesStyles from "../../../assets/jss/material-kit-react/imagesStyles";
import * as apiClient from "../../../apiClient";
import projectPageStyle from "../../../assets/jss/material-kit-react/views/projectPage";

const style = {
    ...imagesStyles,
    cardTitle,
    ...workStyle,
    ...projectPageStyle
};

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const Item = props => {
    const {Idx, assetName, assetDescription, assetIconUrl, assetSupply, classes} = props;

    return (
        <GridItem xs={12} md={4}>
            <Card>
                <img
                    style={{width: "100%", display: "block"}}
                    className={classes.imgCardTop}
                    src={assetIconUrl}
                    alt="Card-img-cap"
                />
                <CardBody>
                    <h4 className={classes.cardTitle}>{assetName}</h4>
                    <h6 className={classes.cardDescription}>{assetDescription}</h6>
                    <p>Total Token : {numberWithCommas(assetSupply)}</p>
                    <GridContainer justify="center">
                        <Button
                            component={Link}
                            to={`/projects/${Idx}`}
                            color="primary"
                            round
                        >
                            GET STARTED
                        </Button>
                    </GridContainer>
                </CardBody>
            </Card>
        </GridItem>
    );
};

class PreSalesSection extends React.Component {
    state = {
        projects: []
    };

    componentDidMount() {
        apiClient.kodeBox(`console/get/asset`, null, res => {
            this.setState({projects: res});
        });
    }

    render() {
        const {classes} = this.props;
        const {projects} = this.state;
        return (
            <div className={classes.section}>
                <GridContainer justify="center">
                    <GridItem xs={12} sm={12} md={8}>
                        <h2 className={classes.title}>Projects at a Glance</h2>
                        <h5 className={classes.description}>
                            These great K-POP artists are waiting for you to join them in creating amazing music and
                            content!
                        </h5>
                    </GridItem>
                </GridContainer>
                <div>
                    <GridContainer>
                        {projects.map(p => (
                            <Item {...p} classes={classes} key={p.Idx}/>
                        ))}
                    </GridContainer>
                </div>
            </div>
        );
    }
}

export default withStyles(style)(PreSalesSection);
