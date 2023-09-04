let tasks = [];
function show() {
  document.getElementById("tasks").innerHTML = tasks
    .map(
      (task) =>
        `<div style='width: 750px; margin: 5px auto; font-size: 20px; border: 2mm ridge rgba(64, 2, 145, 0.6);'>
          <a id='a_title' href='javascript:EditTitle("${task.title}")'> ${task.title} </a> : <a id='a_description' href='javascript:EditDescription("${task.description}")'> ${task.description} </a>
          <button onclick='Rem("${task.title}")' >X</button>
      </div>
    `
    )
    .join("");
}
function Add() {
  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  if (title==="" || description==="") {
    return alert("Input fields can't be empty")
  }
  document.getElementById("title").value = "";
  document.getElementById("description").value = "";

  tasks.push({ title: title, description: description });
  show();
}

function Rem(a) {
  const rem_index = tasks.findIndex((item) => {
    return item.title === a;
  });
  tasks.splice(rem_index, 1);
  show();
}

function EditTitle(oldTitle) {
  const edit_index = tasks.findIndex((item) => {
    return item.title === oldTitle;
  });
  const newTitle = prompt("Edit Title", oldTitle);
  if (newTitle===null || newTitle==="") {
    return;
  }
  tasks[edit_index].title = newTitle;
  show();
}

function EditDescription(oldDescrption) {
  const edit_index = tasks.findIndex((item) => {
    return item.description === oldDescrption;
  });
  const newDescription = prompt("Edit Description", oldDescrption);
  if (newDescription===null || newDescription===""){
    return;
  }
  tasks[edit_index].description = newDescription;
  show();
}
