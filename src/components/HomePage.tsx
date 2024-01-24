import React, { useState, ChangeEvent, FormEvent } from "react";
import {
  Routes,
  Route,
  Link,
  Form,
  useNavigate,
} from "react-router-dom";
import EmptyStateImg from '../images/emptystate-stevengaan.png';
import Button from "./common/Button";
import Header from "./common/Header";
import ItemDetailsPage from "./ItemDetailsPage";

function HomePage() {
  const [inputItem, setInputItem] = useState<string>("");
  const [itemsList, setItemList] = useState<string[]>([]);
  const navigate = useNavigate();

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setInputItem(event.target.value);
  };

  const submitHandler = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (inputItem.trim() !== "") {
      setItemList((prevItems) => [...prevItems, inputItem]);
      setInputItem("");
    }
  };

  const deleteItem = (index: number) => {
    const updatedItems = [...itemsList];
    updatedItems.splice(index, 1);
    setItemList(updatedItems);
  };

  const editItem = (index: number, newValue: string) => {
    const updatedItems = [...itemsList];
    updatedItems[index] = newValue;
    setItemList(updatedItems);
  };

  return (
    <div className="HomePage flex flex-col items-center justify-center min-h-screen p-6">

      <Header />

      <Form onSubmit={submitHandler} className="flex items-center">
        <input
          className="border border-gray-300 p-1 mr-2 rounded-l-md focus:outline-none flex-1"
          type="text"
          id="ListItem"
          value={inputItem}
          onChange={changeHandler}
        />
        <Button label={"Add"} />
      </Form>

      {itemsList.length > 0 ? (
        <ul>
          {itemsList.map((item: string, index: number) => (
            <li key={index}>
              <Link className='p-4' to={`/items/${index}`}>
                {item}
              </Link>
              <button
                className="bg-blue-500 text-white rounded-full p-1 hover:bg-blue-700 cursor-pointer focus:outline-none focus:ring focus:border-blue-300"
                onClick={() => deleteItem(index)}>Delete</button>
              <hr />
            </li>
          ))}
        </ul>
      ) : (
        <div className="text-center">
          <p className="text-gray-500">No Items Yet</p>
          <img
            className='w-40 md:w-56 lg:w-72 max-w-full h-auto mb-5'
            src={EmptyStateImg}
            alt='emptyState'
          />
        </div>
      )}

      <Routes>
      <Route
          path="/items/:itemId"
          element={<ItemDetailsPage items={itemsList} onEditItem={editItem} />}
        />
      </Routes>
    </div>
  );
}

export default HomePage;
