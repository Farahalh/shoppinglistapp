import React from 'react';
import {useParams} from 'react-router-dom';

interface ItemDetailsPageProps {
    items: string[];
}

function ItemDetailsPage({ items } : ItemDetailsPageProps) {
    // Getting itemId from URL
    const { itemId } = useParams<{ itemId: string }>();

    // Convert itemId from string to int
    const selectedItem = itemId ? items[parseInt(itemId, 10)] : null;

    return (
      <div className="ItemDetailsPage">
      <h2>Item Details</h2>
       {/* Show selected item */}
      <p>{selectedItem}</p>

       {/* Placeholders for Edit & Remove */}
      <p>Edit</p>
      <p>Remove</p>
      </div>
    );
  }
  
  export default ItemDetailsPage;


