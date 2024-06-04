
import { SET_PRODUCTS } from '../actions/actionTypes';
import { SET_CATEGORIES } from '../actions/actionTypes';
import { SET_CATEGORY_PRODUCTS, SET_LINK_PATH } from '../actions/actionTypes';
import { Products, ProductItem, CollectionType } from '../../interfaces';

const initialState = {
    productsElements: {},
    productsElementsCategories: {},
    productsofCategory: {},
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

interface Action {
  type: string;
  payload: Products;
  collectionType: string ;
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
              productsElementsCategories: filterUniqueCollectionTypes(action.payload),
          };
          case SET_CATEGORY_PRODUCTS:
            return {
                ...state,
                productsOfCategory: filterProductsOfCategory(action.payload as Products, action.collectionType as string),
            };
      case SET_LINK_PATH: 
          return {
              ...state,
              linkPath: action.payload as unknown as string,
          };
      default:
          return state;
  }
};

export default productReducer;