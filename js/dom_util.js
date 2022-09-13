const NameInputCreate = document.getElementById("create-name-input");
const PriceInputCreate = document.getElementById("create-price-input");
const CountryInputCreate = document.getElementById("create-country-input");
const ProviderInputCreate = document.getElementById("create-provider-input");

const NameInputEdit = document.getElementById("edit-name-input");
const PriceInputEdit = document.getElementById("edit-price-input");
const CountryInputEdit = document.getElementById("edit-country-input");
const ProviderInputEdit = document.getElementById("edit-provider-input");
const itemsContainer = document.getElementById("items-container");

export const EDIT_BUTTON_PREFIX = "edit-button-";
export const DELETE_BUTTON_PREFIX = "delete-button-";


const itemTemplate = ({ id, name, price, country, provider }) => `<li "id=item-${id}" class="card-item card">
<div class="card__body">
    <h3 class="card-title">Name: ${name}</h3>
    <p class="card-text">Price: ${price}</p>
    <p class="card-text">Origin: ${country}</p>
    <p class="card-text">Provider: ${provider}</p>
</div>
<div class="horizontal_container">
    <button id="${EDIT_BUTTON_PREFIX}${id}" class="button" type="button" style = "background-color: #3b8dec">
      Edit
    </button>
    <button id="${DELETE_BUTTON_PREFIX}${id}" class="button" type="button"  style = "background-color: #F53838;">
      Delete
    </button>
</div>
</li>`;


export const addItemToPage = ({ id, name, price, country, provider}, onEditItem , onDeleteItem ) => {
  itemsContainer.insertAdjacentHTML(
    "afterbegin",
    itemTemplate({ id, name, price, country, provider }),
  );
  
  const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
  editButton.addEventListener("click", onEditItem,{once:true});
  const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);
  deleteButton.addEventListener("click", onDeleteItem);
};


export const renderItemsList = (items, onEditItem, onDeleteItem) => {
  itemsContainer.innerHTML = "";

  for (const item of items) {
    addItemToPage(item, onEditItem, onDeleteItem);
  }
};



// Create form
export const getInputCreateValues = () => {
    return {
      name:NameInputCreate.value,
      price:parseFloat(PriceInputCreate.value),
      country:CountryInputCreate.value,
      provider:ProviderInputCreate.value,
    };
};

export const clearInputCreateValues = () => {
    NameInputCreate.value="";
    PriceInputCreate.value="";
    CountryInputCreate.value="";
    ProviderInputCreate.value="";
};


//Edit form
export const setInputEditValues = (name,price,country,provider) => {
  NameInputEdit.value = name;
  PriceInputEdit.value = price;
  CountryInputEdit.value = country;
  ProviderInputEdit.value = provider;
};

export const getInputEditValues = () => {
    return {
      name:NameInputEdit.value,
      price:parseFloat(PriceInputEdit.value),
      country:CountryInputEdit.value,
      provider:ProviderInputEdit.value,
    };
};

export const clearInputEditValues = () => {
    NameInputEdit.value="";
    PriceInputEdit.value="";
    CountryInputEdit.value="";
    ProviderInputEdit.value="";
};