import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Student } from '../../../models/student';
import { StudentCrudService } from '../../../services/student-crud.service';
import { DefaultStudent } from '../../helpers/default.helpers';

@Component({
  selector: 'app-student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss'],
})
export class StudentDetailsComponent implements OnInit {
  public form: FormGroup;
  student: Student = DefaultStudent();
  id: string;

  constructor(
    private fb: FormBuilder,
    public crudService: StudentCrudService,
    private route: ActivatedRoute
  ) {
    this.form = this.fb.group({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      middleName: new FormControl('', [Validators.required]),
      sex: new FormControl('', [Validators.required]),
      birthDate: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.crudService.getById(this.id).subscribe((data: Student) => {
      this.student = data;
    });
  }
}
