import { Component } from '@angular/core';
import { Course } from '../../models/course';
import { Subject } from '../../models/subjectEnum';
 

@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  courses: Course[] = [
    { IdCourse: 1, NameCourse: 'קורס חשבונאות', Subject: Subject.Accounting },
    { IdCourse: 2, NameCourse: 'קורס הנדסת תוכנה', Subject: Subject.SoftwareEngineering },
    { IdCourse: 3, NameCourse: 'קורס גרפיקה', Subject: Subject.Graphics }
  ];
}
