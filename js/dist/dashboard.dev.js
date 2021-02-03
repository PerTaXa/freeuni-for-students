"use strict";

var checkmark = '<svg name="IconCheck" viewBox="0 0 1920 1920" rotate="0" width="1em" height="1em" aria-hidden="true" role="presentation" focusable="false" class="checkmark" style="width: 1em; height: 1em;position: absolute; left: 7px;"> <g role="presentation"><path d="M1743.8579 267.012456L710.746654 1300.1237 176.005086 765.382131 0 941.387217 710.746654 1652.25843 1919.98754 443.142104z" fill-rule="evenodd" stroke="none" stroke-width="1"></path></g></svg>';
var main_header = "\n    <h2 class=\"profile-font\" style=\"font-size: 30px;\">Bill Gates's settings</h2>\n                \n    <button type=\"button\" class=\"more-options\">\n        <img src=\"../images/more.svg\" class=\"more-options\">\n    </button>\n\n    <span class=\"chart-view\">\n        <ul>\n            <li>\n                <span class=\"chart-view-header\">Chart View</span>\n                <div class=\"options-list\">\n                    <div class=\"options-item\" id=\"column\">Column view</div>\n                    <div class=\"options-item\" id=\"bar\">Bar view</div>\n                    <div class=\"options-item\" id=\"area\">Area view</div>\n                    <div class=\"options-item\" id=\"spline\">Spline view</div>\n                    <div class=\"options-item\" id=\"pie\">Pie view</div>\n                </div>\n            </li>\n        </ul>\n    </span>\n";
var content = "\n    <div id=\"chartContainer\"></div>\n";
var dashboards = document.getElementsByClassName("dashboard");

var dashboardHandler = function dashboardHandler(e) {
  document.getElementsByClassName("slide-menu")[0].style.display = 'none';
  document.getElementsByClassName("main-header")[0].innerHTML = main_header;
  document.getElementsByClassName("class")[0].innerHTML = content;
  var chart = getChart();
  chart.render();
};

dashboardHandler();

function getChart() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "column";
  document.getElementById(type).insertAdjacentHTML('beforeend', checkmark);
  var chart = new CanvasJS.Chart("chartContainer", {
    theme: "light1",
    animationEnabled: true,
    title: {
      text: "Student performance chart"
    },
    data: [{
      type: type,
      dataPoints: [{
        label: "A",
        y: 5
      }, {
        label: "B",
        y: 10
      }, {
        label: "C",
        y: 20
      }, {
        label: "D",
        y: 15
      }, {
        label: "E",
        y: 9
      }, {
        label: "F",
        y: 1
      }]
    }]
  });
  return chart;
} // var chart = getChart();
// if (document.getElementById("chartContainer") != null) {
//     chart.render();
// }


document.addEventListener("click", function (e) {
  if (e.target.className == "options-item") {
    var els = document.getElementsByClassName("checkmark");
    els[0].parentNode.removeChild(els[0]);
    var chart = getChart(e.target.id);

    if (document.getElementById("chartContainer") != null) {
      chart.render();
    }
  } else if (e.target.className == "more-options") {
    var style = document.getElementsByClassName("chart-view")[0].style.display;

    if (style == 'none' || style == '') {
      document.getElementsByClassName("chart-view")[0].style.display = 'block';
    } else {
      document.getElementsByClassName("chart-view")[0].style.display = 'none';
    }
  }
});

for (var i = 0; i < dashboards.length; i++) {
  dashboards[i].addEventListener('click', dashboardHandler, false);
}