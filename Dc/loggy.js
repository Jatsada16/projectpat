var items = [];

function addItem() {
  var inputItem = document.getElementById("inputItem");
  var newItem = inputItem.value;

  if (newItem !== "") {
    items.push(newItem);
    inputItem.value = "";
    displayItems();
  }
}

function removeItem(index) {
  items.splice(index, 1);
  displayItems();
}

function displayItems() {
  var itemList = document.getElementById("itemList");
  itemList.innerHTML = "";

  for (var i = 0; i < items.length; i++) {
    var listItem = document.createElement("li");
    listItem.innerHTML = items[i];
    listItem.innerHTML += " <button onclick=\"removeItem(" + i + ")\">ลบ</button>";
    itemList.appendChild(listItem);
  }
}

document.getElementById("addItemBtn").addEventListener("click", addItem);
