import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import * as _l from 'lodash';
import { CommonService } from '../services/common.service';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.scss'],
})
export class SampleFormComponent implements OnInit {
  formObject: Array<any>;

  constructor(
    private commonService: CommonService,
    private _snackBar: MatSnackBar
  ) {}

  openSnackBar(message: string): void {
    this._snackBar.open(message, 'Close', {
      duration: 3000,
    });
  }

  ngOnInit(): void {
    this.formObject = this.commonService.sampleFormSettings;
  }

  public onClearForm = () => {
    this.formObject.forEach((x) => {
      x.value = '';
      x.required && (x.validation_status = false);
    });
  };

  public onFormSubmit(): void {
    this.formObject.forEach((x) => {
      if (x.value === '' && x.required) x.validation_status = true;
      else x.validation_status = false;
    });

    if (_l.every(this.formObject, ['validation_status', false]))
      this.openSnackBar('Submitted Successfully !');
  }
}
