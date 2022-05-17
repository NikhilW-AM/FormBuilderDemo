import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-form-comp',
  templateUrl: './form-comp.component.html',
  styleUrls: ['./form-comp.component.css']
})
export class FormCompComponent implements OnInit {

  formValue?: any
  updateForm!: FormGroup;
  checkArray: any[] = []
  constructor(private _interaction: InteractionService, private _fb: FormBuilder) { }

  check!: FormGroup
  ngOnInit(): void {
    this._interaction.fields$.subscribe(data => {
      this.formValue = data
      console.log(this.formValue);
      this.updateForm = this._fb.group({}) //<--create the formGroup
      for (let formModule of this.formValue) {

        if (formModule.fieldType === 'checkbox') {
          this.updateForm.addControl(formModule.name, new FormArray([]))
        }
        else {
          this.updateForm.addControl(formModule.name, new FormControl(''))
        }
      }
    })

  }

  onCheckChange(e: any, fcName: any) {
    const formArray = this.updateForm.get(fcName) as FormArray;
    console.log(e.target.checked);
    if (!e.target.checked) {
      var i = formArray.controls.findIndex(x => x === e.target.value);
      formArray.removeAt(i);
    }
    else {
      formArray.push(new FormControl(e.target.value));
    }
  }

  submit() {
    console.log('in');

    console.log(this.updateForm.value);
  }
}
