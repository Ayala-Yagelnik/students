import { Component } from '@angular/core';
import { Student } from '../../models/student';
import { StudentDetailsComponent } from '../student-details/student-details.component';
import { InfromationCardComponent } from "../infromation-card/infromation-card.component";
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [StudentDetailsComponent, InfromationCardComponent, NgTemplateOutlet],
  templateUrl: './students.component.html',
  styleUrl: './students.component.css'
})
export class StudentComponent {
  s!: Student;
  newStudent: boolean = false;
  deleteStudent: boolean = false;
  arrStudents: Student[] = [
    new Student(1, "Ayala", 15, "rabi akiva", true, new Date("12/09/2024")),
    new Student(2, "Bracha", 20, "chazon ish", false, new Date("12/09/2024")),
    new Student(3, "Batya", 25, "haadmor minedvorna", true, new Date()),
    new Student(4, "Gila", 28, "harav cahaneman", false, new Date(), false, true),
  ];
  student?: Student;
  delete(id: number, b: boolean) {
    if (b) {
      this.arrStudents = this.arrStudents.filter(s => s.id !== id);
    }
    this.deleteStudent = false;
  }
  EditStudent(student: Student) {
    student.flagEdit = true;
  }
  addStudent() {
    this.newStudent = true;
  }
  parentSaveStudent(s: any) {
    if (this.student?.id == s.id) {
      this.arrStudents = this.arrStudents.map(item => item.id === s.id ? s : item);
    }
    else {
      this.arrStudents.push(s);
    }
    this.student=undefined
  }
}


