function check(){
    var m1 = document.getElementById("mail1");
var m2 = document.getElementById("mail2");
if(m1.value !=m2.value){
    alert("Please Enter the correct mail");
    return false;
}
}