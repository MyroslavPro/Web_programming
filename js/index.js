import{
  EDIT_BUTTON_PREFIX,
  DELETE_BUTTON_PREFIX,
  getInputCreateValues,
  clearInputCreateValues,
  setInputEditValues,
  getInputEditValues,
  clearInputEditValues,
  renderItemsList
} from "./dom_util.js";

import{
  getAllItems,
  getItemById,
  postItem,
  editItem,
  deleteItem
} from "./api.js";

const submitButton = document.getElementById("submit-button");
const editButton = document.getElementById("edit-button")

const searchButton = document.getElementById("search-button");
const clearButton = document.getElementById("clear-button");
const sortCheckbox = document.getElementById("sort-checkbox");
const countButton = document.getElementById("count-button");

const searchInput = document.getElementById("search-input");

const createFormFields = document.getElementsByClassName("form-control--create");
const editFormFields = document.getElementsByClassName("form-control--edit");

const inputDefaultValues = document.querySelectorAll("input");

const homeButton = document.getElementById("home-button");
const createItemButton = document.getElementById("create-item-button");
const HOME_SECTION = document.getElementById("home-sctn");
const CREATE_ITEM_SECTION = document.getElementById("create-item-sctn");
const EDIT_SECTION = document.getElementById("edit-sctn");
const OPEN_CLASSNAME = "open";

let items=[];

// Clear all input values on reload
window.onload = () => {
  inputDefaultValues.forEach((input) =>{ 
    if(input.type =="checkbox"){
      input.checked  = false;
    }
    if (input.type =="text" || input.type =="number"){
      input.value = "";
    }
  });
};

// Switch between "inner" pages
homeButton.addEventListener("click",()=>{
  if (HOME_SECTION.classList.contains(OPEN_CLASSNAME)){
    return;
  }
  else{
    HOME_SECTION.classList.add(OPEN_CLASSNAME);
    CREATE_ITEM_SECTION.classList.remove(OPEN_CLASSNAME);
  }
});

createItemButton.addEventListener("click",()=>{
  if (CREATE_ITEM_SECTION.classList.contains(OPEN_CLASSNAME)){
    return;
  }
  else{
    CREATE_ITEM_SECTION.classList.add(OPEN_CLASSNAME);
    HOME_SECTION.classList.remove(OPEN_CLASSNAME);
  }
});


// Validation
const validateInput = (fields) => {
    if (Array.from(fields).filter(x => x.value.trim() === "").length !== 0) {
      alert("Some fields are empty or some input values don't match to the required conditions!"); 
      return false;
    }
    else{
      return true;
    }
};
//
const validateCreateInput = () => {
  return validateInput(createFormFields);
};
//
const validateEditInput = () => {
  return validateInput(editFormFields);
};


// EditCard
const onEditItem = async(element) => {
  const itemId = element.target.id.replace(EDIT_BUTTON_PREFIX, "");
  EDIT_SECTION.classList.add(OPEN_CLASSNAME);
  const {name, price, country, provider} = await getItemById(itemId);
  setInputEditValues(name, price, country, provider);

  editButton.addEventListener("click", function edifForm(event) {
    event.preventDefault();
    if(!validateEditInput()){
      return;
    }
    editItem(itemId,getInputEditValues()).then(refetchAllItems);
    clearInputEditValues();
    EDIT_SECTION.classList.remove(OPEN_CLASSNAME);
    editButton.removeEventListener("click", edifForm);
  }
  );
};


// DeleteCard
const onDeleteItem = async(element) => {
  const itemId = element.target.id.replace(DELETE_BUTTON_PREFIX, "");
  await deleteItem(itemId);
  refetchAllItems();
};


// Render items in sorted manner(by name)
const refetchAllItems = async()=>{
  const recievedItems =await getAllItems();
  items = recievedItems.items.sort((item1,item2) =>item2.name.localeCompare(item1.name));
  renderItemsList(items,onEditItem,onDeleteItem);
};


// Submit Form
submitButton.addEventListener("click",(event)=>{
    event.preventDefault();
    if(!validateCreateInput()){
        return;
    }
    const {name, price, country, provider} = getInputCreateValues();
    const newItem = {
      name, price, country, provider
    };
    clearInputCreateValues();

    postItem(newItem).then(refetchAllItems);
});



// Find by name
searchButton.addEventListener("click",()=>{
  let renderItems = items.filter(item => item.name.toString().toLowerCase().search(searchInput.value.toLowerCase()) !== -1);
  renderItemsList(renderItems,onEditItem,onDeleteItem);
});

clearButton.addEventListener("click",()=>{
  searchInput.value="";
  renderItemsList(items,onEditItem,onDeleteItem);
});


//Sort items by desc
sortCheckbox.addEventListener("change",()=>{
  let sorted_items = items;
  if (sortCheckbox.checked){
    sorted_items = items.sort((item1,item2) =>item1.price - item2.price);
    renderItemsList(sorted_items, onEditItem, onDeleteItem);
  }
  else{
    refetchAllItems();
  }
})

// Count the total price of items
countButton.addEventListener("click",()=>{
  const items_price = items.map(item =>item.price).reduce((previous, current) => previous + current, 0);
  document.getElementById("sum-price").innerText = items_price;
});


refetchAllItems();
