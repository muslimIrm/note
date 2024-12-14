let notesDate = [
    {
        "title": "muslim",
        "description": "My tasks today. I should kill some one in this world.",
        "date": "2024/12/9",
        "smallTitle": "",
    },
    {
        "title": "MY today",
        "smallTitle": "",
        "description": "My tasks today. I should kill some one in this world.",
        "date": "2024/12/9"
    },
];

let checkData = false;

function importDataFromLocalStorage() {
    let data = JSON.parse(localStorage.getItem("note"));
    notesDate = data ?? [];
    updateCheckData();
}

function updateCheckData() {
    checkData = notesDate.length === 0;
    checkButtonFocus();
}

function checkButtonFocus() {
    if (checkData) {
        document.getElementById("message").style.opacity = 1;
        document.getElementById("message").style.left = "0";
    } else {
        document.getElementById("message").style.opacity = 0;
        document.getElementById("message").style.left = "100vw";
    }
}

function fillData() {
    let index = 0;
    document.getElementById("notes").innerHTML = "";
    for (let note of notesDate) {
        let notesStyleHtml = `
        <div class="note" onclick="noteClickToGoNotePage(${index})">
            <div class="noteI">
                <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid #afafaf; margin:0; padding:0;">
                    <h2>${note.smallTitle}</h2>
                    <i title="delete" style="cursor: pointer;" class="fas fa-trash" onclick="deleteButton(${index}, event)"></i>
                </div>
                <h3>${note.description}</h3>
            </div>
            <div class="noteD">
                <h4>${note.date}</h4>
            </div>
        </div>
        `;

        document.getElementById("notes").innerHTML += notesStyleHtml;
        index++;
    }
}

function addButtonFunction() {
    let inputValue = document.getElementById("input").value;
    let date = new Date();
    date = date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear();
    let info = "";
    let smallTitle = inputValue.length > 7 ? inputValue.substring(0, 7) + "..." : inputValue;
    let dataObjet = {
        "title": inputValue,
        "smallTitle": smallTitle,
        "description": ".....",
        "date": date,
        "info": info
    };
    notesDate.push(dataObjet);
    fillData();
    localStorage.setItem("note", JSON.stringify(notesDate));
    updateCheckData();
}

function smallButtonToFocus() {
    document.getElementById("input").focus();
}

function noteClickToGoNotePage(index) {
    localStorage.setItem("index", index);
    window.location.href = "writenote.html";
}

function deleteButton(index, event) {
    event.stopPropagation();
    notesDate.splice(index, 1);
    localStorage.setItem("note", JSON.stringify(notesDate));
    updateCheckData();
    fillData();
}

document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "visible") {
        importDataFromLocalStorage();
        fillData();
    }
});

// استدعاء الوظائف
importDataFromLocalStorage();
fillData();
