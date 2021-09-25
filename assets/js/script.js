const inputEl = document.getElementById('input-field');
const timeEl = document.getElementById('time-block');
const presentDate = document.getElementById('currentDay');

// show current date in header
let m = moment();
document.getElementById('currentDay').innerHTML = moment().format('dddd, MMMM Do');


//color coded past future and present time
var currentHour = moment().format('H A');
console.log(currentHour);


    

//add list in event when typed



//save list item in local storage and stays there even refreshed page
$("#save-btn").click(function(){
   
    saveTasks();
});

var saveTasks = function(){
    localStorage.setItem('To Do', JSON.stringify($('input-field')));
}


localStorage.getItem($("input-field"));