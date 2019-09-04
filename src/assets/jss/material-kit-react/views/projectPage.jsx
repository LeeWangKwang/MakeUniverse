import { container, title } from "assets/jss/material-kit-react.jsx";

const projectPageStyle = {
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    color: "#FFFFFF",
    textDecoration: "none"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    paddingBottom: '20px'
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
        "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  projectTitle: {
    padding: "30px 0 15px",
    borderBottom : "1px solid",
  },
  projectSubTitle: {
    padding: "15px 0 0"
  },
  albumIntroduction: {
    lineHeight:'1.1'
  },
  textField: {
    display: "block",
    margin : "10px 10px 10px",
    flexBasis: 200,
    textAlign:"right",
  },
  button: {
    float :"right"
  },
  inputField: {
    textAlign:"right",
  },
  infoWrap: {
    margin: "0 0 30px"
  },
  info: {
    margin : "0 0 15px"
  },
  infoText: {
    fontSize:"1.1rem"
  },
  category: {
    width:"100%",
  },
  type : {
    width:"50%",
    float:"left",
    marginTop:"5px",
  },
  typeValue : {
    width:"50%",
    float:"right",
    marginTop:"5px",
    textAlign: "right",
  },
  middleInfo : {
    padding: "0 15px 30px"
  },
  membership : {
    whiteSpace : "pre-line"
  },
  table : {
    margin: "0 0 30px 0"
  },
  paper : {
    textAlign:"center",
    margin:"0 auto",
    minWidth:"320px",
    maxWidth:"500px",
    width: "40%",
    backgroundColor: "#ffffff",
  },
  modalTitle : {
    fontSize:"2.25rem",
    fontWeight:900,
  },
  modalText : {
    fontSize:"1rem",
    fontWeight:600,
  },
  modalImage : {
    width:"100%",
    height:"100%",
  },
  root : {
    overflow:"auto",
  },
};

export default projectPageStyle;
