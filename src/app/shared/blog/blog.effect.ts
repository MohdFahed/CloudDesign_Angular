import { Injectable } from '@angular/core';
// import { Action } from '@ngrx/store';
import { MasterService } from '../master.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { EMPTY, catchError, exhaustMap, map, pipe } from 'rxjs';
import { LOAD_BLOG, LOAD_BLOG_SUCCESS, loadSuccessBlog } from './blog.action';

@Injectable()
export class BLogEffect {
  constructor(private action$: Actions, private service: MasterService) {}

  // _blog = createEffect(() =>
  //   this.action$.pipe(
  //     ofType(LOAD_BLOG),
  //     exhaustMap((action) => {
  //       return this.service.getAllBlogs().pipe(
  //         map((data) => {
  //           return loadSuccessBlog({ blogList: data });
  //         }),
  //         catchError((e) => EMPTY)
  //       );
  //     })
  //   )
  // );
}
