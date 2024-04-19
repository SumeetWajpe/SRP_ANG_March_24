import { createAction } from '@ngrx/store';

export const incrementLikes = createAction(
  '[App-Products-Component] IncrementLikes'
);
export const addProduct = createAction('[App-Products-Component] AddProduct');
export const deleteProduct = createAction(
  '[App-Products-Component] DeleteProduct'
);
