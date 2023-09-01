import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { NotesServicesService } from 'src/app/services/notes-services.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private notesService: NotesServicesService,
    private router: Router
  ) {
    // this.registerForm = this.fb.group({
    //   name: [''],
    //   email: [''],
    //   password: [''],
    // });
  }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  get f() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;
    this.notesService
      .register(this.registerForm.value)
      .pipe(first())
      .subscribe(
        (data) => {
          // this.success('Registration successful', true);
          Swal.fire('Registration successful', 'This is a message', 'success');
          this.router.navigate(['/login']);
        },
        (error) => {
          // this.alertService.error(error);
          Swal.fire('This is a message', 'error');
          this.loading = false;
        }
      );
  }
  // registerUser(): void {
  //   const user = this.registerForm.getRawValue();

  //   if (user.name == '' || user.email == '' || user.password == '') {
  //     Swal.fire('All fields are required', 'This is a message', 'error');
  //   }

  //   this.notesService.registerNotes(user).subscribe(
  //     () => {
  //       this.router.navigate(['/']);
  //     },
  //     (error) => {
  //       console.error('Registration Error:', error); // Log the error to the console
  //       Swal.fire(
  //         'Error occurred during registration',
  //         'Please try again later',
  //         'error'
  //       );
  //     }
  //   );
  // }
}
