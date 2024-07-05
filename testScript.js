
document.addEventListener('contextmenu', event => event.preventDefault());

var LMB = false;
var RMB = false;


const tb = document.getElementById("colorSpace");

//interact with cells
function changeColor(i,j, event){
    let target = tb.children[i].children[j];
    if(event.button ==0){
        target.className =  "td0";
    }else if(event.button == 2){
        target.className =  "td1";
    }
}
function changeColorEnter(i,j){
    let target = tb.children[i].children[j];
    if(LMB){
        target.className =  "td0";
    }else if(RMB){
        target.className = "td1";
    }
}
//reset entire board
function reset(){
    let iLen = tb.children.length;
    for(let i = 0;i<iLen;i++){
        let jLen = tb.children[i].children.length;
        for(let j = 0;j<jLen;j++){
            tb.children[i].children[j].className = "td1"
        }
    }
}

//when user interacts with entire screen
function showCoords(event) {
    let x = event.clientX;
    let y = event.clientY;
    let text = "X coords: " + x + ", Y coords: " + y;
    document.getElementById("demo").innerHTML = text;
}

function updateDownState(event, value){
    console.log(event.button);
    console.log(event)
    if(event.button == 0){
        LMB=value;
    }else if(event.button == 2){
        RMB=value;
    }
}

//set-up
for(let i = 0;i<17;i++){
    let tr = document.createElement("tr");
    tr.setAttribute("draggable", "false")
    tb.appendChild(tr);
    for(let j = 0;j<17;j++){
        let ti = document.createElement("td");
        ti.setAttribute("class", "td1");
        ti.setAttribute("onmousedown", "changeColor("+i+", "+j+", event)")
        ti.setAttribute("onmouseenter", "changeColorEnter("+i+", "+j+")")
        ti.setAttribute("draggable", "false")
        tr.appendChild(ti);
    }
    // bod.appendChild(document.createElement("br"));
}