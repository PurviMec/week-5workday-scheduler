

// show current date in header

let m = moment();
document.getElementById('currentDay').innerHTML = moment().format('dddd, MMMM Do');


//color coded past future and present time

//add list in event when typed
var tasks = function(){
    
}

//save list item in local storage and stays there even refreshed page
let input = document.getElementById('input-field');
let time = document.getElementById('time-block');
var saveTasks = function(){
    localStorage.setItem('input', 'time', JSON.stringify(input, time));
}
$("#save-btn").click(function(){
    saveTasks();
});