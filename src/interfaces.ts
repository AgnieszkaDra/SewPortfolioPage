enum Collection { BASIC = 5, MOTHER__AND__CHILD = 10, ACCESSORIES = 200, SKIRTS = 300 }

interface Item {
   title: string;
   image: string; 
   price: number;
}

export interface CategoryProps {
   name: string;
   id: string;
   items?: Item[];
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

 interface Item {

   title: string;
   image: string;
   // Add other properties as needed
 }

 export interface ProductProps {

   index: number;
   item: Item;
 }
 
export interface CategoriesContainerProps {
   displayedCategorySettings: {
   setIsDisplayingCategory: React.Dispatch<React.SetStateAction<boolean>>;
   setSelectedCategoryId: React.Dispatch<React.SetStateAction<string | null>>;
   };
}

 export interface ProductsContainerProps {

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