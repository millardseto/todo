window.onload = function(){
  function addTask(){
    // block the default behavior
    event.preventDefault();

    // get form values
    var form = document.forms[0];
    //var task = document.getElementById('task').value;
    var task = form["task"].value;
    var assignTo = form["assignTo"].value;
    var level = form["level"].value;

    // add new item to tasks
    tasks.push({task:task, assignTo:assignTo, level:level});

    // update list
    showList();
  }

  function showList(){
    // clear existing content
    var ul = document.querySelector('ul');
    ul.innerText = "";

    // go through each task
    for(var i=0; i<tasks.length; i++) {
      // create list item and text
      var li = document.createElement("li");
      li.innerText = tasks[i].task;


      // add the list item to the list
      ul.appendChild(li);
    }
  }

  // global container for tasks
  tasks = [];

  // submit button
  var form = document.forms[0];
  form.addEventListener("submit", addTask);


}