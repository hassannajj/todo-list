import {Project} from "./Project.js";
import {Task} from "./Task.js";

let project = new Project("title1");

project.addTask("title1", "date", "notes");
console.log(project.getTasks());
project.getTasks()[0].changeCompleteStatus();
console.log(project.getTasks());
console.log("hi");

function openNav() {
    document.getElementById("nav").style.width = "250px";
}
