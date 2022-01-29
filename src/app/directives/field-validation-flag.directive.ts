import {
  Directive,
  ElementRef,
  OnInit,
  HostListener,
  Input,
} from '@angular/core';
import { CommonService } from '../services/common.service';
@Directive({
  selector: '[setValidationFlag]',
})
export class FieldValidationFlagDirective implements OnInit {
  @Input() dirInput: any;
  @Input() dirType: string = '';

  constructor(private eRef: ElementRef, public commonService: CommonService) {}

  ngOnInit() {}

  @HostListener('blur')
  onFocusout() {
    if (this.dirType !== 'main') {
      if (
        (this.eRef.nativeElement.value === '' ||
          this.eRef.nativeElement.value === undefined) &&
        this.dirType !== 'main'
      ) {
        //For mandatory fields set validation if value is empty
        return this.dirInput.required === true
          ? (this.dirInput.validation_status = true)
          : this.dirInput;
      } else if (
        this.eRef.nativeElement.value !== '' &&
        this.dirInput.validationType === 'EMAIL'
      ) {
        const emailTestInd = this.commonService.emailPattern.test(
          this.eRef.nativeElement.value
        );
        return emailTestInd
          ? this.dirInput
          : (this.dirInput.validation_status = true);
      } else if (
        this.eRef.nativeElement.value !== '' &&
        this.dirInput.validationType === 'MOBILE'
      ) {
        if (
          this.eRef.nativeElement.value.length < 5 ||
          this.eRef.nativeElement.value.length > 12
        )
          return (this.dirInput.validation_status = true);
        else return this.dirInput;
      } else if (
        this.eRef.nativeElement.value !== '' &&
        this.dirInput.validationType === 'TELEPHONE'
      ) {
        if (
          this.eRef.nativeElement.value.length < 4 ||
          this.eRef.nativeElement.value.length > 13
        )
          return (this.dirInput.validation_status = true);
        else return this.dirInput;
      } else if (
        this.eRef.nativeElement.value !== '' &&
        this.dirInput.validationType === 'ZIPCODE'
      ) {
        if (
          this.eRef.nativeElement.value.length < 5 ||
          this.eRef.nativeElement.value.length > 10
        )
          return (this.dirInput.validation_status = true);
        else return this.dirInput;
      }
    }
  }
}
