import { Component, OnInit } from '@angular/core';
import { TaskApiService, TaskModel } from '../services/task-api.service';
import {Router} from '@angular/router';

declare var $: any;
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: TaskModel[] = [];
  newTask = new TaskModel();
  constructor(private taskThang: TaskApiService, private routerThang: Router) { }

  ngOnInit() {

    this.taskThang.getTasks()
    .then((taskResults: TaskModel[])=>{
      this.tasks = taskResults;
    })
    .catch((err)=>{
      alert('sorry something went to shit');
      console.log(err);
    });



    // Fire off toast
    //Materialize.toast('Hello World', 3000);
    $('ul.tabs').tabs();

    // Init Slider
    $('.slider').slider({

    indicators: true
  });

    // Init Modal
    $('.modal').modal();

    // Init Sidenav
    $('.button-collapse').sideNav();
  }
TaskAjax(){
  this.taskThang.addTask(this.newTask).then(()=>{
    this.tasks.push(this.newTask);
  })
  .catch((err) => {
      alert('Sorry! Something went wrong.');
      console.log('Sign up error');
      console.log(err);
  });
}
startDeleteAjax(oneTask) {
    if (!confirm('Are you sure?')) {
        return;
    }
    console.log("the task id is: "+ oneTask)
    this.taskThang.deleteTask(oneTask)
      .then(() => {
          // redirect with the Angular router to list of phones

          console.log(this.tasks)

          //let longWords = words.filter(word => word.length > 6);


          this.routerThang.navigate(['/tasks']);
      })
      .catch((err) =>{
          alert("Sorry! Something went wrong.");
          console.log("Task Delete Error");
          console.log(err);
      });
} // startDeleteAjax()


}
