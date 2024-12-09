import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StudentComponent } from '../components/students/students.component';
import { TeachersComponent } from "../components/teachers/teachers.component";
import { EditStudentComponent } from "../components/edit-teacher/edit-teacher.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StudentComponent, TeachersComponent, EditStudentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ayali Yagelnik'
  hour = () => {
    const hour_now = new Date().getHours()
    if (hour_now < 13) {
      return "good morning"
    }
    else if (hour_now < 18) {
      return "good noon"
    }
    else {
      return "good night"
    }
  }
}
