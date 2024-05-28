
import { SET_PRODUCTS } from '../actions/actionTypes';
import { SET_CATEGORIES } from '../actions/actionTypes';
import { Products } from '../../interfaces';

const initialState = {
  productsElements: {},
  productsElementsCategories: {}
};


const filterUniqueCollectionTypes = (products: Products) => {
    const uniqueCollectionTypes = {};
    const seenCollectionTypes = new Set();
    
    for (const key in products) {
        const product = products[key];
        if (product.collectionType && !seenCollectionTypes.has(product.collectionType)) {
            uniqueCollectionTypes[key] = product;
            seenCollectionTypes.add(product.collectionType);
        }
    }

    return uniqueCollectionTypes;
  };


const productReducer = (state = initialState, action: { type: unknown; payload: unknown; }) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        productsElements: action.payload
      };
      case SET_CATEGORIES:
      return {
        ...state,
        productsElementsCategories: filterUniqueCollectionTypes(action.payload)
    };
    
    default:
      return state;
  }
};

export default productReducer;