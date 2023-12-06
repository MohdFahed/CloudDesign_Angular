import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { getRegs } from '../shared/registration/reg.selector';
import { addReg } from '../shared/registration/reg.action';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MasterService } from '../shared/master.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  form!: FormGroup;
  state: any;
  city: any;
  constructor(
    private store: Store<{ reg: any[] }>,
    private fb: FormBuilder,
    private masterService: MasterService
  ) {
    this.createForm();
  }
  ngOnInit(): void {
    this.state = this.masterService.getState();
    this.changes();
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
  addReg() {
    if (this.form.invalid) {
      return;
    }

    const inputReg = {
      name: this.form.get('name')?.value,
      phoneNo: this.form.get('phoneNo')?.value,
      state: this.form.get('state')?.value,
      city: this.form.get('city')?.value,
    };
    this.store.dispatch(addReg({ regInput: inputReg }));
    this.resetForm();
  }
  resetForm() {
    this.form.reset();
  }
  public checkError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName);
  };
}
