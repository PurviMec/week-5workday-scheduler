
const presentDate = document.getElementById('#currentDay');

// show current date in header
let m = moment();
document.getElementById('currentDay').innerHTML = moment().format('dddd, MMMM Do');


//color coded past future and present time
var auditTask = function() {
    let m = moment();
    
    var colorField1 = function(){
        let inputField1 = document.getElementById("input-field");
       
        let timeBlock1 = document.getElementById("time-block").value;

        
         if (moment().isAfter(timeBlock1)){
            $(inputField1).addClass("past");
        }else if(inputField1 === timeBlock1){
            $(inputField1).addClass("present");
        }
        else{
            $(inputField1).addClass("future");
        }

    }
    
    colorField1();

    var colorField2 = function(){
        let inputField2 = document.getElementById("input-field2");
       
        let timeBlock2 = document.getElementById("time-block2").value;

        
         if (moment().isAfter(timeBlock2)){
            $(inputField2).addClass("past");
        }else if(inputField2 === timeBlock2){
            $(inputField2).addClass("present");
        }
        else{
            $(inputField2).addClass("future");
        }

    }
    colorField2();

    var colorField3 = function(){
        let inputField3 = document.getElementById("input-field3");
       
        let timeBlock3 = document.getElementById("time-block3").value;

        
         if (moment().isAfter(timeBlock3)){
            $(inputField3).addClass("past");
        }else if(inputField3 === timeBlock3){
            $(inputField3).addClass("present");
        }
        else{
            $(inputField3).addClass("future");
        }

    }
    colorField3();

    var colorField4 = function(){
        let inputField4 = document.getElementById("input-field4");
       
        let timeBlock4 = document.getElementById("time-block4").value;

        
         if (moment().isAfter(timeBlock4)){
            $(inputField4).addClass("past");
        }else if(inputField4 === timeBlock4){
            $(inputField4).addClass("present");
        }
        else{
            $(inputField4).addClass("future");
        }

    }

colorField4();

var colorField5 = function(){
    let inputField5 = document.getElementById("input-field5");
   
    let timeBlock5 = document.getElementById("time-block5").value;

    
     if (moment().isAfter(timeBlock5)){
        $(inputField5).addClass("past");
    }else if(inputField5 === timeBlock5){
        $(inputField5).addClass("present");
    }
    else{
        $(inputField5).addClass("future");
    }

}
colorField5();

var colorField6 = function(){
    let inputField6 = document.getElementById("input-field6");
   
    let timeBlock6 = document.getElementById("time-block6").value;

    
     if (moment().isAfter(timeBlock6)){
        $(inputField6).addClass("past");
    }else if(inputField6 === timeBlock6){
        $(inputField6).addClass("present");
    }
    else{
        $(inputField6).addClass("future");
    }

    }
    colorField6();

    var colorField7 = function(){
        let inputField7 = document.getElementById("input-field7");
       
        let timeBlock7 = document.getElementById("time-block7").value;

        
         if (moment().isAfter(timeBlock7)){
            $(inputField7).addClass("past");
        }else if(inputField7 === timeBlock7){
            $(inputField7).addClass("present");
        }
        else{
            $(inputField7).addClass("future");
        }

    }
    colorField7();

    var colorField8 = function(){
        let inputField8 = document.getElementById("input-field8");
       
        let timeBlock8 = document.getElementById("time-block8").value;

        
         if (moment().isAfter(timeBlock8)){
            $(inputField8).addClass("past");
        }else if(inputField8 === timeBlock8){
            $(inputField8).addClass("present");
        }
        else{
            $(inputField8).addClass("future");
        }

    }
    colorField8();

    
    var colorField9 = function(){
        let inputField9 = document.getElementById("input-field9");
       
        let timeBlock9= document.getElementById("time-block9").value;

        
         if (moment().isAfter(timeBlock9)){
            $(inputField9).addClass("past");
        }else if(inputField9=== timeBlock9){
            $(inputField9).addClass("present");
        }
        else{
            $(inputField9).addClass("future");
        }

    }
    colorField9();

    
};

auditTask();


//add list in event when typed
function saveBtn1(){
let save = document.getElementById('save-btn')
$(save).click(function(){
 saveData();  
    
});

//save list item in local storage and stays there even refreshed pag


var saveData= function(){

    document.getElementById('input-field').onkeyup = store;
    document.getElementById('input-field').onload = getValue();
    function store(){
        var toDo = document.getElementById('input-field').value;

        localStorage.setItem('toDo', JSON.stringify(toDo));
    }
    function getValue(){
        var getTask = JSON.parse( localStorage.getItem('toDo'))
        console.log(getTask);
    
    
    if ( getTask !== null){
        document.getElementById('input-field').value = getTask;
    }else {
        document.getElementById('input-field').value = 0;
    }

    }
}
saveData();
}
saveBtn1();

function saveBtn2(){
    let save = document.getElementById('save-btn2')
    $(save).click(function(){
     saveData2();  
        
    });
    
    //save list item in local storage and stays there even refreshed pag
    
    
    var saveData2 = function(){

        document.getElementById('input-field2').onkeyup = store2;
        document.getElementById('input-field2').onload = getValue2();
        function store2(){
            var toDo2 = document.getElementById('input-field2').value;
    
            localStorage.setItem('toDo2', JSON.stringify(toDo2));
        }
        function getValue2(){
            var getTask2 = JSON.parse( localStorage.getItem('toDo2'))
            console.log(getTask2);
        
        
        if ( getTask2 !== null){
            document.getElementById('input-field2').value = getTask2;
        }else {
            document.getElementById('input-field2').value = 0;
        }
    
        }
    }
saveData2();
}
saveBtn2();
    
function saveBtn3(){
    let save = document.getElementById('save-btn3')
    $(save).click(function(){
        saveData3();  
            
    });
        
        //save list item in local storage and stays there even refreshed pag
        
        
    var saveData3 = function(){

        document.getElementById('input-field3').onkeyup = store3;
        document.getElementById('input-field3').onload = getValue3();
        function store3(){
            var toDo3 = document.getElementById('input-field3').value;
        
            localStorage.setItem('toDo3', JSON.stringify(toDo3));
        }
        function getValue3(){
            var getTask3 = JSON.parse( localStorage.getItem('toDo3'))
            console.log(getTask3);
            
            
            if ( getTask3 !== null){
                document.getElementById('input-field3').value = getTask3;
            }else {
                document.getElementById('input-field3').value = 0;
            }
        
            }
    }
saveData3();
}
saveBtn3();

function saveBtn4(){
    let save = document.getElementById('save-btn4')
    $(save).click(function(){
        saveData4();  
                
    });
            
            //save list item in local storage and stays there even refreshed pag
            
            
    var saveData4 = function(){

        document.getElementById('input-field4').onkeyup = store4;
        document.getElementById('input-field4').onload = getValue4();
        function store4(){
            var toDo4 = document.getElementById('input-field4').value;
            
            localStorage.setItem('toDo4', JSON.stringify(toDo4));
        }
        function getValue4(){
            var getTask4 = JSON.parse( localStorage.getItem('toDo4'))
            console.log(getTask4);
                
                
            if ( getTask4 !== null){
                document.getElementById('input-field4').value = getTask4;
            }else {
                document.getElementById('input-field4').value = 0;
            }
            
        }
    }
saveData4();
}
saveBtn4();

function saveBtn5(){
    let save = document.getElementById('save-btn5')
    $(save).click(function(){
        saveData5();  
                    
    });
                
    //save list item in local storage and stays there even refreshed pag
                
                
    var saveData5 = function(){

        document.getElementById('input-field5').onkeyup = store5;
        document.getElementById('input-field5').onload = getValue5();
        function store5(){
            var toDo5 = document.getElementById('input-field5').value;
                
            localStorage.setItem('toDo5', JSON.stringify(toDo5));
        }
        function getValue5(){
            var getTask5 = JSON.parse( localStorage.getItem('toDo5'))
            console.log(getTask5);
                    
                    
            if ( getTask5 !== null){
                document.getElementById('input-field5').value = getTask5;
            }else {
                document.getElementById('input-field5').value = 0;
            }
                
        }
    }
saveData5();
}
saveBtn5();

function saveBtn6(){
    let save = document.getElementById('save-btn6')
    $(save).click(function(){
         saveData6();  
                        
    });
                    
    //save list item in local storage and stays there even refreshed pag
                    
                    
    var saveData6 = function(){

        document.getElementById('input-field6').onkeyup = store6;
        document.getElementById('input-field6').onload = getValue6();
        function store6(){
            var toDo6 = document.getElementById('input-field6').value;
                    
            localStorage.setItem('toDo6', JSON.stringify(toDo6));
        }
        function getValue6(){
            var getTask6 = JSON.parse( localStorage.getItem('toDo6'))
            console.log(getTask6);
                        
                        
            if ( getTask6 !== null){
                document.getElementById('input-field6').value = getTask6;
            }else {
                document.getElementById('input-field6').value = 0;
            }
                    
        }
    }
saveData6();
}
saveBtn6();

function saveBtn7(){
    let save = document.getElementById('save-btn7')
    $(save).click(function(){
        saveData7();  
                            
    });
                        
    //save list item in local storage and stays there even refreshed pag
                        
                        
    var saveData7 = function(){

        document.getElementById('input-field7').onkeyup = store7;
        document.getElementById('input-field7').onload = getValue7();
        function store7(){
            var toDo7 = document.getElementById('input-field7').value;
    
            localStorage.setItem('toDo7', JSON.stringify(toDo7));
        }
        function getValue7(){
            var getTask7 = JSON.parse( localStorage.getItem('toDo7'))
            console.log(getTask7);
        
        
        if ( getTask7 !== null){
            document.getElementById('input-field7').value = getTask7;
        }else {
            document.getElementById('input-field7').value = 0;
        }
    
        }
    }
saveData7();
}
saveBtn7();

function saveBtn8(){
    let save = document.getElementById('save-btn8')
    $(save).click(function(){
        saveData8();  
                                
    });
                            
    //save list item in local storage and stays there even refreshed pag
                            
                            
    var saveData8 = function(){

        document.getElementById('input-field8').onkeyup = store8;
        document.getElementById('input-field8').onload = getValue8();
        function store8(){
            var toDo8 = document.getElementById('input-field8').value;
    
            localStorage.setItem('toDo8', JSON.stringify(toDo8));
        }
        function getValue8(){
            var getTask8= JSON.parse( localStorage.getItem('toDo8'))
            console.log(getTask8);
        
        
        if ( getTask8 !== null){
            document.getElementById('input-field8').value = getTask8;
        }else {
            document.getElementById('input-field8').value = 0;
        }
    
        }
    }
saveData8();
}
saveBtn8();

function saveBtn9(){
    let save = document.getElementById('save-btn9')
    $(save).click(function(){
        saveData9();  
                                    
    });
                                
    //save list item in local storage and stays there even refreshed pag
                                
                                
    var saveData9 = function(){

        document.getElementById('input-field9').onkeyup = store9;
        document.getElementById('input-field9').onload = getValue9();
        function store9(){
            var toDo9 = document.getElementById('input-field9').value;
    
            localStorage.setItem('toDo9', JSON.stringify(toDo9));
        }
        function getValue9(){
            var getTask9 = JSON.parse( localStorage.getItem('toDo9'))
            console.log(getTask9);
        
        
        if ( getTask9 !== null){
            document.getElementById('input-field9').value = getTask9;
        }else {
            document.getElementById('input-field9').value = 0;
        }
    
        }
    }
saveData9();
}
saveBtn9();