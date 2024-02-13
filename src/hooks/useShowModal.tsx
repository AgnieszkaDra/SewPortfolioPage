import { useState } from "react";

 interface Item {
  title?: string;
  image?: string; 
  price?: number;
}

export const useShowModal = () => {
 
  const [showModal, setShowModal] = useState(false);
  const [selectedItem , setSelectedItem] = useState(Object); 


  const handleOpenModal = (item: Item) => {
    console.log(item)
      setSelectedItem(item); 
      setShowModal(true);
  };

  const handleCloseModal = () => {
      setSelectedItem(selectedItem); 
      setShowModal(false);
  };

  return { showModal, selectedItem, handleOpenModal, handleCloseModal };
};