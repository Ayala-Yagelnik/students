import { Component, Input, Output,EventEmitter } from '@angular/core';
import { InfromationCardComponent } from "../infromation-card/infromation-card.component";
import { Teacher } from '../../models/teacher';

@Component({
  selector: 'app-teacher-details',
  standalone: true,
  imports: [],
  templateUrl: './teacher-details.component.html',
  styleUrl: './teacher-details.component.css'
})
export class TeacherDetailsComponent {
  @Input() teacher: Teacher;

  @Output() deleteEmit: EventEmitter<any> = new EventEmitter<any>();

  deleteTeacher = () => {
    this.deleteEmit.emit(this.teacher.id);
  }
}
