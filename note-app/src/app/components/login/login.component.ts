import { Component, OnInit } from '@angular/core';
import { NotesServicesService } from 'src/app/services/notes-services.service';
import { ValidationModel } from 'src/app/validation-model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs/operators';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    private notesService: NotesServicesService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  get f() {
    return this.loginForm.controls;
  }
  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });

    // this.notesService.logout();
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.notesService
      .login(this.f.email.value, this.f.password.value)
      .pipe(first())
      .subscribe(
        (data) => {
          window.location.href = '/';
        },
        (error) => {
          Swal.fire(
            'Incorrect email or password',
            'This is a message',
            'error'
          );
        }
      );
  }
}
