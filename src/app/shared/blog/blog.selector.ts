import { createFeatureSelector, createSelector } from '@ngrx/store';
import { BlogModel, Blogs } from './blog.model';

const getBlogSlector = createFeatureSelector<Blogs>('blog');

export const getBlogs = createSelector(getBlogSlector, (state) => {
  return state.blogList;
});

export const getBlogById = (blogId: number) =>
  createSelector(getBlogSlector, (state) => {
    return state.blogList.find(
      (blog: BlogModel) => blog.id == blogId
    ) as BlogModel;
  });
