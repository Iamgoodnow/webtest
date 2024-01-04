//console.log("Console log");
//window.alert("This is a window alert.");
//let age = "69";
//let textbox;
//console.log(age);
let text;
while(true){
    setTimeout(function(){
        text = document.getElementById("t1").value;
        if(text != ""){
            console.log("True")
        }    
    }, 2000);
}