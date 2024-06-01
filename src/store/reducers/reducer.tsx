
import { SET_PRODUCTS } from '../actions/actionTypes';
import { SET_CATEGORIES } from '../actions/actionTypes';
import { Products, ProductItem } from '../../interfaces';


// const initialState: ProductsState = {
//     productsElements: {},
//     productsElementsCategories: {},
// };

const initialState = {
    productsElements: {},
    productsElementsCategories: {},
};

const filterUniqueCollectionTypes = (products: Products): { [key: string]: ProductItem } => {
    const uniqueCollectionTypes: { [key: string]: ProductItem } = {};
    const seenCollectionTypes = new Set<string>();
    
    for (const key in products) {
        const product = products[key];
        if (product.collectionType && !seenCollectionTypes.has(product.collectionType)) {
            uniqueCollectionTypes[product.collectionType] = product;
            seenCollectionTypes.add(product.collectionType);
        }
    }

    return uniqueCollectionTypes;
};


  const productReducer = (state = initialState, action: { type: unknown; payload: Products })=> {
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