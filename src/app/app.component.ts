import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce-material';
  public contactForm:FormGroup;

  constructor(){
    this.createContactForm();
  }

  createContactForm(){
    this.contactForm = new FormGroup({
      sequence: new FormControl('',[Validators.required, Validators.max(999), Validators.min(1)]),
      firstName: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(50)])
    })
  }

  public hasError = (controlName:string,errorName:string):boolean => {
    return this.contactForm.controls[controlName].hasError(errorName);
  }
}
