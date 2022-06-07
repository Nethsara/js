let saveEl = document.getElementById("save-el")
let addEl = document.getElementById("count-element")

let count = 0

function count(){
    count +=1
    addEl.textcontent = count
    console.log(count)
}

function save(){
    let ss = count + " - "
    saveEl.textcontent += ss
    console.log(ss)
    count = 0
}