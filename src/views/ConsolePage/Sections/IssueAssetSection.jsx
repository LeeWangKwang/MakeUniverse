import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
// core components

import * as apiClient from "../../../apiClient";

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


//todo  프로젝트의 정보를 나타네는 메타섹션

const style = {
    ...imagesStyles,
    ...workStyle,
    ...consolePageStyle
};

class IssueAssetSection extends React.Component {
    state = {
        projects: [],
        name:'',
        description:'',
        iconUrl:'',
        supply:'',
    };

    createAsset (){
        console.log('run')
        let payload = {
            assetName: this.state.name,
            assetDescription:this.state.description,
            assetIconUrl:this.state.iconUrl,
            assetSupply:this.state.supply,
        }
        apiClient.kodeBoxPost(`console/create/asset`, payload, res =>{

        });
    }

    handleChange = prop => event => {
        this.setState({[prop]: event.target.value});
    };

    // componentDidMount() {
    //     apiClient.kodeBox(`assets`, null, res => {
    //         this.setState({projects: res});
    //     });
    // }

    render() {
        const {classes} = this.props;
        const {name, description, iconUrl, supply} = this.state
        return (
            <div className={classes.section}>
                <h2 className={classes.title}>Issue Asset</h2>
                <Card>
                    <CardBody>
                        <GridContainer>
                            <GridItem xs={12} md={12}>
                                Icon URL
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    className={classNames(
                                        classes.margin,
                                        classes.textField
                                    )}
                                    value={iconUrl}
                                    onChange={this.handleChange("iconUrl")}
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment
                                                style={{textAlign: "left"}}
                                                position="start"
                                            />
                                        )
                                    }}
                                />
                                Asset Name
                                <TextField
                                    variant="outlined"
                                    fullWidth
                                    className={classNames(
                                        classes.margin,
                                        classes.textField
                                    )}
                                    value={name}
                                    onChange={this.handleChange("name")}
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
                                    value={description}
                                    onChange={this.handleChange("description")}
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
                                    value={supply}
                                    onChange={this.handleChange("supply")}
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
                                    onClick={(e) => {
                                        this.createAsset()
                                    }}
                                >
                                    Create
                                </Button>
                            </GridItem>
                        </GridContainer>
                    </CardBody>
                </Card>
            </div>

        );
    }
}


export default withStyles(workStyle)(IssueAssetSection);
