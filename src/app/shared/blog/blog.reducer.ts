import { createReducer, on } from '@ngrx/store';
import { blogState } from './blog.state';
import {
  addBlog,
  deleteBlog,
  loadBlog,
  loadSuccessBlog,
  updateBlog,
} from './blog.action';

const _blogReducer = createReducer(
  blogState,
  on(loadBlog, (state) => {
    return {
      ...state,
    };
  }),
  on(addBlog, (state, action) => {
    let newBlog = { ...action.input };
    newBlog.id = state.blogList.length + 1;
    return {
      ...state,
      blogList: [...state.blogList, newBlog],
    };
  }),

  on(loadSuccessBlog, (state, action) => {
    return {
      ...state,
      blogList: [...action.blogList],
    };
  }),

  on(updateBlog, (state, action) => {
    const _blog = { ...action.input };
    const updateBlog = state.blogList.map((blog) => {
      return _blog.id === blog.id ? _blog : blog;
    });
    return {
      ...state,
      blogList: updateBlog,
    };
  }),
  on(deleteBlog, (state, action) => {
    const _blogId = action.id;
    const deletedBlog = state.blogList.filter((blog) => {
      return _blogId !== blog.id;
    });
    return {
      ...state,
      blogList: deletedBlog,
    };
  })
);

export function blogReducer(state: any, action: any) {
  return _blogReducer(state, action);
}
