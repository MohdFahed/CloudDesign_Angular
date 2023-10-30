import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BlogModel, Blogs } from 'src/app/shared/blog/blog.model';
import { getBlogs } from 'src/app/shared/blog/blog.selector';
import { DailLogBoxComponent } from '../dail-log-box/dail-log-box.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {
  blogList!: BlogModel[];
  constructor(
    private store: Store<{ blog: BlogModel[] }>,
    public dialog: MatDialog
  ) {}
  ngOnInit() {
    this.store.select(getBlogs).subscribe((res) => {
      this.blogList = res;
    });
    console.log(this.blogList);
  }
  add() {
    this.openDailogBox(0, 'Add Blog', false);
  }
  openDailogBox(id: any, title: any, isEdit: boolean = false) {
    const dialogRef = this.dialog.open(DailLogBoxComponent, {
      width: '50%',
      data: {
        id: id,
        title: title,
        isEdit: isEdit,
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed');
    });
  }

  updateBlog(id: any) {
    this.openDailogBox(id, 'Edit Blog', true);
  }
}
