(()=>{"use strict";class t{constructor(t,s,e){this.title=t,this.date=s,this.notes=e,this.isImportant=!1,this.completed=!1}getTitle(){return this.title}setTitle(t){this.title=t}getDate(){return this.date}setDate(t){this.date=t}getNotes(){return this.notes}setNotes(t){this.notes=t}getImportantStatus(){return this.isImportant}changeImportantStatus(){this.isImportant?this.isImportant=!1:this.isImportant=!0}getCompleteStatus(){return this.completed}changeCompleteStatus(){this.completed?this.completed=!1:this.completed=!0}}let s=new class{constructor(t){this.title=t,this.tasks=[]}getTitle(){return this.title}setTitle(t){this.title=t}getTasks(){return this.tasks}addTask(s,e,i){let a=new t(s,e,i);this.tasks.push(a)}}("title1");s.addTask("title1","date","notes"),console.log(s.getTasks()),s.getTasks()[0].changeCompleteStatus(),console.log(s.getTasks()),console.log("hi")})();