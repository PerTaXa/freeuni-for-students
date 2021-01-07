"use strict";

document.addEventListener("DOMContentLoaded", function (event) {
  var account = "\n        <div class=\"slide-item-link slide-menu-link\">\n            <div class=\"slide-menu-avatar\"><img src=\"../images/bill_gates.jpg\"> </div>\n            <div class=\"menu-item-text slide-menu-text\"> Bill Gates </div>\n        </div>\n        <div style=\"background-color: black; height: 1px;margin-top: 25px;\"></div><button class=\"slide-item-link\">\n            <div id=\"profile\" class=\"menu-item-text slide-item-text\"> Profile</div>\n        </button><button class=\"slide-item-link\">\n            <div id=\"settings\" class=\"menu-item-text slide-item-text\"> Settings </div>\n        </button> \n    ";
  var course = "\n        <div style=\"padding: 1.5rem;\">\n            <h2>Courses</h2>\n            <div style=\"background-color: black; height: 1px;margin-top: 25px;\"></div>\n            <ul class=\"menu\" style=\"margin-top: 25px;\">\n                <li class=\"slide-list\">\n                    <a style=\"cursor:pointer\" class=\"menu-item-text course-click\">Web development</a>\n                </li>\n                <li class=\"slide-list\">\n                    <a style=\"cursor:pointer\" class=\"menu-item-text course-click\">Natural language processing</a>\n                </li>\n                <li class=\"slide-list\">\n                    <a style=\"cursor:pointer\" class=\"menu-item-text course-click\">Distributional systems</a>\n                </li>\n            </ul>\n            <div style=\"background-color: black; height: 1px;margin-top: 25px;\"></div>\n            <ul class=\"menu\" style=\"margin: 0.75rem 0px;\">\n                <li><a class=\"menu-item-text\" id=\"slide-all-courses\">All Courses</a></li>\n            </ul>\n            <br>\n            <div\">Welcome to your courses! To customize the list of courses,\n                click on the \"All Courses\" link and star the courses to display.\n            </div>\n        </div>\n    ";
  var finance = "\n        <table style=\"padding: 1.5rem; margin-top:40px; width: 100%\">\n            <tbody>\n                <tr>\n                    <th colspan=\"2\">2020 education financial data</th>\n                </tr>\n                <tr>\n                    <td style=\"\">Price</td>\n                    <td style=\"text-align: right;\"> 6,950.00</td>\n                </tr>\n                <tr>\n                    <td style=\"\">Sum of schoolaships</td>\n                    <td style=\"text-align: right;\"> 4,650.00</td>\n                </tr>\n                <tr>\n                    <td style=\"\">Total price to pay</td>\n                    <td style=\"text-align: right;\"> 2,300.00</td>\n                </tr>\n\n                <tr>\n                    <td style=\"\">Paid </td>\n                    <td style=\"text-align: right;\"> 2,300.00</td>\n                </tr>\n                <tr style=\"font-weight: bold; font-size: 12pt;\">\n                    <td>Total to pay </td>\n                    <td style=\"text-align: right;\">0.00</td>\n                </tr>\n            </tbody>\n        </table>\n    ";
  var heelp = "\n        <div style=\"padding: 1.5rem;\">\n            <h2>Help</h2>\n            <div style=\"background-color: black; height: 1px;margin-top: 25px;\"></div>\n\n            <ul class=\"menu\" style=\"margin: 0.75rem 0px;\">\n                <li class=\"slide-list\">\n                    <div><a href=\"...\">\n                            Online Student Center</a>\n                        <div>Student orientation for education 2020</div>\n                    </div>\n                </li>\n                <li class=\"slide-list\">\n                    <div>\n                        <a href=\"...\">Report a Website Problem</a>\n                        <div>If Website misbehaves, tell us about it\n                        </div>\n                    </div>\n                </li>\n                <li class=\"slide-list\">\n                    <div><a href=\"...\">Zoom 24x7 Support</a>\n                        <div>\n                            For 24/7 support, call: +995-555-55-55-55 or email: support@zoom.us</div>\n                    </div>\n                </li>\n                <li class=\"slide-list\">\n                    <div><a href=\"...\">Chat\n                            with us\n                            (Students)</a>\n                        <div>Live chat</div>\n                    </div>\n                </li>\n                <li class=\"slide-list\">\n                    <div><a href=\"...\">Ask\n                            Your Instructor a\n                            Question</a>\n                        <div>Questions are submitted to your\n                            instructor</div>\n                    </div>\n                </li>\n            </ul>\n        </div>\n    ";
  var accounts = document.getElementsByClassName("account");
  var courses = document.getElementsByClassName("courses");
  var calendar = document.getElementsByClassName("calendarr");
  var history = document.getElementsByClassName("history");
  var finances = document.getElementsByClassName("finances");
  var help = document.getElementsByClassName("help");

  var loadScript = function loadScript(src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.type = 'text/javascript';
      script.onload = resolve;
      script.onerror = reject;
      script.src = src;
      document.getElementsByClassName("slide-wrap")[0].appendChild(script); //   document.head.append(script)
    });
  };

  function toggleSlideMenu() {
    var style = document.getElementsByClassName("slide-menu")[0].style.display;

    if (style == 'none' || style == '') {
      document.getElementsByClassName("slide-menu")[0].style.display = 'block';
    } else {
      document.getElementsByClassName("slide-menu")[0].style.display = 'none';
    }
  }

  function toggleMobileMenu() {
    var style = document.getElementsByClassName("mobile-menu")[0].style.display;

    if (style == 'none' || style == '') {
      document.getElementsByClassName("mobile-menu")[0].style.display = 'block';
    } else {
      document.getElementsByClassName("mobile-menu")[0].style.display = 'none';
    }
  }

  var accountHandler = function accountHandler(e) {
    toggleSlideMenu();
    document.getElementsByClassName("slide-wrap")[0].innerHTML = account;
    loadScript('../js/setting.js').then(function () {
      loadedSettings = true;
      console.log("setting.js loaded");
    })["catch"](function () {
      console.log("setting.js error");
    });
  };

  var courseHandler = function courseHandler(e) {
    toggleSlideMenu();
    document.getElementsByClassName("slide-wrap")[0].innerHTML = course;
    loadScript('../js/courses.js').then(function () {
      loadedCourses = true;
      console.log("courses.js loaded");
    })["catch"](function () {
      console.log("courses.js error");
    });
  };

  var calendarHandler = function calendarHandler(e) {
    var calendar = "\n        <iframe\n        src=\"https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTbilisi&amp;src=YXBlcnQxN0BmcmVldW5pLmVkdS5nZQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tMDM5MDI4YzZAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tMjBmZGE0YmRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tMWQxYjMzOTFAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tYzkyZGYzOGZAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tYmNhYWVmNjdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tNTA3YjNkOGZAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4uZ2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tZDVhNTVjMzVAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tNTM3MDYxMjFAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tZWFmZWJkMmVAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tMzM3MTBmMTdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tMjZjODJiNGJAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tOTZmMTEzZTNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tNTRhNDA1OWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tYjUzM2MzNzFAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tOWY3Y2RmYThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%23202124&amp;color=%23137333&amp;color=%23007b83&amp;color=%23137333&amp;color=%237627bb&amp;color=%23202124&amp;color=%230B8043&amp;color=%230047a8&amp;color=%23285418&amp;color=%23263238&amp;color=%23263238&amp;color=%23004d40&amp;color=%23263238&amp;color=%23a52714&amp;color=%230047a8&amp;color=%230047a8\"\n        class=\"calendar\" frameborder=\"0\" scrolling=\"no\" style=\"height: 700px;\">\n        </iframe>\n        ";
    document.getElementsByClassName("class")[0].innerHTML = calendar;
  };

  var historyHandler = function historyHandler(e) {};

  var financesHandler = function financesHandler(e) {
    toggleSlideMenu();
    document.getElementsByClassName("slide-wrap")[0].innerHTML = finance;
  };

  var helpHandler = function helpHandler(e) {
    toggleSlideMenu();
    document.getElementsByClassName("slide-wrap")[0].innerHTML = heelp;
  };

  document.getElementById("hamburger").addEventListener("click", function () {
    toggleMobileMenu();
  });
  document.getElementById("full-close").addEventListener("click", function () {
    toggleSlideMenu();
  });
  document.getElementById("mobile-close").addEventListener("click", function () {
    toggleMobileMenu();
  });

  for (var i = 0; i < accounts.length; i++) {
    accounts[i].addEventListener('click', accountHandler, false);
  }

  for (var i = 0; i < courses.length; i++) {
    courses[i].addEventListener('click', courseHandler, false);
  }

  for (var i = 0; i < calendar.length; i++) {
    calendar[i].addEventListener('click', calendarHandler, false);
  }

  for (var i = 0; i < history.length; i++) {
    history[i].addEventListener('click', historyHandler, false);
  }

  for (var i = 0; i < finances.length; i++) {
    finances[i].addEventListener('click', financesHandler, false);
  }

  for (var i = 0; i < help.length; i++) {
    help[i].addEventListener('click', helpHandler, false);
  }

  document.addEventListener("click", function (e) {
    if (e.target.className.includes("course-click")) {
      loadScript('../js/class.js').then(function () {
        loadedCourses = true;
        console.log("class.js loaded");
      })["catch"](function () {
        console.log("class.js error");
      });
    }
  });
});