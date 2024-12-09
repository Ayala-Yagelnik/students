import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../models/student';

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

  SaveStudent(id: number, firstName: string,  age: number,adress:string,isActive: boolean) {
    //שמירה באבא
    let student :Student=new Student(id,firstName, age ,adress,isActive,new Date(),false,true)  ;
     
    this.onSaveStudent.emit(student);
  }
}
