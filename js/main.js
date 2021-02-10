// import { showCourses } from "./courses.js"

document.addEventListener("DOMContentLoaded", function(event) { 

    var account = `
        <div class="slide-item-link slide-menu-link">
            <div class="slide-menu-avatar"><img src="../images/bill_gates.jpg"> </div>
            <div class="menu-item-text slide-menu-text"> Bill Gates </div>
        </div>
        <div style="background-color: black; height: 1px;margin-top: 25px;"></div>
        <button class="slide-item-link">
            <div id="settings" class="menu-item-text slide-item-text"> Settings </div>
        </button> 
    `
    var course = `
        <div style="padding: 1.5rem;">
            <h2>Courses</h2>
            <div style="background-color: black; height: 1px;margin-top: 25px;"></div>
            <ul class="menu" style="margin-top: 25px;">
                <li class="slide-list">
                    <a style="cursor:pointer" class="menu-item-text course-click">Web development</a>
                </li>
                <li class="slide-list">
                    <a style="cursor:pointer" class="menu-item-text course-click">Natural language processing</a>
                </li>
                <li class="slide-list">
                    <a style="cursor:pointer" class="menu-item-text course-click">Distributional systems</a>
                </li>
            </ul>
            <div style="background-color: black; height: 1px;margin-top: 25px;"></div>
            <ul class="menu" style="margin: 0.75rem 0px;">
                <li><a class="menu-item-text" id="slide-all-courses">All Courses</a></li>
            </ul>
            <br>
            <div">Welcome to your courses! To customize the list of courses,
                click on the "All Courses" link and star the courses to display.
            </div>
        </div>
    `

    var finance = `
        <table style="padding: 1.5rem; margin-top:40px; width: 100%">
            <tbody>
                <tr>
                    <th colspan="2">2020 education financial data</th>
                </tr>
                <tr>
                    <td style="">Price</td>
                    <td style="text-align: right;"> 6,950.00</td>
                </tr>
                <tr>
                    <td style="">Sum of schoolaships</td>
                    <td style="text-align: right;"> 4,650.00</td>
                </tr>
                <tr>
                    <td style="">Total price to pay</td>
                    <td style="text-align: right;"> 2,300.00</td>
                </tr>

                <tr>
                    <td style="">Paid </td>
                    <td style="text-align: right;"> 2,300.00</td>
                </tr>
                <tr style="font-weight: bold; font-size: 12pt;">
                    <td>Total to pay </td>
                    <td style="text-align: right;">0.00</td>
                </tr>
            </tbody>
        </table>
    `
    
    var heelp = `
        <div style="padding: 1.5rem;">
            <h2>Help</h2>
            <div style="background-color: black; height: 1px;margin-top: 25px;"></div>

            <ul class="menu" style="margin: 0.75rem 0px;">
                <li class="slide-list">
                    <div><a href="...">
                            Online Student Center</a>
                        <div>Student orientation for education 2020</div>
                    </div>
                </li>
                <li class="slide-list">
                    <div>
                        <a href="...">Report a Website Problem</a>
                        <div>If Website misbehaves, tell us about it
                        </div>
                    </div>
                </li>
                <li class="slide-list">
                    <div><a href="...">Zoom 24x7 Support</a>
                        <div>
                            For 24/7 support, call: +995-555-55-55-55 or email: support@zoom.us</div>
                    </div>
                </li>
                <li class="slide-list">
                    <div><a href="...">Chat
                            with us
                            (Students)</a>
                        <div>Live chat</div>
                    </div>
                </li>
                <li class="slide-list">
                    <div><a href="...">Ask
                            Your Instructor a
                            Question</a>
                        <div>Questions are submitted to your
                            instructor</div>
                    </div>
                </li>
            </ul>
        </div>
    `
    var dashboard = document.getElementsByClassName("dashboard")
    var accounts = document.getElementsByClassName("account")
    var courses = document.getElementsByClassName("courses")
    var calendar = document.getElementsByClassName("calendarr")
    var finances = document.getElementsByClassName("finances")
    var help = document.getElementsByClassName("help")
    var logouts = document.getElementsByClassName("logout-but")

    let defaultRoute = 'dashboard';
    let routes = {
    'account': () => {
        accountsHandler()
    },
    'dashboard': () => {
        dashboardHandler()
    },
    'courses': () => {
        courseHandler()
        // showCourses()
    },
    'calendarr': () => {
        calendarHandler()
    },
    'history': () => {
        historyHandler()
    },
    'finances': () => {
        financesHandler()
    },
    'help': () => {
        helpHandler()
    }
    };

    let handleRouting = () => {
        let currentUri = window.location.hash || false;
        console.log(currentUri)
        if (currentUri !== false) {
            currentUri = currentUri.substring(1);
        }
        closeMenus()
        routes[currentUri || defaultRoute]();
    };

    window.addEventListener('load', handleRouting);

    window.addEventListener('hashchange', handleRouting);

    const loadScript = src => {
        return new Promise((resolve, reject) => {
          const script = document.createElement('script')
          script.type = 'text/javascript'
          script.onload = resolve
          script.onerror = reject
          script.src = src
          document.getElementsByClassName("scripts")[0].innerHTML = ""
          document.getElementsByClassName("scripts")[0].appendChild(script)
        //   document.head.append(script)
        })
      }

    function toggleSlideMenu(){
        let style = document.getElementsByClassName("slide-menu")[0].style.display
        if (style == 'none' || style == '') {
            document.getElementsByClassName("slide-menu")[0].style.display = 'block'
        } else {
            document.getElementsByClassName("slide-menu")[0].style.display = 'none'
        }
    }

    function toggleMobileMenu(){
        let style = document.getElementsByClassName("mobile-menu")[0].style.display
        if (style == 'none' || style == '') {
            document.getElementsByClassName("mobile-menu")[0].style.display = 'block'
        } else {
            document.getElementsByClassName("mobile-menu")[0].style.display = 'none'
        }
    }

    function closeMenus(){
        document.getElementsByClassName("slide-menu")[0].style.display = 'none'
        document.getElementsByClassName("mobile-menu")[0].style.display = 'none'
    }

    var accountsHandler = function(e) {
        loadScript('../js/setting.js')
        .then(() => {
            loadedSettings = true
            console.log("setting.js loaded")
            closeMenus()
        })
        .catch(() =>{
            console.log("setting.js error")
        }) 
    }

    var accountHandler = function(e) {
        toggleSlideMenu()
        document.getElementsByClassName("slide-wrap")[0].innerHTML = account
        
        document.getElementById("settings").addEventListener("click", function(){
            location.hash='#account'
        })
        
    };

    var dashboardHandler = function(e) {
        loadScript('../js/dashboard.js')
        .then(() => {
            console.log("dashboard.js loaded")
            closeMenus()
        })
        .catch(() =>{
            console.log("dashboard.js error")
        }) 
    }

    var courseHandler = function(e) {
        loadScript('../js/courses.js')
        .then(() => {
            console.log("courses.js loaded")
            closeMenus()
        })
        .catch(() =>{
            console.log("courses.js error")
        })
        
    };

    var coursesHandler = function(e) {
        toggleSlideMenu()
        document.getElementsByClassName("slide-wrap")[0].innerHTML = course

        document.getElementById("slide-all-courses").addEventListener("click", function(){
            closeMenus()
            location.hash='#courses'
        })
    };

    var calendarHandler = function(e) {
        var calendar = `
        <iframe
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTbilisi&amp;src=YXBlcnQxN0BmcmVldW5pLmVkdS5nZQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tMDM5MDI4YzZAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tMjBmZGE0YmRAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tMWQxYjMzOTFAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tYzkyZGYzOGZAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tYmNhYWVmNjdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tNTA3YjNkOGZAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZW4uZ2UjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tZDVhNTVjMzVAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tNTM3MDYxMjFAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tZWFmZWJkMmVAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tMzM3MTBmMTdAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tMjZjODJiNGJAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tOTZmMTEzZTNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tNTRhNDA1OWNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tYjUzM2MzNzFAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;src=ZnJlZXVuaS5lZHUuZ2VfY2xhc3Nyb29tOWY3Y2RmYThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%23202124&amp;color=%23137333&amp;color=%23007b83&amp;color=%23137333&amp;color=%237627bb&amp;color=%23202124&amp;color=%230B8043&amp;color=%230047a8&amp;color=%23285418&amp;color=%23263238&amp;color=%23263238&amp;color=%23004d40&amp;color=%23263238&amp;color=%23a52714&amp;color=%230047a8&amp;color=%230047a8"
        class="calendar" frameborder="0" scrolling="no" style="height: 700px;">
        </iframe>
        `
        document.getElementsByClassName("class")[0].innerHTML = calendar
    };

    var financesHandler = function(e) {
        toggleSlideMenu()
        document.getElementsByClassName("slide-wrap")[0].innerHTML = finance
    };

    var helpHandler = function(e) {
        toggleSlideMenu()
        document.getElementsByClassName("slide-wrap")[0].innerHTML = heelp
    };

    var logoutHandler = function(e) {
        window.location.replace("login.html")
    };

    document.getElementById("hamburger").addEventListener("click", function(){
        toggleMobileMenu()
    })

    document.getElementById("full-close").addEventListener("click", function(){
        toggleSlideMenu()
    })

    document.getElementById("mobile-close").addEventListener("click", function(){
        toggleMobileMenu()
    })

    for (var i = 0; i < accounts.length; i++) {
        accounts[i].addEventListener('click', accountHandler, false);
    }

    for (var i = 0; i < dashboard.length; i++) {
        dashboard[i].addEventListener('click', closeMenus, false);
    }
    
    for (var i = 0; i < courses.length; i++) {
        courses[i].addEventListener('click', coursesHandler, false);
    }
    for (var i = 0; i < calendar.length; i++) {
        calendar[i].addEventListener('click', calendarHandler, false);
    }
    for (var i = 0; i < finances.length; i++) {
        finances[i].addEventListener('click', financesHandler, false);
    }
    for (var i = 0; i < help.length; i++) {
        help[i].addEventListener('click', helpHandler, false);
    }

    for (var i = 0; i < logouts.length; i++) {
        logouts[i].addEventListener('click', logoutHandler, false);
    }

    document.addEventListener("click", function(e){
        if(e.target.className.includes("course-click")){
            
            loadScript('../js/class.js')
            .then(() => {
                console.log("class.js loaded")
                closeMenus()
            })
            .catch(() =>{
                console.log("class.js error")
            })
        }
    })
});



