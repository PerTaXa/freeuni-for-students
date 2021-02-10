"use strict";

var checkmark = '<svg name="IconCheck" viewBox="0 0 1920 1920" rotate="0" width="1em" height="1em" aria-hidden="true" role="presentation" focusable="false" class="checkmark" style="width: 1em; height: 1em;position: absolute; left: 7px;"> <g role="presentation"><path d="M1743.8579 267.012456L710.746654 1300.1237 176.005086 765.382131 0 941.387217 710.746654 1652.25843 1919.98754 443.142104z" fill-rule="evenodd" stroke="none" stroke-width="1"></path></g></svg>';
var main_header = "\n    <h2 class=\"profile-font\" style=\"font-size: 30px;\">Bill Gates's settings</h2>\n                \n    <button type=\"button\" class=\"more-options\">\n        <img src=\"../images/more.svg\" class=\"more-options\">\n    </button>\n\n    <span class=\"chart-view\">\n        <ul>\n            <li>\n                <span class=\"chart-view-header\">Chart View</span>\n                <div class=\"options-list\">\n                    <div class=\"options-item\" id=\"column\">Column view</div>\n                    <div class=\"options-item\" id=\"bar\">Bar view</div>\n                    <div class=\"options-item\" id=\"area\">Area view</div>\n                    <div class=\"options-item\" id=\"spline\">Spline view</div>\n                    <div class=\"options-item\" id=\"pie\">Pie view</div>\n                </div>\n            </li>\n        </ul>\n    </span>\n";
var content = "\n    <div id=\"chartContainer\"></div>\n    <table style=\"border-collapse: collapse; width: 28.8443%; margin-left: auto; margin-right: auto;\">\n        <tbody>\n        <tr>\n                <td style=\"width: 20%;\">Faculty</td>\n                <td style=\"width: 13%; text-align: center;\">MACS</td>\n            </tr>\n            <tr>\n                <td style=\"width: 20%;\">GPA</td>\n                <td style=\"width: 13%; text-align: center;\">3.52</td>\n            </tr>\n            <tr>\n                <td style=\"width: 20%;\">Credits </td>\n                <td style=\"width: 13%; text-align: center;\">195/240</td>\n            </tr>\n            \n            <tr>\n                <td style=\"width: 20%;\">Student Status</td>\n                <td style=\"width: 13%; text-align: center;\">Active</td>\n            </tr>\n\n            \n        </tbody>\n    </table>\n\n    <h2 style=\"text-align: left;\">Recent Activity</h2>\n    <div style=\"background-color: black; height: 1px;margin-bottom: 25px;\"></div>\n\n\n    <table class=\"current-courses\">\n    <thead>\n        <tr>\n            <th class=\"courses-course\">Class</th>\n            <th class=\"courses-course\">Activity</th>\n        </tr>\n    </thead>\n    <tbody>\n\n        <tr>\n            <td class=\"courses-course\">\n                Natural Language Processing\n            </td>\n            <td class=\"courses-course\">\n                <div class=\"assignment_content\" style=\"margin: 0\">\n                    <a> Midterm 2 </a>\n                    <div class=\"assignment_details\">                                 \n                        <span class=\"assignment_status\">\n                            Dec 21, 2020 at 8:30pm\n                        </span>\n                        <span class=\"assignment_status\">\n                            97.5/100\n                        </span>\n                        44.56%\n                    </div>\n                </div>\n            </td>\n        </tr>\n\n        <tr>\n            <td class=\"courses-course\">\n                Distributional Systems\n            </td>\n            <td class=\"courses-course\">\n                <div class=\"assignment_content\" style=\"margin: 0\">\n                    <a> Midterm 1 </a>\n                    <div class=\"assignment_details\">                                 \n                        <span class=\"assignment_status\">\n                            Dec 7, 2020 at 9:30pm\n                        </span>\n                        <span class=\"assignment_status\">\n                            87.5/100\n                        </span>\n                        34.56%\n                    </div>\n                </div>\n            </td>\n        </tr>\n\n        <tr>\n            <td class=\"courses-course\">\n                Web Development\n            </td>\n            <td class=\"courses-course\">\n                <div class=\"assignment_content\" style=\"margin: 0\">\n                    <a> Midterm 1 </a>\n                    <div class=\"assignment_details\">                                 \n                        <span class=\"assignment_status\">\n                            Nov 20, 2020 at 5:30pm\n                        </span>\n                        <span class=\"assignment_status\">\n                            81.5/100\n                        </span>\n                        24.56%\n                    </div>\n                </div>\n            </td>\n        </tr>\n\n        <tr>\n            <td class=\"courses-course\">\n                Natural Language Processing\n            </td>\n            <td class=\"courses-course\">\n                <div class=\"assignment_content\" style=\"margin: 0\">\n                    <a> Assignment2 </a>\n                    <div class=\"assignment_details\">                                 \n                        <span class=\"assignment_status\">\n                            Nov 7, 2020 at 2:30pm\n                        </span>\n                        <span class=\"assignment_status\">\n                            91.5/100\n                        </span>\n                        14.56%\n                    </div>\n                </div>\n            </td>\n            \n        </tr>\n\n        <tr>\n            <td class=\"courses-course\">\n                Web Development\n            </td>\n            <td class=\"courses-course\">\n                <div class=\"assignment_content\" style=\"margin: 0\">\n                    <a> Assignment1 </a>\n                    <div class=\"assignment_details\">                                  \n                        <span class=\"assignment_status\">\n                            Oct 15, 2020 at 2:30pm\n                        </span>\n                        <span class=\"assignment_status\">\n                            71.5/100\n                        </span>\n                        12.73%\n                    </div>\n                </div>\n            </td>\n            \n        </tr>\n    </tbody>\n</table>\n\n   \n";
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