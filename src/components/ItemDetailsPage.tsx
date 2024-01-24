import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

interface ItemDetailsPageProps {
  items: string[];
  onEditItem: (index: number, newValue: string) => void;
  
}

function ItemDetailsPage({ items, onEditItem }: ItemDetailsPageProps) {
  const { itemId } = useParams<{ itemId: string }>();
  const [itemsList, setItemList] = useState<string[]>(items);

  useEffect(() => {
    setItemList(items); 
  }, [items]);

  const selectedIndex = itemId ? +itemId : -1;
  const selectedItem = selectedIndex !== -1 ? itemsList[selectedIndex] : null;

  const editItem = (newValue: string) => {
    if (selectedIndex !== -1) {
      onEditItem(selectedIndex, newValue);
      const updatedItems = [...itemsList];
      updatedItems[selectedIndex] = newValue;
      setItemList(updatedItems);
    }
  };

  const deleteItem = () => {
    if (selectedIndex !== -1) {
      const updatedItems = [...itemsList];
      updatedItems.splice(selectedIndex, 1);
      setItemList(updatedItems);
    }
  };

  return (
    <div className="ItemDetailsPage">
    <h2>Item Details</h2>
    <p>{selectedItem}</p>

    <button
      className="bg-blue-500 text-white rounded-full p-1 m-2 hover:bg-blue-700 cursor-pointer focus:outline-none focus:ring focus:border-blue-300"
      onClick={() => {
        const newValue = prompt('Enter new value:');
        if (newValue !== null) {
          editItem(newValue);
        }
      }}
    >
      Edit
    </button>

    <button
      className="bg-blue-500 text-white rounded-full p-1 hover:bg-blue-700 cursor-pointer focus:outline-none focus:ring focus:border-blue-300"
      onClick={deleteItem}
    >
      Delete
    </button>
  </div>
);
}

export default ItemDetailsPage;
