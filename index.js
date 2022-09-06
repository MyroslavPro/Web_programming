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
const onEditItem = (event) => {
  const itemId = event.target.id.replace(EDIT_BUTTON_PREFIX, "");
  let editItemIndex = 0;
  for (let i=0; i< items.length; i++){
    if(items[i].id === itemId){
      editItemIndex = i;
      break;
    }
  }
  setInputEditValues(items[editItemIndex].name,items[editItemIndex].price,
    items[editItemIndex].country,items[editItemIndex].provider);
  EDIT_SECTION.classList.add(OPEN_CLASSNAME);
  editButton.addEventListener("click", function editForm(event){
    event.preventDefault();

    if(!validateEditInput()){
      return;
    }
    const {name, price, country, provider} = getInputEditValues();
    const editItem = {id:itemId,
      name, price, country, provider
    };
    items[editItemIndex] = editItem;
  
    clearInputEditValues();
    EDIT_SECTION.classList.remove(OPEN_CLASSNAME);
    renderAllItems();
    editButton.removeEventListener("click",editForm);
  });
};


// DeleteCard
const onDeleteItem = (event) => {
  const itemId = event.target.id.replace(DELETE_BUTTON_PREFIX, "");
  for (let i=0; i< items.length; i++){
    if(items[i].id === itemId){
      items.splice(i,1);
      break;
    }
  }
  renderAllItems();
};


// Render items in sorted manner(by name)
const renderAllItems = ()=>{
  let renderItems = items;
  renderItems.sort((item1,item2)=> item2.name.localeCompare(item1.name));
  renderItemsList(renderItems,onEditItem,onDeleteItem);
};


// Submit Form
submitButton.addEventListener("click",(event)=>{
    event.preventDefault();
    if(!validateCreateInput()){
        return;
    }

    const generatedId =uuid.v1();
    const {name, price, country, provider} = getInputCreateValues();
    const newItem = {id:generatedId,
      name, price, country, provider
    };
    items.push(newItem);

    clearInputCreateValues();
    renderAllItems();
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
  let sorted_items = Array.from(items);
  if (sortCheckbox.checked){
    console.log(items);
    sorted_items = items.sort((item1,item2) =>item1.price - item2.price);
    console.log(items);
    renderItemsList(sorted_items, onEditItem, onDeleteItem);
  }
  else{
    renderAllItems();
  }
})

// Count the total price of items
countButton.addEventListener("click",()=>{
  const items_price = items.map(item =>item.price).reduce((previous, currunt) => previous + currunt, 0);
  document.getElementById("sum-price").innerText = items_price;
});


renderAllItems();