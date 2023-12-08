import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { MasterService } from 'src/app/shared/master.service';
import { updateReg } from 'src/app/shared/registration/reg.action';
import { getRegById } from 'src/app/shared/registration/reg.selector';

@Component({
  selector: 'app-dail-log-box',
  templateUrl: './dail-log-box.component.html',
  styleUrls: ['./dail-log-box.component.css'],
})
export class DailLogBoxComponent implements OnInit {
  form!: FormGroup;
  pageTitle: any;
  blogId: any;
  editData: any;

  city: any;
  state: any;
  constructor(
    private dailogRef: MatDialogRef<DailLogBoxComponent>,
    private fb: FormBuilder,
    private store: Store<{ blog: any }>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private masterService: MasterService
  ) {
    this.createForm();
  }
  ngOnInit(): void {
    this.state = this.masterService.getState();
    this.changes();
    this.blogId = this.data.id;
    this.store.select(getRegById(this.blogId)).subscribe((res) => {
      this.editData = res;
      this.form.patchValue(this.editData);
    });
  }
  changes() {
    this.form.get('state')?.valueChanges.subscribe((res: any) => {
      let city: any = [];
      if (res === 'Maharashtra') {
        this.city = this.masterService.data.Maharashtra;
      } else if (res === 'Karnataka') {
        this.city = this.masterService.data.Karnataka;
      }
    });
  }
  closePopUp() {
    this.dailogRef.close();
  }

  createForm() {
    this.form = this.fb.group({
      id: [0],
      name: [
        '',
        Validators.compose([
          Validators.pattern('^[a-zA-Z]+$'),
          Validators.required,
        ]),
      ],
      phoneNo: [
        '',
        Validators.compose([
          Validators.pattern(/^[6-9]\d{9}$/),
          Validators.required,
        ]),
      ],
      state: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  update() {
    if (this.form.invalid) {
      return;
    }
    const inputReg = {
      id: 0,
      name: this.form.value.name,
      phoneNo: this.form.value.phoneNo,
      state: this.form.value.state,
      city: this.form.value.city,
    };
    inputReg.id = this.form.value.id as number;
    this.store.dispatch(updateReg({ regInput: inputReg }));
    this.closePopUp();
  }

  public checkError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
