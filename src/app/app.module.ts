import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoursesListComponent } from './components/courses/courses-list/courses-list.component';
import { CourseDetailsComponent } from './components/courses/course-details/course-details.component';
import { StudentDetailsComponent } from './components/students/student-details/student-details.component';
import { StudentsListComponent } from './components/students/students-list/students-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './components/home/home.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { TransformPropertyPipe } from './pipes/camelCase.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CoursesListComponent,
    CourseDetailsComponent,
    StudentDetailsComponent,
    StudentsListComponent,
    HomeComponent,
    TransformPropertyPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatToolbarModule,
    MatIconModule,
    MatExpansionModule,
    MatInputModule,
    MatDatepickerModule,
    MatDialogModule,
    MatCardModule,
    MatButtonModule,
    MatButtonToggleModule,
  ],
  exports: [AppRoutingModule],
  providers: [FormBuilder],
  bootstrap: [AppComponent],
})
export class AppModule {}
