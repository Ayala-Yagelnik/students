import { Component, ElementRef, ViewChild } from '@angular/core';
import { Student } from './student';


@Component({
  selector: 'app-student',
  standalone: true,
  imports: [],
  templateUrl: './students/students.component.html',
  styleUrl: './students/students.component.css'
})
export class StudentComponent {
getSelectedCourse() {
throw new Error('Method not implemented.');
}
  arrStudents: Student[] = [
    new Student(1, "Rachel", 15,"", false, new Date("12/09/2024"),true),
    new Student(2, "Lea", 20,"", false, new Date("01/01/2024"),false),
    new Student(3, "shula", 30, "",true, new Date(),true),
    new Student(5, "Jenny", 18, "",true, new Date(),true),
    new Student(7, "Emily", 22, "", false, new Date("01/01/2025"),false),
  ];
  flagStudent?: Student;
  deleteSelect:Boolean = false;
  St!: Student;

  deleteStudent(id: number,d:Boolean) {
    if(d==true)
    this.arrStudents = this.arrStudents.filter(s => s.id !== id);
    this.deleteSelect=false;

  }
  deleteSelectFunc(s:Student){
    this.deleteSelect=true;
    this.St=s
  }
  
  editStudent(s: Student) {
    this.flagStudent = s;
  }
  parentSave(s: Student) {
    if (this.flagStudent?.id == s.id) {
      this.arrStudents = this.arrStudents.map(item => item.id === s.id ? s : item);
    }
    else {
      this.arrStudents.push(s);
    }
    this.flagStudent = undefined;
  }
  addStudent() {
    this.flagStudent = new Student(0, "", 0,"", true, new Date(),true)
  }


 
  
}