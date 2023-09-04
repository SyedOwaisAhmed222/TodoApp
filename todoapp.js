const tasks = [];
function show(){
    document.getElementById("tasks").innerHTML = tasks.map(
        (task) =>
          `<div style='width: 750px; margin: 5px auto; font-size: 20px; border: 2mm ridge rgba(64, 2, 145, 0.6);'>
          ${task.title}: ${task.description}
          <button onclick='Rem("${task.title}")' >X</button>
      </div>
    `
      ).join("");

}
function Add() {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  document.getElementById('title').value = '';
  document.getElementById('description').value = '';

  tasks.push({ title: title, description: description });
  show();
}

function Rem(a) {
  let rem_index= tasks.findIndex((item) => {
    return item.title === a;
  });
  tasks.splice(rem_index,1);
  show();
}


