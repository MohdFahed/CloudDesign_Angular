import { createAction, props } from '@ngrx/store';
import { BlogModel } from './blog.model';

export const loadBlog = createAction('LOADBLOG');

export const addBlog = createAction('ADDBLOG', props<{ input: BlogModel }>());
//,props<{}>()
