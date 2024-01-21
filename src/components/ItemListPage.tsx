import React, { useState, ChangeEvent, FormEvent } from "react";
import Button from "./Button";
import ItemPage from "./ItemPage";

function ItemListPage() {
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

  return (
    <div className="ItemListPage p-6">
      <form onSubmit={submitHandler} className="flex items-center">
        <input
          className="border border-gray-300 p-1 mr-2 rounded-l-md focus:outline-none flex-1"
          type="text"
          id="ListItem"
          value={inputItem}
          onChange={changeHandler}
        />
        {/*Button to submit form input*/}
        <Button />
      </form>
      {/*Display items list*/}
      <ItemPage items={itemsList} />
    </div>
  );
}

export default ItemListPage;
