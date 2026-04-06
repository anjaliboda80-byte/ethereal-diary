function saveEntry() {
    let title = document.getElementById("title").value;
    let text = document.getElementById("entry").value;

    if (title === "" || text === "") {
        alert("Please fill all fields");
        return;
    }

    let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];

    let newEntry = {
        title: title,
        text: text,
        time: new Date().toLocaleString()
    };

    entries.push(newEntry);

    localStorage.setItem("diaryEntries", JSON.stringify(entries));

    displayEntries();

    document.getElementById("title").value = "";
    document.getElementById("entry").value = "";
}

function displayEntries() {
    let entries = JSON.parse(localStorage.getItem("diaryEntries")) || [];
    let container = document.getElementById("entries");

    container.innerHTML = "";

    entries.forEach((e, index) => {
        container.innerHTML += `
            <div style="border:1px solid #ccc; padding:10px; margin:10px;">
                <h3>${e.title}</h3>
                <p>${e.text}</p>
                <small>${e.time}</small><br>
                <button onclick="deleteEntry(${index})">Delete</button>
            </div>
        `;
    });
}

function deleteEntry(index) {
    let entries = JSON.parse(localStorage.getItem("diaryEntries"));
    entries.splice(index, 1);
    localStorage.setItem("diaryEntries", JSON.stringify(entries));
    displayEntries();
}

function clearEntry() {
    document.getElementById("title").value = "";
    document.getElementById("entry").value = "";
}

window.onload = displayEntries;