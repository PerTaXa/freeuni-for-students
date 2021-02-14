var main_header = `
<h2 class="profile-font" style="font-size: 30px;">Bill Gates's settings</h2>
`
var settings = `
<div class="settings">
<div class="content">
    <div style="padding: 24px;">
        <a title="Click to change profile pic" class="profile-pic"></a>
        <h1 class="settings-header">
            Bill Gates's Settings
        </h1>
        <form method="POST">
            <table>
                <tbody>
                    <tr>
                        <th>
                            <label class="profile-label">
                                Full Name:*
                            </label>
                        </th>
                        <td>
                            <div class="profile-value" id="profile-value1">Bill Gates</div>
                            <input type="text" value="Bill Gates" class="profile-input" id="profile-input1"/>
                            <div class="profile-font">This name
                                will be used for grading.</div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label class="profile-label">
                                Display Name:
                            </label>
                        </th>
                        <td>
                            <div class="profile-value" id="profile-value2">Bill Gates</div>
                            <input type="text" value="Bill Gates"  id="profile-input2"
                                class="profile-input" /> 
                                <div class="profile-font">
                                People will see
                                this name in discussions, messages and
                                comments.</div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label class="profile-label">
                                Sortable Name:
                            </label>
                        </th>
                        <td>
                            <div class="profile-value" id="profile-value3">Gates, Bill</div>
                            <input size="30" type="text" value="Gates, Bill"
                                class="profile-input"  id="profile-input3"/> 
                                <div class="profile-font">This name appears
                                in sorted lists.</div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label class="profile-label">
                                Pronouns:
                            </label>
                        </th>
                        <td class="profile-td">
                            <div class="profile-value" id="profile-value4">None</div>
                            <div>
                                <select class="profile-select" id="profile-input4">
                                    <option value="None">
                                        None
                                    </option>
                                    <option value="she/her/hers">
                                        she/her/hers
                                    </option>
                                    <option value="he/him/his">
                                        he/him/his
                                    </option>
                                    <option value="they/them/theirs">
                                        they/them/theirs
                                    </option>
                                    <option value="other">
                                        other
                                    </option>
                                </select>
                            </div>
                            <div class="profile-font">
                                This pronoun will appear
                                after your name when enabled
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label class="profile-label">
                                Language:
                            </label>
                        </th>
                        <td class="profile-td">
                            <div class="profile-value" id="profile-value5">English (US)</div>
                            <div><select class="profile-select" id="profile-input5">
                                    <option value="English (US)">
                                        English (US)
                                    </option>
                                    <option value="Español">
                                        Español
                                    </option>
                                    <option value="Français">
                                        Français
                                    </option>
                                </select> </div>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            <label class="profile-label">
                                Time Zone:
                            </label>
                        </th>
                        <td class="profile-td">
                            <div class="profile-value" id="profile-value6">Eastern Time (US &amp; Canada)</div>
                            <div><select class="profile-select" id="profile-input6">
                                    <option value="Eastern Time (US &amp; Canada)">
                                        Eastern Time (US &amp; Canada)
                                    </option>
                                    <option value="Berlin">
                                        Berlin (+01:00/+02:00)
                                    </option>
                                    <option value="Dublin">
                                        Dublin (+01:00/+00:00)
                                    </option>
                                    <option value="Prague">
                                        Prague (+01:00/+02:00)
                                    </option>
                                    <option value="Zurich">
                                        Zurich (+01:00/+02:00)
                                    </option>
                                    <option value="Moscow">
                                        Moscow (+03:00)
                                    </option>
                                    <option value="St. Petersburg">
                                        St. Petersburg (+03:00)
                                    </option>
                                    <option value="Tbilisi">
                                        Tbilisi (+04:00)
                                    </option>
                                    <option value="Yerevan">
                                        Yerevan (+04:00)
                                    </option>
                                </select></div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </form>
    </div>



        <div class="update-settings">
            <button id="cancel" class="gray-button" style="width: 80px">
                    Cancel
            </button>
            <button id="update-settings"type="submit" class="submit-button">
                Update Settings
            </button>
        </div>
    </div>

    <div class="add-info">
        <div class="right-side">
            <h2 class="settings-header">Ways to Contact</h2>
            <div>
                <table class="profile-add-table">
                    <thead>
                        <tr>
                            <th class="profile-add-thead">
                                Email Addresses
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th class="profile-add-th">
                                bgates17@freeuni.edu.ge
                            </th>
                        </tr>
                        <tr>
                            <th class="profile-add-th">
                                <a style="color: rgb(188, 24, 38);">billygates@gmail.com</a>
                            </th>
                        </tr>
                        
                    </tbody>
                </table>
                <div>
                    
                    <table>
                        <thead>
                            <tr>
                                <th class="profile-add-thead">
                                    Other Contacts
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th class="profile-add-th">
                                    <a style="color: rgb(188, 24, 38);">+9955555555</a>
                                </th>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <hr />
                <button id="edit-settings" class="gray-button">
                    <img src="../images/pen.svg" style="height: 15px;">
                    Edit Settings
                </button>
            </div>

        </div>
    </div>
</div>
`
var value = document.getElementsByClassName("profile-value")
var input = document.getElementsByClassName("profile-input")
var select = document.getElementsByClassName("profile-select")

// document.getElementsByClassName("slide-menu")[0].style.display = 'none'
document.getElementsByClassName("main-header")[0].innerHTML = main_header
document.getElementsByClassName("class")[0].innerHTML = settings

document.getElementById("edit-settings").addEventListener("click", function(){
    for (var i = 0; i < value.length; i++) {
        value[i].style.display = 'none'
    }
    for (var i = 0; i < input.length; i++) {
        input[i].style.display = 'block'
    }
    for (var i = 0; i < select.length; i++) {
        select[i].style.display = 'block'
    }
    document.getElementsByClassName("update-settings")[0].style.display = 'block'
})

document.getElementById("cancel").addEventListener("click", function(){
    for (var i = 0; i < value.length; i++) {
        value[i].style.display = 'block'
    }
    for (var i = 0; i < input.length; i++) {
        input[i].style.display = 'none'
    }
    for (var i = 0; i < select.length; i++) {
        select[i].style.display = 'none'
    }
    document.getElementsByClassName("update-settings")[0].style.display = 'none'
})

document.getElementById("update-settings").addEventListener("click", function(){
    for(var i = 1; i <= 6; i++){
        document.getElementById(`profile-value${i}`).innerHTML = document.getElementById(`profile-input${i}`).value
    }
    document.getElementById("cancel").click()
})




    




