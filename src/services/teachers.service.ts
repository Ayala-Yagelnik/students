import { Injectable } from '@angular/core';
import { Teacher } from '../models/teacher';

@Injectable({
  providedIn: 'root'
})
export class TeachersService {
  constructor() {

   }
  private teachers = [
    new Teacher("Rachel", [1, 2]),
    new Teacher("Sara", [2]),
    new Teacher("Rivka", [3, 4])
  ];


  getTeachers = () => this.teachers;

  addTeacher = (t: Teacher) => {

    this.teachers.push(t);
  }

  deleteTeacher = (id:number) => {
    this.teachers= this.teachers.filter(x=>x.id!=id);
  }

  updateTeacher = (t: Teacher) => {
    let t1 = this.teachers.find(x => x.id == t.id);
    if (t1 != null) {
      t1.name = t.name;
      t1.classes = t.classes;
    }
  }
}




/*///


import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  private users = [
    new User(1, 'Alice'),
    new User(2, 'Bob')
  ];

  getUsers() {
    return this.users;
    //return this.http.get<User[]>(this.apiUrl);
  }

  getUserById(id: number) {
    return this.users.find(user => user.id === id);
  }

}
//*/
