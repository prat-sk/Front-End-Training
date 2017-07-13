var personalDetails = document.getElementById("personalDetails");
var academicDetails = document.getElementById("academicDetails");
personalDetails.addEventListener("click",function(){
    validate();
    document.getElementById("personal-details").style.display = "none";
    document.getElementById("academic-details").style.display = "table";
})
academicDetails.addEventListener("click",function(){
    validate();
    document.getElementById("academic-details").style.display = "none";
    document.getElementById("skills").style.display = "table";
})
document.getElementById("skill").addEventListener("click",function(){
    document.getElementById("skills").style.display = "none";
    document.getElementById("experience").style.display = "table";
})
var diploma = document.getElementById("diploma");
diploma.addEventListener("click",function(){
    if(diploma.checked){
        document.getElementById("diplo").style.display = "table-row";
    }else{
        document.getElementById("diplo").style.display = "none";
    }
})
var graduation = document.getElementById("graduation");
graduation.addEventListener("click",function(){
    if(graduation.checked){
        document.getElementById("grade").style.display = "table-row";
    }else{
        document.getElementById("grade").style.display = "none";
    }
})
var postGraduation = document.getElementById("postGraduation");
postGraduation.addEventListener("click",function(){
    if(postGraduation.checked){
        document.getElementById("pGrade").style.display = "table-row";
    }else{
        document.getElementById("pGrade").style.display = "none";
    }
})
function validate(){
    alert("validate function")
}
