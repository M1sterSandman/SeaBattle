
let tr_ship_1_check = false;
let tr_ship_2_check = false;
let tr_ship_1_arr = [];
let tr_ship_2_arr = [];

function fun(el) {
    if (tr_ship_1_check === true){
        
        tr_ship_1_arr.push(el);
        if (tr_ship_1_arr.length>2){
            document.getElementById('status').innerText = 'ship was set';
            tr_ship_1_check = false;
            document.getElementById('tr_ship_1').disabled = true;
        }
        if (tr_ship_1_arr.length===3) {
            set_ship1();
        }
    }

    if (tr_ship_2_check === true){
        tr_ship_2_arr.push(el);
        if (tr_ship_2_arr.length>2){
            document.getElementById('status').innerText = 'ship was set';
            tr_ship_2_check = false;
            document.getElementById('tr_ship_2').disabled = true;
        }
        if (tr_ship_2_arr.length===3){
            set_ship2();
        }
    }
}

function tr_ship_1() {
    tr_ship_1_check = true;
    document.getElementById('status').innerText = 'chose 3 cell';
}
function tr_ship_2() {
    tr_ship_2_check = true;
    document.getElementById('status').innerText = 'chose 3 cell';
}

function set_ship1() {
    tr_ship_1_arr.forEach((el)=>{
        document.getElementById(el).style.backgroundColor='black';
    });
    checkArraysBeforeStart();
}
function set_ship2() {
    tr_ship_2_arr.forEach((el)=>{
        document.getElementById(el).style.backgroundColor='black';
    });
    checkArraysBeforeStart();
}

function checkArraysBeforeStart() {
    if (tr_ship_1_arr.length===3 && tr_ship_2_arr.length===3){
        document.getElementById('start_game').disabled = false;
    }
}
function startGame() {
    document.getElementById('field2').style.display = 'block';
}


function battle(el) {
    if(tr_ship_1_arr.indexOf(el.slice(0,7)+'_1') >= 0){
        document.getElementById(el).style.backgroundColor='red';
    }
    else if(tr_ship_2_arr.indexOf(el.slice(0,7)+'_1') >= 0){
        document.getElementById(el).style.backgroundColor='red';
    }
    else{
        document.getElementById(el).style.backgroundColor='gray';
    }
    
}
