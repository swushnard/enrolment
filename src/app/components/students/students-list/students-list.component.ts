import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Student } from '../../../models/student';
import { StudentCrudService } from '../../../services/student-crud.service';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.scss'],
})
export class StudentsListComponent implements OnInit {
  students: Student[] = [];
  displayedColumns: string[] = [
    'firstName',
    'lastName',
    'middleName',
    'birthDate',
    'sex',
  ];
  dataSource: MatTableDataSource<Student>;
  constructor(public crudService: StudentCrudService, private router: Router) {}

  ngOnInit(): void {
    this.crudService.getAll().subscribe((data: Student[]) => {
      console.log(data);
      this.students = data;
      this.dataSource = new MatTableDataSource(this.students);
    });
  }

  detail(student) {
    console.log(student);
    this.router.navigate(['/students/', student.id]);

  }
}
