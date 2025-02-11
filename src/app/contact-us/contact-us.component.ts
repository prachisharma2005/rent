
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';

@Component({
  standalone: true,
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  imports: [CommonModule, FormsModule, ReactiveFormsModule,FormlyModule]
})
export class ContactUsComponent implements OnInit {
  // reactiveForm!: FormGroup;

  // constructor(private fb: FormBuilder) {}

  // ngOnInit() {
  //   this.reactiveForm = this.fb.group({
  //     firstName: ['', Validators.required],
  //     lastName: ['', Validators.required],
  //     email: ['', [Validators.required, Validators.email]],
  //     mobile: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
  //     message: ['', Validators.required]
  //   });
  // }

  // onTemplateSubmit(form: any) {
  //   if (form.valid) {
  //     console.log('Template Form Data:', form.value);
  //   } else {
  //     alert('Please fill all required fields');
  //   }
  // }

  // onReactiveSubmit() {
  //   if (this.reactiveForm.valid) {
  //     console.log('Reactive Form Data:', this.reactiveForm.value);
  //   } else {
  //     alert('Please fill all required fields');
  //   }
  // }
  form=new FormGroup({});
  model:any = {};
  fields:FormlyFieldConfig[] = [];

  ngOnInit() {
    fetch('assets/form-data.json')
      .then(response => response.json())
      .then((data: any) => {
        this.fields = data.data;
        console.log(data)
      })
      .catch(error => console.error('Error loading form JSON:', error));
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Form Submitted:', this.form.value);
    }
  }
}
