import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  fieldValidationText: string;

  constructor() {}

  emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  sampleFormSettings: Array<any> = [
    {
      id: 'name',
      name: 'Name',
      type: 'text',
      placeholder: 'Eg: John Doe',
      value: '',
      validation_status: false,
      required: true,
    },
    {
      id: 'email',
      name: 'Email',
      type: 'text',
      placeholder: 'Eg: asdf@gmail.com',
      value: '',
      validation_status: false,
      validationType: 'EMAIL',
      required: true,
    },
    {
      id: 'mobile',
      name: 'Mobile',
      type: 'number',
      placeholder: 'Eg: 9123456789',
      value: '',
      validation_status: false,
      validationType: 'MOBILE',
      required: true,
    },
    {
      id: 'telephone',
      name: 'Telephone',
      type: 'number',
      placeholder: 'Eg: 04412312312',
      value: '',
      validation_status: false,
      required: false,
    },
    {
      id: 'city',
      name: 'City',
      type: 'text',
      placeholder: 'Eg: Chennai',
      value: '',
      validation_status: false,
      required: true,
    },
    {
      id: 'country',
      name: 'Country',
      type: 'text',
      placeholder: 'Eg: India',
      value: '',
      validation_status: false,
      required: true,
    },
  ];

  getValidationTextBasedOnType(type): string {
    if (type == 'MANDT') this.fieldValidationText = 'This field is required';
    else if (type == 'EMAIL') this.fieldValidationText = 'Enter valid Email';
    else if (type == 'MOBILE')
      this.fieldValidationText = 'Enter valid Mobile Number';
    else if (type == 'TELEPHONE')
      this.fieldValidationText = 'Enter valid Telephone Number';
    else if (type == 'ZIPCODE')
      this.fieldValidationText = 'Enter valid Zip Code';
    else this.fieldValidationText = 'This field is required';

    return this.fieldValidationText;
  }
}
