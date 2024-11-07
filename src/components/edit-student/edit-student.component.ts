import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-edit-student',
  standalone: true,
  imports: [],
  templateUrl: './edit-student.component.html',
  styleUrl: './edit-student.component.css'
})
export class EditStudentComponent {
  @Input() id!: number;
  @Input() firstName!: string;
  @Input() age!: number;
  @Input() adress!: string;
  @Input() isActive!: boolean;
  @Input() dateEnd!: string;
  @Output() childSaveUser: EventEmitter<any> = new EventEmitter<any>();

  SaveStudent() {
    //שמירה באבא
    let student = { firstName: this.firstName, id: this.id, age: this.age ,adress:this.adress}  
    this.childSaveUser.emit(student);
  }
}
