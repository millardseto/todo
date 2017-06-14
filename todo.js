window.onload = function(){
  function addTask(){
    event.preventDefault();
    var form = document.forms[0];
    //var task = document.getElementById('task').value;
    var task = form["task"].value;
    var assignTo = form["assignTo"].value;
    var level = form["level"].value;

    tasks.push({task:task, assignTo:assignTo, level:level});

  }

  // global container for tasks
  tasks = [];

  // submit button
  var form = document.forms[0];
  form.addEventListener("submit", addTask);


}
