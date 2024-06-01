
import { SET_PRODUCTS } from '../actions/actionTypes';
import { SET_CATEGORIES } from '../actions/actionTypes';
import { Products, ProductItem, CollectionType } from '../../interfaces';

const initialState = {
    productsElements: {},
    productsElementsCategories: {},
};

const filterUniqueCollectionTypes = (products: Products): { [key: string]: ProductItem } => {
   
  const categoriesTypesAll = Object.values(products).map(category => category.collectionType)
  const categoriesTypesSelected = new Set(categoriesTypesAll);

  const findProductByCollectionType = (products: Products, collectionType: CollectionType): ProductItem=> {
    return Object.values(products).find(product => product.collectionType === collectionType);
  };

  const selectedProducts: { [key: string]: ProductItem } = {};
  categoriesTypesSelected.forEach((collectionType) => {
    selectedProducts[collectionType] = findProductByCollectionType(products, collectionType);
  });

  return selectedProducts
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