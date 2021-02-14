"use strict";

var header = "\n<h2 class=\"profile-font\" style=\"font-size: 30px;\">Bill Gates's Courses</h2>\n";
var options = "\n<button type=\"button\" class=\"more-options\">\n    <img src=\"../images/more.svg\" class=\"more-options\">\n</button>\n\n<span class=\"chart-view\">\n    <ul>\n        <li>\n            <span class=\"chart-view-header\">Items in column</span>\n            <div class=\"options-list\">\n                <div class=\"options-item\" id=\"10\">\n                    10\n                </div>\n                <div class=\"options-item\" id=\"20\">20</div>\n                <div class=\"options-item\" id=\"30\">30</div>\n                <div class=\"options-item\" id=\"40\">40</div>\n                <div class=\"options-item\" id=\"50\">50</div>\n            </div>\n        </li>\n    </ul>\n</span>\n";
var checkmark = '<svg name="IconCheck" viewBox="0 0 1920 1920" rotate="0" width="1em" height="1em" aria-hidden="true" role="presentation" focusable="false" class="checkmark" style="width: 1em; height: 1em;position: absolute; left: 7px;"> <g role="presentation"><path d="M1743.8579 267.012456L710.746654 1300.1237 176.005086 765.382131 0 941.387217 710.746654 1652.25843 1919.98754 443.142104z" fill-rule="evenodd" stroke="none" stroke-width="1"></path></g></svg>';
var chooser = "\n<div id=\"chooser\">\n    <div class=\"chooser-item\" id=\"my-course\" style=\"width: 157px;\">My Courses</div>\n    <div class=\"chooser-item\" id=\"all-courses\" style=\"width: 256px;\">All Courses</div>\n    <div class=\"chooser-item\" id=\"registered-courses\" style=\"width: 257px;\">Registered Courses</div>\n    <div class=\"chooser-item\" id=\"liked-courses\" style=\"width: 257px;\">Liked Courses</div>\n</div>\n";
var my_courses = "\n<table class=\"current-courses\">\n    <thead>\n        <tr>\n            <th class=\"courses-favorite\">III</th>\n            <th class=\"courses-course\">Class</th>\n            <th class=\"courses-credits\">Credits</th>\n            <th class=\"courses-term\">Term</th>\n            <th class=\"courses-enrolled\">Enrolled as</th>\n            <th class=\"courses-grade\">Grade</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td class=\"courses-favorite\">\n                <span class=\"favorite-icon\" title=\"Click to add to the courses menu.\">\n                </span>\n            </td>\n            <td class=\"courses-course\">\n                <a class=\"course-click\">Web development</a>\n            </td>\n            <td class=\"courses-credits\">5</td>\n            <td class=\"courses-term\">III</td>\n            <td class=\"courses-enrolled\">Student</td>\n            <td class=\"courses-grade\">-</td>\n        </tr>\n        <tr>\n            <td class=\"courses-favorite\">\n                <span class=\"favorite-icon\" title=\"Click to add to the courses menu.\">\n                </span>\n            </td>\n            <td class=\"courses-course\">\n                <a class=\"course-click\">Natural Language processing(NLP)</a>\n            </td>\n            <td class=\"courses-credits\">6</td>\n            <td class=\"courses-term\">III</td>\n            <td class=\"courses-enrolled\">Student</td>\n            <td class=\"courses-grade\">-</td>\n        </tr>\n\n    </tbody>\n</table>\n\n<table class=\"current-courses\">\n    <thead>\n        <tr>\n            <th class=\"courses-favorite\">II</th>\n            <th class=\"courses-course\">Class</th>\n            <th class=\"courses-credits\">Credits</th>\n            <th class=\"courses-term\">Term</th>\n            <th class=\"courses-enrolled\">Enrolled as</th>\n            <th class=\"courses-grade\">Grade</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td class=\"courses-favorite\">\n                <span class=\"favorite-icon\" title=\"Click to add to the courses menu.\">\n                </span>\n            </td>\n            <td class=\"courses-course\">\n                <a class=\"course-click\">Operating systems engineering</a>\n            </td>\n            <td class=\"courses-credits\">6</td>\n            <td class=\"courses-term\">II</td>\n            <td class=\"courses-enrolled\">Student</td>\n            <td class=\"courses-grade\">A</td>\n        </tr>\n        <tr>\n            <td class=\"courses-favorite\">\n                <span class=\"favorite-icon\" title=\"Click to add to the courses menu.\">\n                </span>\n            </td>\n            <td class=\"courses-course\">\n                <a class=\"course-click\">Mobile Development (Android)</a>\n            </td>\n            <td class=\"courses-credits\">6</td>\n            <td class=\"courses-term\">II</td>\n            <td class=\"courses-enrolled\">Student</td>\n            <td class=\"courses-grade\">B</td>\n        </tr>\n\n        <tr>\n            <td class=\"courses-favorite\">\n                <span class=\"favorite-icon\" title=\"Click to add to the courses menu.\">\n                </span>\n            </td>\n            <td class=\"courses-course\">\n                <a class=\"course-click\">NAND 2 TETRIS</a>\n            </td>\n            <td class=\"courses-credits\">6</td>\n            <td class=\"courses-term\">II</td>\n            <td class=\"courses-enrolled\">Student</td>\n            <td class=\"courses-grade\">A</td>\n        </tr>\n\n    </tbody>\n</table>\n\n<table class=\"current-courses\">\n    <thead>\n        <tr>\n            <th class=\"courses-favorite\">I</th>\n            <th class=\"courses-course\">Class</th>\n            <th class=\"courses-credits\">Credits</th>\n            <th class=\"courses-term\">Term</th>\n            <th class=\"courses-enrolled\">Enrolled as</th>\n            <th class=\"courses-grade\">Grade</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr>\n            <td class=\"courses-favorite\">\n                <span class=\"favorite-icon\" title=\"Click to add to the courses menu.\">\n                </span>\n            </td>\n            <td class=\"courses-course\">\n                <a class=\"course-click\">Machine learning</a>\n            </td>\n            <td class=\"courses-credits\">6</td>\n            <td class=\"courses-term\">I</td>\n            <td class=\"courses-enrolled\">Student</td>\n            <td class=\"courses-grade\">C</td>\n        </tr>\n        <tr>\n            <td class=\"courses-favorite\">\n                <span class=\"favorite-icon\" title=\"Click to add to the courses menu.\">\n                </span>\n            </td>\n            <td class=\"courses-course\">\n                <a class=\"course-click\">Modern political ideas</a>\n            </td>\n            <td class=\"courses-credits\">4</td>\n            <td class=\"courses-term\">I</td>\n            <td class=\"courses-enrolled\">Student</td>\n            <td class=\"courses-grade\">D</td>\n        </tr>\n\n        <tr>\n            <td class=\"courses-favorite\">\n                <span class=\"favorite-icon\" title=\"Click to add to the courses menu.\">\n                </span>\n            </td>\n            <td class=\"courses-course\">\n                <a class=\"course-click\">Artificial intelligence</a>\n            </td>\n            <td class=\"courses-credits\">6</td>\n            <td class=\"courses-term\">I</td>\n            <td class=\"courses-enrolled\">Student</td>\n            <td class=\"courses-grade\">A</td>\n        </tr>\n\n    </tbody>\n</table>\n";
var pager = "\n<nav class=\"pager\">\n    <ul class=\"pager-ul\">\n        <li class=\"page-item\">1</li>\n        <li class=\"page-item\">2</li>\n        <li class=\"page-item\">3</li>\n        <li class=\"page-item\">...</li>\n        <li class=\"page-item\">5</li>\n    </ul>\n</nav>\n";
var allCourses = [["Advanced algorithms I", 6, 4, "MACS", "Unregistered", "Register"], ["Advanced algorithms II", 6, 3, "MACS", "Unregistered", "Register"], ["Game development Unity", 5, 2, "MACS", "Unregistered", "Register"], ["Theory of informatics", 5, 2, "MACS", "Unregistered", "Register"], ["Machine Vision", 5, 3, "MACS", "Unregistered", "Register"], ["Multicore programming", 5, 5, "MACS", "Unregistered", "Register"]];
var registered = JSON.parse(JSON.stringify(allCourses));
var liked = JSON.parse(JSON.stringify(allCourses));
var currentTab = "my";
var page = 1;
var view = 10;

for (var i = 0; i < 4; i++) {
  allCourses = allCourses.concat(allCourses);
}

function getTh(className, inner) {
  var th = document.createElement('th');
  th.className = className;
  th.innerHTML = inner;
  return th;
}

function getThead() {
  var thead = document.createElement('thead');
  var tr = document.createElement('tr');
  tr.appendChild(getTh('courses-favorite', ''));
  tr.appendChild(getTh('courses-course', 'Class'));
  tr.appendChild(getTh('courses-credits', 'Credits'));
  tr.appendChild(getTh('courses-term', 'Term'));
  tr.appendChild(getTh('courses-enrolled', 'Faculty'));
  tr.appendChild(getTh('courses-grade', 'Register'));
  thead.appendChild(tr);
  return thead;
}

function getAllTable() {
  var tbl = document.createElement('table');
  tbl.className = "current-courses";
  tbl.tHead = getThead();

  for (var i = view * page; i < Math.min((page + 1) * view, allCourses.length); i++) {
    var tr = document.createElement('tr');
    tr.innerHTML = "  \n            <td class=\"courses-favorite\">\n                <span class=\"favorite-icon\" title=\"Click to add to the courses menu.\">\n                </span>\n            </td>\n            <td class=\"courses-course\">\n                <a class=\"course-click\">".concat(allCourses[i][0], "</a>\n            </td>\n            <td class=\"courses-credits\">").concat(allCourses[i][1], "</td>\n            <td class=\"courses-term\">").concat(allCourses[i][2], "</td>\n            <td class=\"courses-enrolled\">").concat(allCourses[i][3], "</td>\n            <td class=\"courses-grade\"><button id=\"register").concat(i, "\" class=\"btn-flip\" data-back=\"").concat(allCourses[i][5], "\" data-front=\"").concat(allCourses[i][4], "\"></button></td>\n        ");
    tbl.appendChild(tr);
  }

  return tbl;
}

function getRegisteredTable(favorites) {
  var tbl = document.createElement('table');
  tbl.className = "current-courses";
  tbl.tHead = getThead();
  var arr = registered;

  if (favorites) {
    arr = liked;
  }

  for (var i = 0; i < arr.length; i++) {
    var tr = document.createElement('tr');
    tr.innerHTML = "  \n            <td class=\"courses-favorite\">\n                <span class=\"favorite-icon\" title=\"Click to add to the courses menu.\">\n                </span>\n            </td>\n            <td class=\"courses-course\">\n                <a href=\"/courses/....\">".concat(arr[i][0], "</a>\n            </td>\n            <td class=\"courses-credits\">").concat(arr[i][1], "</td>\n            <td class=\"courses-term\">").concat(arr[i][2], "</td>\n            <td class=\"courses-enrolled\">").concat(arr[i][3], "</td>\n            <td class=\"courses-grade\"><button id=\"register").concat(i, "\" class=\"btn-flip\" data-back=\"Unregister\" data-front=\"Registered\"></button></td>\n        ");

    if (favorites) {
      tr.childNodes[1].childNodes[1].style.backgroundImage = "url(../images/fill-star.svg)";
    }

    tbl.appendChild(tr);
  }

  return tbl;
}

function deleteIfExists(className) {
  for (var i = 0; i < className.length; i++) {
    var els = document.getElementsByClassName(className[i]);

    while (els.length != 0) {
      els[0].parentNode.removeChild(els[0]);
    }
  }
}

function replaceCheckmark() {
  var type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "10";
  deleteIfExists(["checkmark"]);
  document.getElementById(type).insertAdjacentHTML('beforeend', checkmark);
}

function refreshTableAndPager(tbl) {
  deleteIfExists(["current-courses", "pager"]);
  var page = constructPages();
  document.getElementsByClassName("class")[0].appendChild(tbl);
  document.getElementsByClassName("class")[0].insertAdjacentHTML('beforeend', page);
}

document.getElementsByClassName("slide-menu")[0].style.display = 'none';
document.getElementsByClassName("main-header")[0].innerHTML = header;
document.getElementsByClassName("class")[0].innerHTML = chooser + my_courses;
document.getElementById("all-courses").addEventListener("click", function (e) {
  document.getElementsByClassName("main-header")[0].innerHTML = header + options;
  currentTab = "all";
  replaceCheckmark();
  refreshTableAndPager(getAllTable());
});
document.getElementById("my-course").addEventListener("click", function (e) {
  deleteIfExists(["current-courses", "pager"]);
  currentTab = "my";
  document.getElementsByClassName("main-header")[0].innerHTML = header;
  document.getElementsByClassName("class")[0].insertAdjacentHTML('beforeend', my_courses);
});
document.getElementById("registered-courses").addEventListener("click", function (e) {
  document.getElementsByClassName("main-header")[0].innerHTML = header;
  currentTab = "reg";
  refreshTableAndPager(getRegisteredTable(false));
  deleteIfExists(["pager"]);
});
document.getElementById("liked-courses").addEventListener("click", function (e) {
  document.getElementsByClassName("main-header")[0].innerHTML = header;
  currentTab = "liked";
  refreshTableAndPager(getRegisteredTable(true));
  deleteIfExists(["pager"]);
});

function constructPages() {
  deleteIfExists("pager");
  var temp = "<nav class=\"pager\"><ul class=\"pager-ul\">";
  var num = Math.floor(allCourses.length / view);

  if (num > 7) {
    temp += "<li class=\"page-item\" id=\"page1\">1</li>";

    if (page >= 5 && page <= num - 4) {
      temp += "<li class=\"page-item\">...</li>";
      temp += "<li class=\"page-item\" id=\"page".concat(page - 1, "\">").concat(page - 1, "</li>");
      temp += "<li class=\"page-item\" id=\"page".concat(page, "\">").concat(page, "</li>");
      temp += "<li class=\"page-item\" id=\"page".concat(page + 1, "\">").concat(page + 1, "</li>");
      temp += "<li class=\"page-item\">...</li>";
    } else if (page < 5) {
      for (var i = 1; i < 5; i++) {
        temp += "<li class=\"page-item\" id=\"page".concat(i + 1, "\">").concat(i + 1, "</li>");
      }

      temp += "<li class=\"page-item\">...</li>";
    } else {
      temp += "<li class=\"page-item\">...</li>";

      for (var i = num - 5; i < num; i++) {
        temp += "<li class=\"page-item\" id=\"page".concat(i, "\">").concat(i, "</li>");
      }
    }

    temp += "<li class=\"page-item\" id=\"page".concat(num, "\">").concat(num, "</li>");
  } else {
    for (var i = 1; i <= num; i++) {
      temp += "<li class=\"page-item\" id=\"page".concat(i, "\">").concat(i, "</li>");
    }
  }

  temp += "</ul></nav>";
  temp = temp.replace("".concat(page, "\""), "".concat(page, "\" style=\"background-color: #FFD102; color: #fff\""));
  return temp;
}

document.addEventListener("click", function (e) {
  if (e.target.className == "options-item") {
    if (document.getElementById("chartContainer") != null) {
      return;
    }

    page = 1;
    replaceCheckmark(e.target.id);
    view = parseInt(e.target.id);
    refreshTableAndPager(getAllTable());
  } else if (e.target.className == "page-item") {
    if (e.target.id == null || e.target.id == "") {
      return;
    }

    page = parseInt(e.target.id.charAt(e.target.id.length - 1));
    refreshTableAndPager(getAllTable());
  } else if (e.target.className == "favorite-icon") {
    var img = e.target.style.backgroundImage;

    if (img == 'url("../images/fill-star.svg")') {
      e.target.style.backgroundImage = "url(../images/star.svg)";
    } else {
      e.target.style.backgroundImage = "url(../images/fill-star.svg)";
    }

    if (currentTab === "liked") {
      var parent = e.target.parentNode.parentNode;
      parent.parentNode.removeChild(parent);
    }
  } else if (e.target.className == "btn-flip") {
    var id = e.target.id;
    var ind = parseInt(id.charAt(id.length - 1));

    if (e.target.getAttribute("data-back") === "Register") {
      if (currentTab === "all") {
        allCourses[i][4] = "Registered";
        allCourses[i][5] = "Unregister";
        registered.push(allCourses[ind]);
      } else {
        registered.push(liked[ind]);
      }

      e.target.setAttribute("data-back", " Unregister ");
      e.target.setAttribute("data-front", " Registered ");
    } else {
      if (currentTab === "reg") {
        registered.splice(ind, 1);
        var parent = e.target.parentNode.parentNode;
        parent.parentNode.removeChild(parent);
      } else {
        if (currentTab === "all") {
          allCourses[i][4] = "Unregistered";
          allCourses[i][5] = "Register";
        }

        e.target.setAttribute("data-back", "Register");
        e.target.setAttribute("data-front", "Unregistered");
      }
    }
  }
});