enum Collection { BASIC = 5, MOTHER__AND__CHILD = 10, ACCESSORIES = 200 }

export interface CategoryProps {
   name: string;
   id: string;
   images?: string[];
   editable: boolean;
   collection: Collection;
}
 

export interface Products {
   categories: CategoryProps[];
 }
 
export interface AppProps {
   data: Products;
 }