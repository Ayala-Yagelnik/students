import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/student';
import { Teacher } from '../../models/teacher';
import { TeachersService } from '../../services/teachers.service';

@Component({
  selector: 'app-edit-teacher',
  standalone: true,
  imports: [],
  templateUrl: './edit-teacher.component.html',
  styleUrl: './edit-teacher.component.css'
})
export class EditStudentComponent {

  @Input() classes: number[]
  teacherService: TeachersService;
  teacher: Teacher = new Teacher('', [])
  SaveStudentDetails = (name: string) => {
    this.teacher.name = name;
    this.teacherService.addTeacher(this.teacher);
  }

  handleChange = (className: string, status: boolean) => {
    console.log(className);

    if (status)
      this.teacher.classes.push(Number(className));
    else
      this.teacher.classes = this.teacher.classes.filter(c => c != Number(className))
  }


}
