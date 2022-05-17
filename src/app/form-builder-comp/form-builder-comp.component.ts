import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { InteractionService } from '../interaction.service';

@Component({
  selector: 'app-form-builder-comp',
  templateUrl: './form-builder-comp.component.html',
  styleUrls: ['./form-builder-comp.component.css']
})
export class FormBuilderCompComponent implements OnInit {

  formFieldArray: any[] = []
  field?: string
  constructor(private _fb: FormBuilder, private _interaction: InteractionService) { }

  formBuilderForm!: FormGroup
  ngOnInit(): void {
    this.formBuilderForm = this._fb.group({
      lable: [''],
      fieldType: [''],
      name: [''],
      options: ['']
    })
  }

  getFieldType(e: any) {
    this.field = e.target.value
    //console.log(e.target.value);
  }

  submit() {
    this.formFieldArray.push(this.formBuilderForm.value)
    this._interaction.sendFBData(this.formFieldArray)
    // console.log(this.formBuilderForm.value);
  }
}
