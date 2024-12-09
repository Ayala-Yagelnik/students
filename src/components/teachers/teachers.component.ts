import { Component } from '@angular/core';
import { Teacher } from '../../models/teacher';
import { TeachersService } from '../../services/teachers.service';
import { TeacherDetailsComponent } from "../teacher-details/teacher-details.component";

@Component({
  selector: 'app-teachers',
  standalone: true,
  imports: [TeacherDetailsComponent],
  templateUrl: './teachers.component.html',
  styleUrl: './teachers.component.css'
})
export class TeachersComponent {
  teachers : Teacher[];
  constructor(public teacherService : TeachersService){
    this.teachers = this.teacherService.getTeachers();
  }
}
