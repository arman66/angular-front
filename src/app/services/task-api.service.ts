import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/toPromise';

import { environment } from '../../environments/environment';

export class TaskModel{

  name: string;
  _id: string;
  createdAt:string;
  updatedAt: string;

}

@Injectable()
export class TaskApiService {

  constructor(private httpThang: HttpClient) { }

  getTasks(){
    return this.httpThang.get(`${environment.backendUrl}/api/tasks`,
      {withCredentials: true}

    ).toPromise();
  }


  addTask(newTask: TaskModel) {

    return this.httpThang.post(
        `${environment.backendUrl}/api/tasks`,
        newTask,
        {withCredentials: true}

      )
      .toPromise();
  }

  deleteTask(oneId: string){
    console.log('this is the delete task log');
    console.log(oneId);
    return this.httpThang.delete(
        `${environment.backendUrl}/api/tasks/${oneId}`,

        // send the cookies even to a different domain
        { withCredentials: true }
      ).toPromise();
  }


}
