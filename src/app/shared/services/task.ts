import { Injectable,signal,computed } from '@angular/core';
import {Task} from "../models/task"
@Injectable({
  providedIn: 'root',
})
export class TaskService  {

  tasks=signal<Task[]>([]);

totalTasks=computed(()=>this.tasks().length)
completedTasks=computed(()=>this.tasks().filter(task=>task.completed).length)
pendingTasks=computed(()=>this.tasks().filter(task=>!task.completed).length)

constructor(){
  const savedTasks=localStorage.getItem("tasks");
  if(savedTasks){
    this.tasks.set(JSON.parse(savedTasks))
  }
}
completeTask(passid: number): void {

  this.tasks.update(currentTasks =>
    currentTasks.map(task =>
      task.id === passid
        ? {
            ...task,
            completed: !task.completed,
            completedAt: !task.completed
              ? new Date().toISOString()
              : null
          }
        : task
    )
  );

  localStorage.setItem(
    'tasks',
    JSON.stringify(this.tasks())
  );
}


addNewTask(task:Task):void{
  this.tasks.update(currentTasks=>[...currentTasks,task]);
  // this.totalTasks.update(count=>count+1);
  // this.pendingTasks.update(count=>count+1);

  localStorage.setItem("tasks",JSON.stringify(this.tasks()))
}


}
