let notesData = JSON.parse(localStorage.getItem("note"))
let index = localStorage.getItem("index")
let noteData= notesData[index]

const titleInput = document.getElementById("title")

document.getElementById("date").innerHTML = noteData.date
const infoInput = document.getElementById("info")

titleInput.value = noteData.title
infoInput.value = noteData.info

titleInput.addEventListener("input", (even)=> {
    if (infoInput.value.length > 7) {
        noteData.smallTitle = titleInput.value.substring(0, 7) + "...";
        
    }
    else{
        noteData.smallTitle = titleInput.value
        
    }
    noteData.title = titleInput.value
    let ToStringObject = JSON.stringify(notesData)
    localStorage.setItem("note", ToStringObject)
})

infoInput.addEventListener("input", (even)=> {
    noteData.info = infoInput.value
    let ToStringObject = JSON.stringify(notesData)
    localStorage.setItem("note", ToStringObject)
    if (infoInput.value.length > 70) {
        noteData.description = infoInput.value.substring(0, 80) + "...";
        let ToStringObject = JSON.stringify(notesData)
        localStorage.setItem("note", ToStringObject)
    }
    else{
        noteData.description = infoInput.value
        let ToStringObject = JSON.stringify(notesData)
        localStorage.setItem("note", ToStringObject)
    }
})




function GoBackButton(){
    let ToStringObject = JSON.stringify(notesData)
    localStorage.setItem("note", ToStringObject)
    console.log(localStorage.getItem("note"))
    window.location.href = 'index.html'
}