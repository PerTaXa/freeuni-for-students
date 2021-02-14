var header = `
<h2 class="profile-font" style="font-size: 30px;">Bill Gates's Courses</h2>
`
var options = `
<button type="button" class="more-options">
    <img src="../images/more.svg" class="more-options">
</button>

<span class="chart-view">
    <ul>
        <li>
            <span class="chart-view-header">Items in column</span>
            <div class="options-list">
                <div class="options-item" id="10">
                    10
                </div>
                <div class="options-item" id="20">20</div>
                <div class="options-item" id="30">30</div>
                <div class="options-item" id="40">40</div>
                <div class="options-item" id="50">50</div>
            </div>
        </li>
    </ul>
</span>
`

var checkmark = '<svg name="IconCheck" viewBox="0 0 1920 1920" rotate="0" width="1em" height="1em" aria-hidden="true" role="presentation" focusable="false" class="checkmark" style="width: 1em; height: 1em;position: absolute; left: 7px;"> <g role="presentation"><path d="M1743.8579 267.012456L710.746654 1300.1237 176.005086 765.382131 0 941.387217 710.746654 1652.25843 1919.98754 443.142104z" fill-rule="evenodd" stroke="none" stroke-width="1"></path></g></svg>'

var chooser = `
<div id="chooser">
    <div class="chooser-item" id="my-course" style="width: 157px;">My Courses</div>
    <div class="chooser-item" id="all-courses" style="width: 256px;">All Courses</div>
    <div class="chooser-item" id="registered-courses" style="width: 257px;">Registered Courses</div>
    <div class="chooser-item" id="liked-courses" style="width: 257px;">Liked Courses</div>
</div>
`
var my_courses = `
<table class="current-courses">
    <thead>
        <tr>
            <th class="courses-favorite">III</th>
            <th class="courses-course">Class</th>
            <th class="courses-credits">Credits</th>
            <th class="courses-term">Term</th>
            <th class="courses-enrolled">Enrolled as</th>
            <th class="courses-grade">Grade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="courses-favorite">
                <span class="favorite-icon" title="Click to add to the courses menu.">
                </span>
            </td>
            <td class="courses-course">
                <a class="course-click">Web development</a>
            </td>
            <td class="courses-credits">5</td>
            <td class="courses-term">III</td>
            <td class="courses-enrolled">Student</td>
            <td class="courses-grade">-</td>
        </tr>
        <tr>
            <td class="courses-favorite">
                <span class="favorite-icon" title="Click to add to the courses menu.">
                </span>
            </td>
            <td class="courses-course">
                <a class="course-click">Natural Language processing(NLP)</a>
            </td>
            <td class="courses-credits">6</td>
            <td class="courses-term">III</td>
            <td class="courses-enrolled">Student</td>
            <td class="courses-grade">-</td>
        </tr>

    </tbody>
</table>

<table class="current-courses">
    <thead>
        <tr>
            <th class="courses-favorite">II</th>
            <th class="courses-course">Class</th>
            <th class="courses-credits">Credits</th>
            <th class="courses-term">Term</th>
            <th class="courses-enrolled">Enrolled as</th>
            <th class="courses-grade">Grade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="courses-favorite">
                <span class="favorite-icon" title="Click to add to the courses menu.">
                </span>
            </td>
            <td class="courses-course">
                <a class="course-click">Operating systems engineering</a>
            </td>
            <td class="courses-credits">6</td>
            <td class="courses-term">II</td>
            <td class="courses-enrolled">Student</td>
            <td class="courses-grade">A</td>
        </tr>
        <tr>
            <td class="courses-favorite">
                <span class="favorite-icon" title="Click to add to the courses menu.">
                </span>
            </td>
            <td class="courses-course">
                <a class="course-click">Mobile Development (Android)</a>
            </td>
            <td class="courses-credits">6</td>
            <td class="courses-term">II</td>
            <td class="courses-enrolled">Student</td>
            <td class="courses-grade">B</td>
        </tr>

        <tr>
            <td class="courses-favorite">
                <span class="favorite-icon" title="Click to add to the courses menu.">
                </span>
            </td>
            <td class="courses-course">
                <a class="course-click">NAND 2 TETRIS</a>
            </td>
            <td class="courses-credits">6</td>
            <td class="courses-term">II</td>
            <td class="courses-enrolled">Student</td>
            <td class="courses-grade">A</td>
        </tr>

    </tbody>
</table>

<table class="current-courses">
    <thead>
        <tr>
            <th class="courses-favorite">I</th>
            <th class="courses-course">Class</th>
            <th class="courses-credits">Credits</th>
            <th class="courses-term">Term</th>
            <th class="courses-enrolled">Enrolled as</th>
            <th class="courses-grade">Grade</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="courses-favorite">
                <span class="favorite-icon" title="Click to add to the courses menu.">
                </span>
            </td>
            <td class="courses-course">
                <a class="course-click">Machine learning</a>
            </td>
            <td class="courses-credits">6</td>
            <td class="courses-term">I</td>
            <td class="courses-enrolled">Student</td>
            <td class="courses-grade">C</td>
        </tr>
        <tr>
            <td class="courses-favorite">
                <span class="favorite-icon" title="Click to add to the courses menu.">
                </span>
            </td>
            <td class="courses-course">
                <a class="course-click">Modern political ideas</a>
            </td>
            <td class="courses-credits">4</td>
            <td class="courses-term">I</td>
            <td class="courses-enrolled">Student</td>
            <td class="courses-grade">D</td>
        </tr>

        <tr>
            <td class="courses-favorite">
                <span class="favorite-icon" title="Click to add to the courses menu.">
                </span>
            </td>
            <td class="courses-course">
                <a class="course-click">Artificial intelligence</a>
            </td>
            <td class="courses-credits">6</td>
            <td class="courses-term">I</td>
            <td class="courses-enrolled">Student</td>
            <td class="courses-grade">A</td>
        </tr>

    </tbody>
</table>
`

var pager = `
<nav class="pager">
    <ul class="pager-ul">
        <li class="page-item">1</li>
        <li class="page-item">2</li>
        <li class="page-item">3</li>
        <li class="page-item">...</li>
        <li class="page-item">5</li>
    </ul>
</nav>
`
var allCourses = [["Advanced algorithms I", 6, 4,"MACS", "Unregistered", "Register"],
                  ["Advanced algorithms II", 6, 3, "MACS", "Unregistered", "Register"],
                  ["Game development Unity", 5, 2,"MACS", "Unregistered", "Register"],
                  ["Theory of informatics", 5, 2, "MACS", "Unregistered", "Register"],
                  ["Machine Vision", 5, 3, "MACS", "Unregistered", "Register"],
                  ["Multicore programming", 5, 5, "MACS", "Unregistered", "Register"]]

var registered = JSON.parse(JSON.stringify(allCourses))
var liked = JSON.parse(JSON.stringify(allCourses))
var currentTab = "my"

var page = 1
var view = 10
 
for (var i = 0; i < 4; i++) {
    allCourses = allCourses.concat(allCourses);
}

function getTh(className, inner) {
    var th = document.createElement('th');
    th.className = className
    th.innerHTML = inner
    return th
}

function getThead() {
    var thead = document.createElement('thead')
    var tr = document.createElement('tr')
    tr.appendChild(getTh('courses-favorite', ''))
    tr.appendChild(getTh('courses-course', 'Class'))
    tr.appendChild(getTh('courses-credits', 'Credits'))
    tr.appendChild(getTh('courses-term', 'Term'))
    tr.appendChild(getTh('courses-enrolled', 'Faculty'))
    tr.appendChild(getTh('courses-grade', 'Register'))
    thead.appendChild(tr)
    return thead
}

function getAllTable(){
    var tbl = document.createElement('table');
    tbl.className = "current-courses"

    tbl.tHead = getThead()
    for(var i = view * page; i < Math.min((page + 1) * view, allCourses.length); i++){
        var tr = document.createElement('tr');
        tr.innerHTML = `  
            <td class="courses-favorite">
                <span class="favorite-icon" title="Click to add to the courses menu.">
                </span>
            </td>
            <td class="courses-course">
                <a class="course-click">${allCourses[i][0]}</a>
            </td>
            <td class="courses-credits">${allCourses[i][1]}</td>
            <td class="courses-term">${allCourses[i][2]}</td>
            <td class="courses-enrolled">${allCourses[i][3]}</td>
            <td class="courses-grade"><button id="register${i}" class="btn-flip" data-back="${allCourses[i][5]}" data-front="${allCourses[i][4]}"></button></td>
        `
        tbl.appendChild(tr)
    }
    return tbl
}

function getRegisteredTable(favorites){
    var tbl = document.createElement('table');
    tbl.className = "current-courses"
    tbl.tHead = getThead()
    var arr = registered
    if (favorites) {
        arr = liked
    }
    for(var i = 0; i < arr.length; i++){
        var tr = document.createElement('tr');
        tr.innerHTML = `  
            <td class="courses-favorite">
                <span class="favorite-icon" title="Click to add to the courses menu.">
                </span>
            </td>
            <td class="courses-course">
                <a href="/courses/....">${arr[i][0]}</a>
            </td>
            <td class="courses-credits">${arr[i][1]}</td>
            <td class="courses-term">${arr[i][2]}</td>
            <td class="courses-enrolled">${arr[i][3]}</td>
            <td class="courses-grade"><button id="register${i}" class="btn-flip" data-back="Unregister" data-front="Registered"></button></td>
        `
        if (favorites) {
            tr.childNodes[1].childNodes[1].style.backgroundImage = "url(../images/fill-star.svg)";
        }
        
        tbl.appendChild(tr)
    }
    return tbl
}

function deleteIfExists(className){
    for(var i = 0; i < className.length; i++){
        let els = document.getElementsByClassName(className[i])
        while (els.length != 0){
            els[0].parentNode.removeChild(els[0])
        }
    }
    
}

function replaceCheckmark(type = "10") {
    deleteIfExists(["checkmark"])
    document.getElementById(type).insertAdjacentHTML('beforeend', checkmark)
}

function refreshTableAndPager(tbl){
    deleteIfExists(["current-courses", "pager"])

    var page = constructPages()

    document.getElementsByClassName("class")[0].appendChild(tbl)
    document.getElementsByClassName("class")[0].insertAdjacentHTML('beforeend', page)
}

document.getElementsByClassName("slide-menu")[0].style.display = 'none'
document.getElementsByClassName("main-header")[0].innerHTML = header
document.getElementsByClassName("class")[0].innerHTML = chooser + my_courses

document.getElementById("all-courses").addEventListener("click", function(e){
    document.getElementsByClassName("main-header")[0].innerHTML = header + options
    currentTab = "all"
    replaceCheckmark()
    refreshTableAndPager(getAllTable())
})

document.getElementById("my-course").addEventListener("click", function(e){
    deleteIfExists(["current-courses", "pager"])
    currentTab = "my"
    document.getElementsByClassName("main-header")[0].innerHTML = header
    document.getElementsByClassName("class")[0].insertAdjacentHTML('beforeend', my_courses)
})

document.getElementById("registered-courses").addEventListener("click", function(e){
    document.getElementsByClassName("main-header")[0].innerHTML = header
    currentTab = "reg"
    refreshTableAndPager(getRegisteredTable(false))
    deleteIfExists(["pager"])
})

document.getElementById("liked-courses").addEventListener("click", function(e){
    document.getElementsByClassName("main-header")[0].innerHTML = header
    currentTab = "liked"
    refreshTableAndPager(getRegisteredTable(true))
    deleteIfExists(["pager"])
})


function constructPages() {
    deleteIfExists("pager")
    var temp = `<nav class="pager"><ul class="pager-ul">`
    var num = Math.floor(allCourses.length / view)
    if(num > 7) {
        temp += `<li class="page-item" id="page1">1</li>`
        if(page >= 5 && page <= num - 4){
            temp += `<li class="page-item">...</li>`
            temp += `<li class="page-item" id="page${page - 1}">${page - 1}</li>`
            temp += `<li class="page-item" id="page${page}">${page}</li>`
            temp += `<li class="page-item" id="page${page + 1}">${page + 1}</li>`
            temp += `<li class="page-item">...</li>`
        } else if (page < 5){
            for(var i = 1; i < 5; i++){
                temp += `<li class="page-item" id="page${i + 1}">${i + 1}</li>`
            }
            temp += `<li class="page-item">...</li>`
        } else {
            temp += `<li class="page-item">...</li>`
            for(var i = num - 5; i < num; i++){
                temp += `<li class="page-item" id="page${i}">${i}</li>`
            }
        }
        temp += `<li class="page-item" id="page${num}">${num}</li>`
    } else {
        for(var i = 1; i <= num; i++){
            temp += `<li class="page-item" id="page${i}">${i}</li>`
        }
    }
    temp += `</ul></nav>`
    temp = temp.replace(`${page}"`, `${page}" style="background-color: #FFD102; color: #fff"`)
    return temp
}

document.addEventListener("click", function (e) {
    if (e.target.className == "options-item") {
        if(document.getElementById("chartContainer") != null){return}
        page = 1
        replaceCheckmark(e.target.id)
        view = parseInt(e.target.id)
        refreshTableAndPager(getAllTable())
    } else if(e.target.className == "page-item") {
        if(e.target.id == null || e.target.id == "") {return}
        page = parseInt(e.target.id.charAt(e.target.id.length - 1))
        refreshTableAndPager(getAllTable())
    } else if(e.target.className == "favorite-icon") {
        var img = e.target.style.backgroundImage
        if (img == 'url("../images/fill-star.svg")') {
            e.target.style.backgroundImage = "url(../images/star.svg)";
        } else {
            e.target.style.backgroundImage = "url(../images/fill-star.svg)";
        }
        if (currentTab === "liked") {
            var parent = e.target.parentNode.parentNode
            parent.parentNode.removeChild(parent);
        }
    } else if(e.target.className == "btn-flip") {
        let id = e.target.id
        let ind = parseInt(id.charAt(id.length - 1))
        if (e.target.getAttribute("data-back") === "Register"){
            if (currentTab === "all"){
                allCourses[i][4] = "Registered"
                allCourses[i][5] = "Unregister"
                registered.push(allCourses[ind])
            } else {
                registered.push(liked[ind])
            }
            e.target.setAttribute("data-back", " Unregister ")
            e.target.setAttribute("data-front", " Registered ")
        } else {
            if (currentTab === "reg"){
                registered.splice(ind, 1)
                var parent = e.target.parentNode.parentNode
                parent.parentNode.removeChild(parent);
            } else {
                if(currentTab === "all"){
                    allCourses[i][4] = "Unregistered"
                    allCourses[i][5] = "Register"
                }
                e.target.setAttribute("data-back", "Register")
                e.target.setAttribute("data-front", "Unregistered")
            }
        }
    }
})