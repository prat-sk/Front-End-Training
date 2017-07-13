var flagGender = false, flagEmpty = true ;
var parentId,institute,university,percent;
var diploma = document.getElementById("diplomaLabel");
var graduation = document.getElementById("graduationLabel");
var postGraduation = document.getElementById("postGraduationLabel");
var errorArea = document.getElementById ("error-area");

errorArea.addEventListener("click",function(){
    if(errorArea.style.display == "inline-block"){
        errorArea.style.display = "none";
    }
})

diploma.addEventListener("click",function () {
    if(diploma.checked){
        addFields("diploma");
    }
    else{
        removeFields(institute,university,percent);
    }
})
graduation.addEventListener("click",function () {
    if(graduation.checked){
        addFields("graduation");
    }
    else{
        removeFields(institute,university,percent);
    }
})
postGraduation.addEventListener("click",function () {
    if(postGraduation.checked){
        addFields("postGraduation");
    }
    else{
        removeFields(institute,university,percent);
    }
})

function addFields(parentId){
    var parentTag = document.getElementById(parentId);
    institute = document.createElement("input");
    university = document.createElement("input");
    percent = document.createElement("input");
    institute.setAttribute("class","getValue");
    institute.setAttribute("id",parentId+"Institute");
    institute.setAttribute("type","text");
    institute.setAttribute("name",parentId+"-Institute");
    university.setAttribute("class","dAlign getValue");
    university.setAttribute("id",parentId+"University");
    university.setAttribute("type","text");
    university.setAttribute("name",parentId+"-University");
    percent.setAttribute("class","getValue dAlign");
    percent.setAttribute("id",parentId+"Percent");
    percent.setAttribute("type","number");
    percent.setAttribute("name",parentId+"-Percent");
    percent.setAttribute("min","0");
    percent.setAttribute("max","100");
    percent.addEventListener("blur",percentValidation(this));
    parentTag.appendChild(institute);
    parentTag.appendChild(university);
    parentTag.appendChild(percent);
    return (institute,university,percent);
}
function removeFields(institute,university,percent){
    var instituteId = document.getElementById(institute.getAttribute("id"));
    var universityId = document.getElementById(university.getAttribute("id"));
    var percentId = document.getElementById(percent.getAttribute("id"));
    instituteId.parentNode.removeChild(instituteId);
    universityId.parentNode.removeChild(universityId);
    percentId.parentNode.removeChild(percentId);
}
function textValidation(inputField){
    var pattern = "^[a-zA-Z][a-zA-Z\\s]+$";
    if(!inputField.value.match(pattern)){
        errorArea.innerHTML = inputField.getAttribute("name") + " must contain only Characters.";
        errorArea.style.display = "inline-block";
        document.getElementById(inputField.getAttribute("id")).focus();
    }
}
function pinValidation(pinCode){
    var pattern = "^[1-9][0-9]{5}$";
    if(!pinCode.value.match(pattern)){
        if(pinCode.value.length != 6){
            errorArea.innerHTML = pinCode.getAttribute("name") + " must contain 6 digits.";
        }
        else{
            errorArea.innerHTML = pinCode.getAttribute("name") + " should not start with 0.";
        }
        errorArea.style.display = "inline-block";
        document.getElementById(pinCode.getAttribute("id")).focus();
    }
}
function mobileValidation(mobile){
    var pattern = "^[7-9][0-9]{9}$";
    if(!mobile.value.match(pattern)){
        if(mobile.value.length < 10 || mobile.value.length > 10){
            errorArea.innerHTML = mobile.getAttribute("name") + " number must be 10 digits.";
        }
        else{
            errorArea.innerHTML = mobile.getAttribute("name") + " number must start with 7-9 only.";
        }
        errorArea.style.display = "inline-block";
        document.getElementById(mobile.getAttribute("id")).focus();
    }
}
function percentValidation(percent){
    if(percent.value < 0 || percent.value > 100){
        if(percent.value < 0){
            errorArea.innerHTML = "Percentage cannot be Negative.";
        }else{
            errorArea.innerHTML = "Percentage must be in range 0 to 100.";
        }        
        errorArea.style.display = "inline-block";
        document.getElementById(percent.getAttribute("id")).focus();
    }     
} 
function ageValidate(age){
    if(age.value <= 0){
        errorArea.innerHTML = "Age can not be less than or equal to 0.";
        errorArea.style.display = "inline-block";
        document.getElementById(age.getAttribute("id")).focus();
    }
    if(age.value > 100){
        errorArea.innerHTML = "Age can not be greater than 100.";
        errorArea.style.display = "inline-block";
        document.getElementById(age.getAttribute("id")).focus();
    }  
}
function expValidate(experience){
    var age = document.getElementById("age").value;
    if(experience.value > (age-18)){
        errorArea.innerHTML = "Please make sure you entered correct Experience.";
        errorArea.style.display = "inline-block";
        document.getElementById(experience.getAttribute("id")).focus();
    }
}
function compulsaryFeilds(){
    var mandatory = document.getElementsByTagName("input");
    for(var i=0;i<mandatory.length;i++){
        if(mandatory[i].value == ""){
            flagEmpty = false;
            break;
        }
    }
}
function genderSelection() {
    var gender = document.getElementsByClassName("genderValue");
    for(var i=0;i<gender.length;i++){
        if(gender[i].checked){
            gender[i].setAttribute("class","getValue");
            flagGender = true;
        }
    }
}
function objectCreation() {
    genderSelection();
    compulsaryFeilds();
    if(flagGender == true && flagEmpty == true){
        var values = document.getElementsByClassName("getValue");
        var employee = {};
        for(var i=0;i<values.length;i++){
            key = values[i].getAttribute("name");
            val = values[i].value;
            employee[key] = val;
        }
        errorArea.style.display = "none";
        console.log(employee);
        localStorage.setItem("employee",JSON.stringify(employee));
        window.location = "profile.html";
    }else if(flagGender == false){
        errorArea.innerHTML = "Please select any Gender";
        errorArea.style.display = "inline-block";
    }else{
        errorArea.innerHTML = "All Fields are mandatory.";
        errorArea.style.display = "inline-block";
    }
    return false;
}