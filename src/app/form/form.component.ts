import { Component } from '@angular/core';

import { FormControl, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent {

  public output;
  public afterConvert: boolean = false;
  public isCorrect: boolean;

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
    this.afterConvert = true;
    let check = parseInt(this.output, this.targetSystemNumber.value).toString(this.sourceSystemNumber.value);
    this.isCorrect = check.toUpperCase() == this.numberToConvert.value.toUpperCase()
  }

  checkIsNan() {
    return this.output === 'NaN';
  }

  clearAll() {
    this.convertForm.reset();
    this.output = '';
  }

}