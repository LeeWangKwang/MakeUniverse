import {title} from "assets/jss/material-kit-react.jsx";

const consolePageStyle = {
    title: {
        ...title,
        display: "inline-block",
        position: "relative",
        marginTop: "30px",
        minHeight: "32px",
        color: "#FFFFFF",
        textDecoration: "none"
    },

    imgCardTop: {
        width: "100%",
        height: "196px",
        borderTopLeftRadius: "calc(.25rem - 1px)",
        borderTopRightRadius: "calc(.25rem - 1px)"
    },

    button: {
        float: "right",
    },
    assetList:{
        widths:"200px",
        float: "left"
    }

};

export default consolePageStyle;
