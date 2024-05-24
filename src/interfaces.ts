enum Collection { BASIC = 5, MOTHER__AND__CHILD = 10, ACCESSORIES = 200, SKIRTS = 300 }
import { CSSProperties } from 'react';
export interface HeaderProps {
   logo: string
}


export interface Image {
   name: string,
   href: string,
   image: string
}

export interface NavigationProps {
   isNavbarOpen: boolean
}

export interface NavigationProps {
   isNavbarOpen: boolean;
   onClick?: () => void;
}

export interface Item {
   title?: string;
   imageBackground?: string;
   imagesCarousel?: string[];
   price?: number;
   index?: number;
   features?: string[];
   collection?: string
}

export interface Feature {
   description?: string;
}

export interface CategoryProps {
   name: string;
   category: string,
   id: string;
   items?: Item[];
   background?: string
   collection: Collection;
   displayedCategorySettings?: {
      setIsDisplayingCategory: React.Dispatch<React.SetStateAction<boolean>>;
      setSelectedCategoryId: React.Dispatch<React.SetStateAction<string | null>>;
   };
}
 

export interface ProductItem  {
   name: string;
   id: number;
   imageBackground?: string;
   imagesCarousel?: string[];
   price?: number;
   index?: number;
   features?: string[];
   collection: string
 }
 
 export interface Products  {
   [key: number]: {
     name: string;
     category: string;
     id: number;
     items: ProductItem[];
     background?: string
      collection: string;
   };
 }

export interface ProductProps {
   index?: number;
   item: Item ;
   editable: boolean;
   onClick: (item: Item) => void;
   displayedProductSettings?: {
      setIsDisplayingProduct: React.Dispatch<React.SetStateAction<boolean>>;
   };
   
}
 
export interface ProductData {
   images?: string[];

}

export interface CarouselProps {
   images: Image[];
   interval?: number
}

export interface ButtonProps {
   children: React.ReactNode;
   variant?: string
   size?: string;
   type?: 'button' | 'submit' | 'reset'; 
   style?: CSSProperties;
   onClick?: () => void; 
 }

 export interface Theme {
	colors: {
	white: string;
	smokeWhite: string;
	lightGrey: string;
	darkGrey: string;
	};
	fontSize: {
	small: string;
	medium: string;
	large: string;
	extraLarge: string;
	};
	padding: {
	small: string;
	medium: string;
	large: string;
	};
	spacing: {
	small: string;
	medium: string;
	large: string;
	};
  }