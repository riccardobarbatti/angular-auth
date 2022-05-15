import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.css']
})
export class ForgotComponent implements OnInit {
  form!: FormGroup;
  cls = '';
  message = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
    });
  }

  submit(): void {
    this.http.post('http://localhost:8000/api/v1/forgot', this.form.getRawValue())
      .subscribe(
        () => {
          this.cls = 'success';
          this.message = 'Email was sent!';
        },
        () => {
          this.cls = 'danger';
          this.message = 'Email does not exits!';
        }
      );
  }
}
