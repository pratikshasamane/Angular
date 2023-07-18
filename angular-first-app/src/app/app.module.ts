import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodosComponent } from './MyComponent/todos/todos.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserAuthModule } from './user-auth/user-auth.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormappComponent } from './formapp/formapp.component';
@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    UserListComponent,
    FormappComponent,
  ],
  imports: [BrowserModule, FormsModule, UserAuthModule, NgbModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
