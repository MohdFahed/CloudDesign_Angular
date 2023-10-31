import { createAction, props } from '@ngrx/store';
import { BlogModel } from './blog.model';

export const LOAD_BLOG_SUCCESS = '[blog page] load  blog success';
export const LOAD_BLOG = '[blog page] load  blog';

export const loadSuccessBlog = createAction(
  LOAD_BLOG_SUCCESS,
  props<{ blogList: BlogModel[] }>()
);
export const loadBlog = createAction(LOAD_BLOG);

export const addBlog = createAction('ADDBLOG', props<{ input: BlogModel }>());
export const updateBlog = createAction(
  'UPDATEBLOG',
  props<{ input: BlogModel }>()
);
export const deleteBlog = createAction('DELETEBLOG', props<{ id: number }>());
//,props<{}>()
