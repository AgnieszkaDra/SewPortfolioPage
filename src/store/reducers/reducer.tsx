
import { SET_PRODUCTS } from '../actions/actionTypes';
import { SET_CATEGORIES } from '../actions/actionTypes';
import { SET_CATEGORY_PRODUCTS, SET_COLLECTIONS, SET_LINK_PATH } from '../actions/actionTypes';
import { Products, ProductItem, CollectionType, CollectionMain } from '../../interfaces';

const initialState = {
  productsElements: {},
  productsElementsCategories: {},
  productsofCategory: {},
  productsElementsCollection: {},
  linkPath: ''  
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

const filterProductsOfCategory = (products: Products, collectionType: string): { [key: string]: ProductItem } => {
  const categoryProducts = Object.values(products).filter(product => product.collectionType === collectionType);
  const productsOfCategory: { [key: string]: ProductItem } = {};
  categoryProducts.forEach(product => {
      productsOfCategory[product.id] = product;
  });

  return productsOfCategory;
};

const filterProductsOfCollectionMain = (products: Products): { [key: string]: ProductItem } => {
  const collectionTypesAll = Object.values(products).map(category => category.collectionMain)
  const collectionTypesSelected = new Set(collectionTypesAll);
  
  const findProductByCollectionType = (products: Products, collectionMain: CollectionMain): ProductItem=> {
    return Object.values(products).find(product => product.collectionMain === collectionMain);
  };

  const selectedProducts: { [key: string]: ProductItem } = {};
  collectionTypesSelected.forEach((collectionMain) => {
    selectedProducts[collectionMain] = findProductByCollectionType(products, collectionMain);
  });

  return selectedProducts

};

interface Action {
  type: string;
  payload: Products | string;
  collectionType: string ;
  collectionMain: string ;
}

const productReducer = (state = initialState, action: Action) => {
  switch (action.type) {
      case SET_PRODUCTS:
        return {
          ...state,
          productsElements: action.payload,
        };
      case SET_CATEGORIES:
        return {
          ...state,
          productsElementsCategories: filterUniqueCollectionTypes(action.payload as Products),
        };
      case SET_CATEGORY_PRODUCTS:
        return {
          ...state,
          productsOfCategory: filterProductsOfCategory(action.payload as Products, action.collectionType as string),
        };
      case SET_COLLECTIONS:
        return {
          ...state,
          productsElementsCollection: filterProductsOfCollectionMain(action.payload as Products),
        };
      case SET_LINK_PATH: 
          return {
            ...state,
            linkPath: action.payload as string,
          };
      default:
          return state;
  }
};

export default productReducer;