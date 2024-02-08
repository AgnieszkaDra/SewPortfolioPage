enum Collection { BASIC = 5, MOTHER__AND__CHILD = 10, ACCESSORIES = 200 }

export interface CategoryProps {
   name: string;
   id: string;
   images?: string[];
   editable: boolean;
   collection: Collection;
   displayedCategorySettings?: {
      // displayedProduct: ProductData;
      // setDisplayedProduct: React.Dispatch<React.SetStateAction<ProductData>>;
      setIsDisplayingCategory: React.Dispatch<React.SetStateAction<boolean>>;

    };
}
 

export interface Products {
   categories: CategoryProps[];
 }
 
export interface ProductsContainerProps {
   // data: Products;
   displayedCategorySettings: {
      // displayedProduct: ProductData;
      // setDisplayedProduct: React.Dispatch<React.SetStateAction<ProductData>>;
      setIsDisplayingCategory: React.Dispatch<React.SetStateAction<boolean>>;
    };
   //  selectedCategoryId?: string
 }

 export interface ProductData {
   images?: string[];

}