
import { SET_PRODUCTS } from '../actions/actionTypes';
import { SET_CATEGORIES } from '../actions/actionTypes';
import { Products, ProductAction, ProductsState } from '../../interfaces';


const initialState: ProductsState = {
    productsElements: {},
    productsElementsCategories: {},
  };


// const filterUniqueCollectionTypes = (products: Products) => {
//     const uniqueCollectionTypes = {};
//     const seenCollectionTypes = new Set();
    
//     for (const key in products) {
//         const product = products[key];
//         if (product.collectionType && !seenCollectionTypes.has(product.collectionType)) {
//             uniqueCollectionTypes[key] = product;
//             seenCollectionTypes.add(product.collectionType);
//         }
//     }

//     return uniqueCollectionTypes;
//   };

const filterUniqueCollectionTypes = (products: Products): string[] => {
    const collectionTypes = new Set<string>();
    for (const key in products) {
      collectionTypes.add(products[key].collectionType);
    }
    return Array.from(collectionTypes);
  };


  const productReducer = (state = initialState, action: ProductAction): ProductsState => {
    switch (action.type) {
      case SET_PRODUCTS:
        return {
          ...state,
          productsElements: action.payload,
        };
      case SET_CATEGORIES:
        return {
          ...state,
          productsElementsCategories: filterUniqueCollectionTypes(action.payload),
        };
      default:
        return state;
    }
  };
  
  export default productReducer;