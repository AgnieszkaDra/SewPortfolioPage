enum Collection { BASIC = 5, MOTHER__AND__CHILD = 10, ACCESSORIES = 200, SKIRTS = 300 }

export interface HeaderProps {
   logo: string
}



export interface Image {
   image: string;
   href: string

}

export interface CarouselProps {
   images: Image[];
   interval: number
}

export interface NavigationProps {
   isNavbarOpen: boolean
}

export interface Item {
   title?: string;
   image?: string; 
   price?: number;
   index?: number;
   features?: string[];
}

export interface Feature {
   description?: string;
}

export interface CategoryProps {
   name: string;
   id: string;
   items?: Item[];
   background?: string
   collection: Collection;
   displayedCategorySettings?: {
      setIsDisplayingCategory: React.Dispatch<React.SetStateAction<boolean>>;
      setSelectedCategoryId: React.Dispatch<React.SetStateAction<string | null>>;
   };
}
 

export interface Products {
   categories: CategoryProps[];
 }

export interface ProductProps {
   index?: number;
   item: Item ;
   editable: boolean;
   displayedProductSettings?: {
      setIsDisplayingProduct: React.Dispatch<React.SetStateAction<boolean>>;
      setSelectedProductId: React.Dispatch<React.SetStateAction<string | null>>;
   };
   // onClick: (item: Item) => void;
}
 
export interface ProductData {
   images?: string[];

}