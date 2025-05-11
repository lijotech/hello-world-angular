import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  responseMessage = '';

  constructor(private http: HttpClient) {}

  submitForm(contactForm: any) {
    if (contactForm.valid) {
      this.http.post('https://jsonplaceholder.typicode.com/posts', contactForm.value)
        .subscribe(response => {
          this.responseMessage = 'Form submitted successfully!';
        });
    }
  }
}
