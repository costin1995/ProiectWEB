import { Component } from '@angular/core';
import { Student } from '../Models/student';
import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent {

  constructor(private studentService: StudentService){}

  text:string = "Text aus der Variabile";
  showSecondRow:boolean = false;
  my_list: string[] = ['DynamicItem1', 'DynamicItem2', 'DynamicItem3', 'DynamicItem4', 'DynamicItem5']
  inputValue: string = '';
  studentsFromDB: Student[] = [];
  newStudentName: string = '';
  newStudentAlter: number = 0;

  changeText():void{
    this.text = "Ich habe mit Click die Variable verandert";
  }

  showMoreButtons(){
    this.showSecondRow = true;
  }

  showLessButtons(){
    this.showSecondRow = false;
  }
  
  getStudents(){
    this.studentService.getStudents().subscribe(result=>
      {
        this.studentsFromDB = result;
      });
  }
  addStudent(){
    let newStudent = {Name: this.newStudentName, Alter: this.newStudentAlter};
    this.studentService.addStudent(newStudent);
  }

}
