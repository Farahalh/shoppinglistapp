import React, { useState, ChangeEvent, FormEvent } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import EmptyStateImg from '../images/emptystate-stevengaan.png';
import Button from "./common/Button";
import ItemDetailsPage from "./ItemDetailsPage";

function HomePage() {
  // user input state
  const [inputItem, setInputItem] = useState<string>("");
  // maintain items list state
  const [itemsList, setItemList] = useState<string[]>([]);

  // input change handler
  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputItem(event.target.value);
  };

  // form submit handler
  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if not empty...
    if (inputItem.trim() !== "") {
      // ... update items list
      setItemList((prevItems) => [...prevItems, inputItem]);
      // Clear input field
      setInputItem("");
    }
  };

    // Edit item
    const editItem = (index: number, newValue: string) => {
      // Use current list
      const updatedItems = [...itemsList];
      // update item
      updatedItems[index] = newValue;
      // update list
      setItemList(updatedItems);
    };

  // Delete item
  const deleteItem = (index: number) => {
    // Use current list
    const updatedItems = [...itemsList];
    // delete choosen item
    updatedItems.splice(index, 1);
    // update list after deleting item
    setItemList(updatedItems);
  };

  return (
    <div className="HomePage p-6">
      <form onSubmit={submitHandler} className="flex items-center">
        {/*Input items to list */}
        <input
          className="border border-gray-300 p-1 mr-2 rounded-l-md focus:outline-none flex-1"
          type="text"
          id="ListItem"
          value={inputItem}
          onChange={changeHandler}
        />
        {/*Button to submit form input*/}
        <Button label={"Add"}/>
      </form>
      {/*Display items list*/}
      {itemsList.length > 0 ? (
        <ul>
          {itemsList.map((item: string, index: number) => (
            <li key={index}>

              {/*Link to ItemDetailsPage to Edit & Delete item, routing not working*/}
              <Link className='p-4' to={`/items/${index}`}><input type="checkbox" /> {item}</Link>

              {/*Edit and prompt for to input newValue for item*/}
              <button 
              className="bg-blue-500 text-white rounded-full p-1 m-2 hover:bg-blue-700 cursor-pointer focus:outline-none focus:ring focus:border-blue-300" 
              onClick={() => {
              const newValue = prompt('Enter new value:');
              if (newValue !== null) {
              editItem(index, newValue);
            }
          }}
           >Edit</button>

              <button 
              className="bg-blue-500 text-white rounded-full p-1 hover:bg-blue-700 cursor-pointer focus:outline-none focus:ring focus:border-blue-300" 
              onClick={() => deleteItem(index)}>Delete</button>
              <hr />
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
        {/*Route path not correct yet*/}
      <Routes>
        <Route path="/items/:itemId" element={<ItemDetailsPage items={itemsList} />} />
      </Routes>
    </div>
  );
    }

export default HomePage;
