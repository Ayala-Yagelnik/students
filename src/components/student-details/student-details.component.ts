import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  @Input() id!: number;
  @Input() firstName!: string;
  @Input() age!: number;
  @Input() adress!: string;
  @Input() isActive!: boolean;
  @Input() dateEnd!: string;
  @Output() onSaveStudent: EventEmitter<any> = new EventEmitter<any>();

  SaveStudent() {
    //שמירה באבא
    let student = { firstName: this.firstName, id: this.id, age: this.age ,adress:this.adress}  
    console.log(student); 
    this.onSaveStudent.emit(student);
  }
}
