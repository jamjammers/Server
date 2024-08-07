
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

//SQL interactions
function cvtToColor(integer){
    if(typeof integer == "number"){
        let str = integer.toString(2);
        while(str.length<32){
            str = "0"+str
        }
        let newStr = ""
        for(let i = 0;i<4;i++){
            let concat = parseInt(str.slice(i*8,i*8+8), 2).toString()
            while(concat.length<3){
                concat = "0"+concat;
            }
            newStr += concat
        }
        return newStr;
    }else{
        return -1
        
    }
}



var size = 32
//set-up
for(let i = 0;i<size;i++){
    let tr = document.createElement("tr");
    tr.setAttribute("draggable", "false")
    tb.appendChild(tr);
    for(let j = 0;j<size;j++){
        let ti = document.createElement("td");
        ti.setAttribute("class", "td1");
        ti.setAttribute("onmousedown", "changeColor("+i+", "+j+", event)")
        ti.setAttribute("onmouseenter", "changeColorEnter("+i+", "+j+")")
        ti.setAttribute("draggable", "false")
        tr.appendChild(ti);
    }
    // bod.appendChild(document.createElement("br"));
}