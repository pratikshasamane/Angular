import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AppComponent } from './app.component';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { AddTasksComponent } from './components/add-tasks/add-tasks.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    AddTasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
