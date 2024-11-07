import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { EditStudentComponent } from '../edit-student/edit-student.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [EditStudentComponent],
  templateUrl:'./students.component.html',
  styleUrl: './students.component.css'  
})
export class StudentComponent {
  newStudent: boolean=false;
  arrStudents: Student[] = [
    new Student(1, "Ayala", 15,"rabi akiva",true,"15,12,2000"),
    new Student(2, "Bracha", 20,"chazon ish",true,"15,12,2000"),
    new Student(3, "Batya", 25,"haadmor minedvorna",true,"15,12,2000"),
    new Student(4, "Gila", 28,"harav cahaneman",false,"15,12,2000"),
  ];
student: any;
  delete(id:number){
    this.arrStudents[id].isActive = false;
    this.arrStudents[id].dateEnd =(new Date()).toString();
    this.arrStudents = this.arrStudents.filter(s => s.id!== id);
  }
  EditStudent(student:Student){
    student.flagEdit = true;
  }
  addStudent(){
    this.newStudent = true;
  }
  parentSaveStudent(student : any){
    console.log(student);
  }
}
 

