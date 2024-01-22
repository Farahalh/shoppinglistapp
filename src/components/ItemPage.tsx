import React from 'react';
import { Link } from 'react-router-dom';
import EmptyStateImg from '../images/emptystate-stevengaan.png';

// specify props received in component
interface ItemsPageProps {
  items: string[];
}

function ItemPage({ items }: ItemsPageProps) {
  return (
    <div className="ItemsPage">
      {/*Displays items in list after input*/}
      {items.length > 0 ? (
        <ul>
          {items.map((item: string, index: number) => (
            <li key={index}>
              <Link to={`/items/${index}`}><input type="checkbox" /> {item}</Link>
            </li>
          ))}
        </ul>
      ) : (
        // Display when list is empty
      <div>
        <p>No Items Yet</p>
        <img className='w-40 md:w-56 lg:w-72 max-w-full h-auto mb-5' src={EmptyStateImg} alt='emptyState'/>
      </div>
      )}
    </div>
  );
}

export default ItemPage;
