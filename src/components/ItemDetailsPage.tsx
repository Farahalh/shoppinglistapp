import React from 'react';
import {useParams} from 'react-router-dom';

interface ItemDetailsPageProps {
    items: string[];
}

function ItemDetailsPage({ items } : ItemDetailsPageProps) {
    const { itemId } = useParams<{ itemId: string }>();
    const selectedItem = itemId ? items[parseInt(itemId, 10)] : null;

    return (
      <div className="ItemDetailsPAge">
      <h2>Item Details</h2>
      <p>{selectedItem}</p>
      <p>Edit</p>
      <p>Remove</p>
      </div>
    );
  }
  
  export default ItemDetailsPage;


