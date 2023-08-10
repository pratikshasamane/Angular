import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UsersServiceService } from './services/users-service.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

const appRoutes: Routes = [
  { path: '', component: ListComponent },
  { path: 'createUpdate', component: CreateUpdateComponent },
  { path: 'createUpdate/:id', component: CreateUpdateComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateComponent,
    ListComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
  ],
  providers: [UsersServiceService],
  bootstrap: [AppComponent],
})
export class AppModule {}
