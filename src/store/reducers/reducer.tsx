
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
  
  const categoryProducts = Object.values(products).filter(product => product.collectionType.includes(collectionType));
  const productsOfCategory: { [key: string]: ProductItem } = {};
  categoryProducts.forEach(product => {
      productsOfCategory[product.id] = product;
  });

  return productsOfCategory;
};

const filterProductsOfCollectionMain = (products: Products, collectionName: string): { [key: string]: ProductItem } => {
  console.log(collectionName)
  // Get all collectionMain values from products
  const collectionTypesAll = Object.values(products).map(category => category.collectionMain);
  
  // Use a Set to filter unique collectionMain values
  const collectionTypesSelected = new Set(collectionTypesAll);

  // Function to find product by collectionMain
  const findProductByCollectionType = (products: Products, collectionMain: CollectionMain): ProductItem | undefined => {
    return Object.values(products).find(product => product.collectionMain === collectionMain);
  };

  // Initialize an empty object to store selected products
  const selectedProducts: { [key: string]: ProductItem } = {};

  // Iterate through unique collectionMain values
  collectionTypesSelected.forEach((collectionMain) => {
    // Find product by collectionMain
    const product = findProductByCollectionType(products, collectionMain);
    if (product) {
      // Add product to selectedProducts using collectionMain as key
      selectedProducts[collectionMain] = product;
    }
  });

  // Check if collectionName exists in selectedProducts
  if (collectionName in selectedProducts) {
    const desiredObject = selectedProducts[collectionName];
    console.log(desiredObject);
  } else {
    console.log(`Object with key '${collectionName}' not found.`);
  }

  // Return selectedProducts object
  return selectedProducts;
};



interface Action {
  type: string;
  payload: Products | string;
  collectionType: string;
  collectionMain: string;
  collectionName: string;
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
          productsElementsCollection: filterProductsOfCollectionMain(action.payload as Products, action.collectionName as string),
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