
import { SET_PRODUCTS } from '../actions/actionTypes';
import { SET_CATEGORIES } from '../actions/actionTypes';
import { SET_CATEGORY_PRODUCTS, SET_LINK_PATH } from '../actions/actionTypes';
import { Products, ProductItem, CollectionType } from '../../interfaces';

const initialState = {
  productsElements: {},
  productsElementsCategories: {},
  productsofCategory: {},
  productsElementsCollection: {},
  linkPath: ''  
};

const filterUniqueCollectionTypes = (products: Products): { [key: string]: ProductItem } => {

  const root = products['All']
  const productsIds = root.children

  const productsAll = Object.values(products).filter(product => productsIds?.includes(product.id));
  const categoriesTypesAll = Object.values(productsAll).map(category => category.collectionType)
  const categoriesTypesSelected = new Set(categoriesTypesAll);
 



  const findProductByCollectionType = (products: Products, collectionType: CollectionType): ProductItem => {
    return Object.values(products).find(product => (product as ProductItem).collectionType?.includes(collectionType)) as ProductItem | undefined;

  };

  const selectedProducts: { [key: string]: ProductItem } = {};
  categoriesTypesSelected.forEach((collectionType) => {
    selectedProducts[collectionType] = findProductByCollectionType(products, collectionType);
  });

  return selectedProducts
};

const filterProductsOfCategory = (products: Products, collectionType: string): { [key: string]: ProductItem } => {
  const productsOfCategory: { [key: string]: ProductItem } = {};
  
  if(collectionType === 'Dziecko') {
    const root = products['Child']
    const productsIds = root.children
    const categoryProducts = Object.values(products).filter(product => productsIds?.includes(product.id));

      categoryProducts.forEach(product => {
      productsOfCategory[product.id] = product;
  });
  } else if(collectionType === 'Kobieta'){
    const root = products['Woman']
    const productsIds = root.children
    const categoryProducts = Object.values(products).filter(product => productsIds?.includes(product.id));

      categoryProducts.forEach(product => {
      productsOfCategory[product.id] = product;
      })
    
  }else {
    const root = products['All']
  const productsIds = root.children

  const productsAll = Object.values(products).filter(product => productsIds?.includes(product.id));
    const categoryProducts = Object.values(productsAll).filter(product => product.collectionType === collectionType);
    console.log(categoryProducts)
    
    categoryProducts.forEach(product => {
      productsOfCategory[product.id] = product;
  });
  }
  

  return productsOfCategory;
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