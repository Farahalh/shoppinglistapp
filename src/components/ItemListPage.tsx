import React, {useState, ChangeEvent, FormEvent} from "react";
import Button from "./Button";

function ItemListPage() {
const [inputItem, setInputItem] = useState<string>("");
const [submittedItem, setSubmittedItem] = useState<string | null>(null);

const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
  setInputItem(event.target.value);
  console.log(event.target.value);
};

const submitHandler = (event: FormEvent<HTMLFormElement>) => {
  event.preventDefault();
  setSubmittedItem(inputItem);
  setInputItem("");
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
        <Button />
      </form>
      {submittedItem && (<p>You typed: {submittedItem}</p>)}
    </div>
  );
}

export default ItemListPage;
