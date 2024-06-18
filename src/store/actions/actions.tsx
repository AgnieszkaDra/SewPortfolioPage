
import { Products } from '../../interfaces';
import { SET_PRODUCTS } from './actionTypes';
import { SET_CATEGORIES } from './actionTypes';
import { SET_CATEGORY_PRODUCTS } from './actionTypes';
import { SET_COLLECTIONS } from './actionTypes';
import { SET_LINK_PATH } from './actionTypes';

export const setProducts = (products: Products) => ({
    type: SET_PRODUCTS,
    payload: products
});

export const setCategories = (products: Products) => ({
    type: SET_CATEGORIES,
    payload: products
});

export const setCategoryProducts = (products: Products, collectionType: string ) => ({
    type: SET_CATEGORY_PRODUCTS,
    payload: products,
    collectionType
});

export const setCollections = (products: Products) => ({
    type: SET_COLLECTIONS,
    payload: products,
});

export const setLinkPath = (path: string) => ({
    type: SET_LINK_PATH,
    payload: path
})