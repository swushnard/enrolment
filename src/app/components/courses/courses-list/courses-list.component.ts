import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Course } from '../../../models/course';
import { CourseCrudService } from '../../../services/course-crud.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.scss'],
})
export class CoursesListComponent implements OnInit {
  courses: Course[] = [];
  displayedColumns: string[] = ['courseName', 'startDate', 'endDate'];
  dataSource: MatTableDataSource<Course>;
  constructor(public crudService: CourseCrudService) {}

  ngOnInit(): void {
    this.crudService.getAll().subscribe((data: Course[]) => {
      console.log(data);
      this.courses = data;
      this.dataSource = new MatTableDataSource(this.courses);
    });
  }
}
