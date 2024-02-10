enum Collection { BASIC = 5, MOTHER__AND__CHILD = 10, ACCESSORIES = 200, SKIRTS = 300 }

export interface CategoryProps {
   name: string;
   id: string;
   images?: string[];
   background?: string
   editable: boolean;
   collection: Collection;
   displayedCategorySettings?: {
      setIsDisplayingCategory: React.Dispatch<React.SetStateAction<boolean>>;
      setSelectedCategoryId: React.Dispatch<React.SetStateAction<string | null>>;
   };
}
 

export interface Products {
   categories: CategoryProps[];
 }
 
export interface ProductsContainerProps {
   displayedCategorySettings: {
   setIsDisplayingCategory: React.Dispatch<React.SetStateAction<boolean>>;
   setSelectedCategoryId: React.Dispatch<React.SetStateAction<string | null>>;
   };
}

 export interface ProductDetailsProps {

   displayedCategorySettings: {
      
      setIsDisplayingCategory: React.Dispatch<React.SetStateAction<boolean>>;
    };
    categoryId: string | null;
    editable: boolean;
   //  selectedCategoryId?: string
 }

 export interface ProductData {
   images?: string[];

}