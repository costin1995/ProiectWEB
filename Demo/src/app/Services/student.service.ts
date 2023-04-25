import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Student } from '../Models/student';
import {addDoc, collection, collectionData, Firestore} 
                        from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private fs: Firestore) { }

  getStudents():Observable<Student[]>{
    console.log(this.fs);
    const myCollection: any = collection(this.fs, 'students');
    return collectionData(myCollection);
  }

  addStudent(student:Student){
    const myCollection = collection(this.fs, 'students')
    addDoc(myCollection, student);
  }
}
