import { Products } from '../../interfaces';
import { SET_PRODUCTS } from './actionTypes';
import { SET_CATEGORIES } from './actionTypes';

export const setProducts = (products: Products) => ({
    type: SET_PRODUCTS,
    payload: products
});

export const setCategories = (products: Products) => ({
    type: SET_CATEGORIES,
    payload: products
});