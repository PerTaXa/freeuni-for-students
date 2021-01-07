var course = `
<div class="course1">
    <div class="course1-left">
        <nav>
            <ul id="section-tabs">
                <li class="section"><a id="syllabus">Syllabus</a></li>
                <li class="section"><a id="grades" >Grades</a></li>
            </ul>
        </nav>
    </div>

    <div class="course1-right" style="padding: 24px; width: 75%">
        
    </div>
</div>
`

var syllabus = `
<h1>Course syllabus</h1>
<div style="margin-bottom: 10px;">
    <h4 style="text-align: center;">Web development<br></h4>
    <h4 style="text-align: center;">Syllabus<br></h4>
    <table style="width: 50%;">
        <tbody>
            <tr>
                <td style="width: 20%;">Lecturer</td>
                <td style="width: 80%;">Otar Chekurishvili</td>
            </tr>
            <tr>
                <td style="width: 20%;">E-mail</td>
                <td style="width: 80%;">
                    <a href="mailto:o.chekurishvili@freeuni.edu.ge">o.chekurishvili@freeuni.edu.ge</a>
                </td>
            </tr>
            <tr>
                <td style="width: 20%;">Faculty</td>
                <td style="width: 80%;">MACS</td>
            </tr>
            <tr>
                <td style="width: 20%;">Type</td>
                <td style="width: 80%;">Specialized course</td>
            </tr>
            <tr>
                <td style="width: 20%;">ECTS credits</td>
                <td style="width: 80%;">5</td>
            </tr>
            <tr>
                <td style="width: 20%;">Language</td>
                <td style="width: 80%;">Georgian</td>
            </tr>
        </tbody>
    </table>
    <p>This course is designed to start you on a path toward future studies in web development and design, no matter how little experience or technical knowledge you currently have. The web is a very big place, and if you are the typical internet user, you probably visit several websites every day, whether for business, entertainment or education. But have you ever wondered how these websites actually work? How are they built? How do browsers, computers, and mobile devices interact with the web? What skills are necessary to build a website? With almost 1 billion websites now on the internet, the answers to these questions could be your first step toward a better understanding of the internet and developing a new set of internet skills.  

    By the end of this course you’ll be able to describe the structure and functionality of the world wide web, create dynamic web pages using a combination of HTML, CSS, and JavaScript, apply essential programming language concepts when creating HTML forms, select an appropriate web hosting service, and publish your webpages for the world to see. Finally, you’ll be able to develop a working model for creating your own personal or business websites in the future and be fully prepared to take the next step in a more advanced web development or design course or specialization. </p>
    <p>The goals of this course are:</p>
    <ol>
        <li> Creation of web applications </li>
        <li> HTML, CSS and JavaScript </li>
        <li> DOM and controlling it with JavaScript </li>
        <li> Web Components architecture  </li>
        <li> NodeJS technology Server-side scripting </li>
        <li> Security mechanisms </li>
        <li> HTTP protocol </li>
        <li> Ajax </li>
    </ol>
    <h4>Prerequisites</h4>
    <ol>
        <li> OOP </li>
    </ol>
    <h4>Course methodology</h4>
    <p> Student will be graded by midterm and final exams. Final exam is necessary to pass this class.
        
    </p>
    
    <table
        style="border-collapse: collapse; width: 28.8443%; margin-left: auto; margin-right: auto;">
        <tbody>
            <tr>
                <td style="width: 20%;">Course grades</td>
                <td style="width: 13%; text-align: center;">%</td>
            </tr>
            <tr>
                <td style="width: 20%;">Assignments (2)</td>
                <td style="width: 13%; text-align: center;">15</td>
            </tr>
            <tr>
                <td style="width: 20%;">Group projects (2)</td>
                <td style="width: 13%; text-align: center;">20</td>
            </tr>
            <tr>
                <td style="width: 20%;">Mid term (2)</td>
                <td style="width: 13%; text-align: center;">40</td>
            </tr>
            <tr>
                <td style="width: 20%;">Final exam</td>
                <td style="width: 13%; text-align: center;">25</td>
            </tr>
            <tr>
                <td style="width: 20%; text-align: center;">Total</td>
                <td style="width: 13%; text-align: center;">100</td>
            </tr>
        </tbody>
    </table>
    

<h2>Couse summary</h2>

<div >
    <table >
    <thead>
        <tr>
        <th style="width: 33%;">Date</th>
        <th style="width: 33%;">Details</th>
        <th style="width: 33%;">Deadline</th>
        </tr>
    </thead>
    <tbody>
        <tr >
            <td>11 Sep, 2020</td>
            <td>Assignment 1</td>
            <td>11:59pm</td>
        </tr>
    
        <tr>
            <td rowspan="2"> 8 Oct, 2020 </td>
            <td>Project 1</td>
            <td>11:59pm</td>
        </tr>
    
        <tr>
            <td>Midterm</td>
            <td>7:59pm</td>
        </tr>
    </tbody>
    </table>
</div>
`

var grades = `
<ul>
<li>
    <div class="assignment_wrap" style="border-top: 1px solid #C7CDD1;">
        <div class="assignment_content">
            <a> Assignment1 </a>
            <div class="assignment_details"> 
                <span class="assignment_status">
                    Closed
                </span>                                      
                <span class="assignment_status">
                    Oct 15, 2020 at 2:30pm
                </span>
                <span class="assignment_status">
                    71.5/100
                </span>
                12.73%
            </div>
        </div>
    </div>
</li>
<li>
    <div class="assignment_wrap">
        <div class="assignment_content">
            <a> Assignment2 </a>
            <div class="assignment_details">    
                <span class="assignment_status">
                    Closed
                </span>                                   
                <span class="assignment_status">
                    Nov 7, 2020 at 2:30pm
                </span>
                <span class="assignment_status">
                    91.5/100
                </span>
                14.56%
            </div>
        </div>
    </div>
</li>
<li>
    <div class="assignment_wrap">
        <div class="assignment_content">
            <a> Group Project 1</a>
            <div class="assignment_details">                                       
                <span class="assignment_status">
                    Nov 15, 2020 at 2:30pm
                </span>
                -/100
            </div>
        </div>
    </div>
</li>

<li>
    <div class="assignment_wrap">
        <div class="assignment_content">
            <a> Group Project 2</a>
            <div class="assignment_details">                                       
                <span class="assignment_status">
                    Nov 30, 2020 at 2:30pm
                </span>
                -/100
            </div>
        </div>
    </div>
</li>
<li >
    <div class="assignment_wrap">
        <div class="assignment_content">
            <a >
                Final Exam
            </a>
            <div class="assignment_details">                                       
                    <span class="assignment_status">
                        Closed
                    </span>
                    <span class="assignment_status">
                        December 21, 2020 at 2:30pm
                    </span>
                    -/100
            </div>
        </div>
    </div>
</li>

</ul>
<div style="background-color: black; height: 1px;margin-top: 25px;"></div>
<h2 style="text-align: right;">Total: - %</h2>
</div>
`
document.getElementsByClassName("slide-menu")[0].style.display = 'none'
document.getElementsByClassName("class")[0].innerHTML = course
document.getElementsByClassName("course1-right")[0].innerHTML = syllabus

document.getElementById("syllabus").addEventListener("click", function(){
    document.getElementsByClassName("course1-right")[0].innerHTML = syllabus
})

document.getElementById("grades").addEventListener("click", function(){
    document.getElementsByClassName("course1-right")[0].innerHTML = grades
})