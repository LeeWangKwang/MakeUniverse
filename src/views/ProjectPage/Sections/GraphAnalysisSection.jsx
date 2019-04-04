import React from "react";
import ChartistGraph from "react-chartist";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import { cardTitle } from "assets/jss/material-kit-react.jsx";

import workStyle from "assets/jss/material-kit-react/views/landingPageSections/workStyle.jsx";
import imagesStyles from "../../../assets/jss/material-kit-react/imagesStyles";
import projectPageStyle from "../../../assets/jss/material-kit-react/views/projectPage";

var Chartist = require("chartist");
var delays = 80,
    durations = 500;

const style = {
  ...imagesStyles,
  cardTitle,
  ...workStyle,
  ...projectPageStyle
};


class GraphAnalysisSection extends React.Component {
  render() {
    let data = {
      labels: ["0", "1", "10", "20", "30", "40", "50", "60", "70"],
      series: [[
        0,
        4069,
        1627,
        813,
        488,
        406,
        325,
        244,
        195
      ]]
    };

    let options = {
      high: 4500,
      low: 0,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return value;
        }
      },
      axisY: {
        labelInterpolationFnc: function(value, index) {
          return value+'M';
        }
      }
    };
    let type = "Line";

    var animation = {
      draw: function(data) {
        if (data.type === "line" || data.type === "area") {
          data.element.animate({
            d: {
              begin: 600,
              dur: 700,
              from: data.path
                  .clone()
                  .scale(1, 0)
                  .translate(0, data.chartRect.height())
                  .stringify(),
              to: data.path.clone().stringify(),
              easing: Chartist.Svg.Easing.easeOutQuint
            }
          });
        } else if (data.type === "point") {
          data.element.animate({
            opacity: {
              begin: (data.index + 1) * delays,
              dur: durations,
              from: 0,
              to: 1,
              easing: "ease"
            }
          });
        }
      }
    };

    return (
      <div>
        <ChartistGraph
            className="ct-chart"
            height={1000}
            data={data}
            type={type}
            options={options}
            listener={animation}
        />
      </div>
    )
  }
}

export default withStyles(style)(GraphAnalysisSection);
