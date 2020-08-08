function getAlert(){
    alert("Welcome to Document Object Manupulation (DOM)");
}

function displayPrompt(){
    val = prompt("Please Enter the Prompt Message");
    alert("Prompt Message : "+val);
}

function displayAlert(){
    alert("Alert Session Display");
}

function displayConfirm()
{
    var con = confirm("Are you Sure !");
    alert(con);
}

function showTimeout()
{
    setTimeout(function(){alert("Alert Box Display after 2 second");},2000);
    
}
function showTimeInterval()
{
    setInterval(function displayDateTime()
    {
        var date = new Date();
        document.getElementById("dateTime").innerHTML = "Today Date : " + date.toLocaleTimeString();
    },1000);
     
}
function showInnerTxt(){
    alert(document.getElementById('innerTxt').innerText);
}
function showInnerHTML() {
    alert(document.getElementById("innerHtm").innerHTML)
}

function appendList(){
    var list = document.createElement('li');
    var para = document.createElement('p');
    para.innerText = "Bootstrap";
    list.append(para);
    document.getElementById('language').append(list);
}

function appendChildList() {
    var list = document.createElement('li');
    var para = document.createElement('p');
    para.innerText = "Tester";
    list.append(para);
    document.getElementById('role').append(list);
}

function getQuerySelector(params) {
    var p = document.createElement('p');
    var d = document.querySelector(".heading");
    document.getElementById('displayDev').appendChild(d);
}
function getQuerySelectorAll(params) {
    var p = document.createElement('p');
    var d = document.querySelector(".timeout");
    document.getElementById('displayAll').appendChild(d);
}

function eventListner(params) {
    var btn = document.createElement('button');
    document.getElementById('clickBtn').disabled = true;
    btn.innerHTML = "<br>"; 
    btn.innerText = "Click here for Event List.";
    var p = document.createElement('p');
    p.innerText = "Above Button Disabled";
    document.getElementById('showBtn').appendChild(p);
    btn.addEventListener("click",function() {
        
        alert("Listner Clicked");
    })
    document.getElementById('showBtn').appendChild(btn);
}