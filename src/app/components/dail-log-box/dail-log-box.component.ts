import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { addBlog, updateBlog } from 'src/app/shared/blog/blog.action';
import { BlogModel } from 'src/app/shared/blog/blog.model';
import { getBlogById } from 'src/app/shared/blog/blog.selector';

@Component({
  selector: 'app-dail-log-box',
  templateUrl: './dail-log-box.component.html',
  styleUrls: ['./dail-log-box.component.css'],
})
export class DailLogBoxComponent implements OnInit {
  form!: FormGroup;
  pageTitle: any;
  blogId: any;
  editData!: BlogModel;
  constructor(
    private dailogRef: MatDialogRef<DailLogBoxComponent>,
    private fb: FormBuilder,
    private store: Store<{ blog: BlogModel[] }>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.createForm();
  }
  ngOnInit(): void {
    this.pageTitle = this.data.title;
    if (this.data.isEdit) {
      this.blogId = this.data.id;

      this.store.select(getBlogById(this.blogId)).subscribe((res) => {
        console.log(res);
        this.editData = res;
        this.form.patchValue(this.editData);
      });
    }
  }

  closePopUp() {
    this.dailogRef.close();
  }
  createForm() {
    this.form = this.fb.group({
      id: [0],
      title: [''],
      description: [''],
    });
  }

  addBlog() {
    const inputBlog: BlogModel = {
      id: 0,
      title: this.form.value.title,
      description: this.form.value.description,
    };
    if (this.form.valid && !this.data.isEdit) {
      this.store.dispatch(addBlog({ input: inputBlog }));
      this.closePopUp();
    }
    if (this.form.valid && this.data.isEdit) {
      inputBlog.id = this.form.value.id as number;
      this.store.dispatch(updateBlog({ input: inputBlog }));
      this.closePopUp();
    }
  }
}
