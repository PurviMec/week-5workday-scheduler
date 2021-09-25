const inputEl = document.querySelectorAll('#input-field');
const timeEl = document.querySelectorAll('#time-block');
const presentDate = document.getElementById('#currentDay');

// show current date in header
let m = moment();
document.getElementById('currentDay').innerHTML = moment().format('dddd, MMMM Do');


//color coded past future and present time
var auditTask = function() {
    let m = moment();
    var localTime = moment().format('hA');
    console.log(localTime);

    var colorField1 = function(){
        let inputField1 = document.getElementsByClassName("input1").value;
    
        let timeBlock1 = document.getElementsByClassName("time1").value;

        if (moment(localTime, 'hA').isAfter(timeBlock1, 'hA')){
            $(inputField1).addClass("past");
        }else if (moment(localTime, 'hA').isBefore(timeBlock1, 'hA')){
            $(inputField1).addClass("future");
        }else{
            $(inputField1).addClass("present");
        }
        
    }
    
    colorField1();

    var colorField2 = function(){
        let inputField2 = document.getElementsByClassName("input2")
    
        let timeBlock2 = document.getElementsByClassName("time2")

        if (localTime === timeBlock2){
            $(inputField2).addClass("present");
        }else if (timeBlock2 > localTime){
            $(inputField2).addClass("future");
        }else{
            $(inputField2).addClass("past");
        }
    }
    colorField2();

    var colorField3 = function(){
        let inputField3 = document.getElementsByClassName("input3")
    
        let timeBlock3 = document.getElementsByClassName("time3")

        if (localTime === timeBlock3){
            $(inputField3).addClass("present");
        }else if (timeBlock3 > localTime){
            $(inputField3).addClass("future");
        }else{
            $(inputField3).addClass("past");
        }
    }
    colorField3();

    var colorField4 = function(){
        let inputField4 = document.getElementsByClassName("input4")
    
        let timeBlock4 = document.getElementsByClassName("time4")

        if (localTime === timeBlock4){
            $(inputField4).addClass("present");
        }else if (timeBlock4 >localTime){
            $(inputField4).addClass("future");
        }else{
            $(inputField4).addClass("past");
        }
    }
    colorField4();

    var colorField5 = function(){
        let inputField5 = document.getElementsByClassName("input5")
    
        let timeBlock5 = document.getElementsByClassName("time5")

        if (localTime === timeBlock5){
            $(inputField5).addClass("present");
        }else if (timeBlock5 >localTime){
            $(inputField5).addClass("future");
        }else{
            $(inputField5).addClass("past");
        }
    }
    colorField5();

    var colorField6 = function(){
        let inputField6 = document.getElementsByClassName("input6")
    
        let timeBlock6 = document.getElementsByClassName("time6")

        if (localTime === timeBlock6){
            $(inputField6).addClass("present");
        }else if (timeBlock6 >localTime){
            $(inputField6).addClass("future");
        }else{
            $(inputField6).addClass("past");
        }
    }
    colorField6();

    var colorField7 = function(){
        let inputField7 = document.getElementsByClassName("input7")
    
        let timeBlock7 = document.getElementsByClassName("time7")

        if (localTime === timeBlock7){
            $(inputField7).addClass("present");
        }else if (timeBlock7 >localTime){
            $(inputField7).addClass("future");
        }else{
            $(inputField7).addClass("past");
        }
    }
    colorField7();

    var colorField8 = function(){
        let inputField8 = document.getElementsByClassName("input8")
    
        let timeBlock8 = document.getElementsByClassName("time8")

        if (localTime === timeBlock8){
            $(inputField8).addClass("present");
        }else if (timeBlock8 >localTime){
            $(inputField8).addClass("future");
        }else{
            $(inputField8).addClass("past");
        }
    }
    colorField8();

    var colorField9 = function(){
        let inputField9 = document.getElementsByClassName("input9")
    
        let timeBlock9 = document.getElementsByClassName("time9")

        if (localTime === timeBlock9){
            $(inputField9).addClass("present");
        }else if (timeBlock9 >localTime){
            $(inputField9).addClass("future");
        }else{
            $(inputField9).addClass("past");
        }
    }
    colorField9();
  };

auditTask();


//add list in event when typed
let save = document.querySelectorAll('#save-btn')
$(save).click(function(){
   
    saveTasks();
});
$(inputEl).submit(function(){
loadAjax();

});

//save list item in local storage and stays there even refreshed page
var saveTasks = function(){
    var toDo = {inputEl};

 localStorage.setItem('toDo', JSON.stringify(toDo));

var retriveTasks = localStorage.getItem('toDo');


console.log('retriveTasks:', JSON.parse(retriveTasks));
}