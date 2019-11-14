import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import workStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/workStyle";
import imagesStyles from "../../../assets/jss/material-kit-react/imagesStyles";
import consolePageStyle from "../../../assets/jss/material-kit-react/views/consolePage";

import Card from "components/Card/Card.jsx";
import CardBody from "../../../components/Card/CardBody";
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import TextField from "@material-ui/core/TextField";
import classNames from "classnames";
import InputAdornment from "@material-ui/core/InputAdornment";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import ButtonBase from "@material-ui/core/ButtonBase";
import * as apiClient from "../../../apiClient";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Link from "@material-ui/core/Link";
import moment from "../../ProjectPage/Sections/InvestorSection";


//todo  프로젝트의 정보를 나타네는 메타섹션
const style = {
    ...imagesStyles,
    ...workStyle,
    ...consolePageStyle
};

class InvestorSection extends React.Component {
    state = {
        investor: undefined
    };


    render() {
        const {classes} = this.props;

        return (
            <React.Fragment>
                <Typography variant="h5" component="h3" className={classes.info}>
                    Investor
                </Typography>
                <Paper className={classes.root}>
                    <Table className={classes.table}>
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Date</TableCell>
                                <TableCell align="center">Name</TableCell>
                                <TableCell align="center">Nationality</TableCell>
                                <TableCell align="center">Email address</TableCell>
                                <TableCell align="center"># of tokens</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>

                            <TableRow>
                                <TableCell align="center" colSpan="5">Empty</TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                                <TableCell align="center"></TableCell>
                            </TableRow>

                        </TableBody>
                    </Table>
                </Paper>
            </React.Fragment>
        );
    }
}

class AssetDetailSection extends React.Component {
    state = {
        projects: []
    };

    render() {
        const {classes} = this.props;
        return (
            <div className={classes.section}>
                <Card>
                    <CardBody>
                        <Grid container spacing={6}>
                            <Grid item>
                                <ButtonBase className={classes.image}>
                                    <img className={classes.img} alt="complex" src="/static/images/grid/complex.jpg"/>
                                </ButtonBase>
                            </Grid>
                            <Grid item xs={12} sm container>
                                <Grid item xs container direction="column" spacing={6}>
                                    <Grid item xs>
                                        <Typography gutterBottom variant="subtitle1">
                                            프로젝트 이름
                                            <Button>
                                                SalePage
                                            </Button>
                                        </Typography>
                                        <Typography variant="body2" gutterBottom>
                                            프로젝트 설명
                                        </Typography>
                                    </Grid>
                                </Grid>
                                <Grid item>
                                    <Typography variant="subtitle1">$19.00</Typography>
                                </Grid>
                            </Grid>
                        </Grid>

                        {/*<InvestorSection/>*/}
                    </CardBody>
                </Card>
            </div>

        );
    }
};


export default withStyles(style)(AssetDetailSection);
