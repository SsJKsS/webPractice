function accountPasswordCheck()
{
    var account=document.getElementById("loginFromAccount").value;
    var password=document.getElementById("loginFromPassword").value;
    if(account==""||password=="")
    {
        alert("不可為白!");
    }
}
function changeImage(element)
{
    element.src=element.src.match('rem')?"pic/emt.jpg":"pic/rem.jpg";
}
function welcome(name,gender){
	alert("Welcome " + name + ", the " + gender);
}
function passwordCheck()
{
    passwordValidator = function (text) {
    var passwordregex8digits = new RegExp("^(?=.{8,})");  //最少八個位元
    var passwordregexLowercase = new RegExp("^(?=.*[a-z])");   //英文小寫
        var passwordregexUppercase = new RegExp("^(?=.*[A-Z])");   //英文大小
        var passwordregexNumber = new RegExp("^(?=.*[0-9])");    //數字
        var passwordRegexSpecial = new RegExp("^(?=.*[!@#$%^&*])");   //特殊字元
        if (!passwordregex8digits.test(text)) {
            violate_count++;
        }
        if (!passwordregexLowercase.test(text)) {
            violate_count++;
        }
    if (!passwordregexUppercase.test(text)) {
        violate_count++;
    }    
        if (!passwordregexNumber.test(text)) {
            violate_count++;
        }
    if (!passwordRegexSpecial.test(text)) {
        violate_count++;
    }
        alert('違規次數:' + violate_count);
}
}
function nameSubmit()
{
    var lname = document.getElementById("lname").value;
    var fname = document.getElementById("fname").value;
    var fullName = function()
    {
        return lname + fname;
    } 
    document.getElementById("message").innerHTML = 'Hello ' + fullName() + '!';
    // alert('Hello ' + go.fname.value +'!');
}
function checkNumber() {
    var inpObj = document.getElementById("id1");
    if (inpObj.checkValidity() == false) {
        document.getElementById("demo").innerHTML = inpObj.validationMessage;
    } else {
        document.getElementById("demo").innerHTML = "输入正确";
    }
}
$(function(){
    $("p.test").click(function(){
        $(this).css("color","blue");
    });
  });