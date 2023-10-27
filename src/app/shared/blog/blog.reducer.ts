import { createReducer, on } from '@ngrx/store';
import { blogState } from './blog.state';
import { addBlog, loadBlog } from './blog.action';

const _blogReducer = createReducer(
  blogState,
  on(loadBlog, (state) => {
    return {
      ...state,
    };
  }),
  on(addBlog, (state, action) => {
    let newBlog = { ...action.input };
    return {
      ...state,
      blogList: [...state.blogList, newBlog],
    };
  })
);

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
