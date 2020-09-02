import { Component, OnInit } from '@angular/core';

import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  public output;
  public errorMessage1: string;
  public rangeControl;
  public afterConvert: boolean = false;

  public readonly numericRegex = /^[a-zA-Z0-9]+$/;

  convertForm = new FormGroup({
    sourceSystemNumber: new FormControl('', Validators.compose([Validators.required, Validators.min(2), Validators.max(36)])),
    targetSystemNumber: new FormControl('', Validators.compose([Validators.required, Validators.min(2), Validators.max(36)])),
    numberToConvert: new FormControl('', Validators.compose([Validators.required, Validators.pattern(this.numericRegex)]))
  })

  get sourceSystemNumber() { return this.convertForm.get('sourceSystemNumber') };
  get targetSystemNumber() { return this.convertForm.get('targetSystemNumber') };
  get numberToConvert() { return this.convertForm.get('numberToConvert') };



  convert() {
    this.output = parseInt(this.numberToConvert.value, this.sourceSystemNumber.value).toString(this.targetSystemNumber.value);
    console.log(this.numberToConvert);
    console.log(this.convertForm);
    this.afterConvert = true;
    //return parseInt(string, radix);
  }

  checkIsNan() {
    return isNaN(this.output);
    // if (isNaN(this.output)) return true
    // else return false;
  }
}