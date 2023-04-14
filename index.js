let myLeads = [];
const inputEl = document.getElementById("input-el");
//adding event listener
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
//get the leads from the localStorage
const leadsFromTheLocalStorage = JSON.parse(localStorage.getItem("myLeads"));
//check if leadsFromTheLocalStorage is truthy
//if so, set myLeads to its value and call renderLeads
if (leadsFromTheLocalStorage) {
  myLeads = leadsFromTheLocalStorage;
  renderLeads();
}

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  //clear the input field
  inputEl.value = "";
  //save myLeads array into localStorage
  localStorage.setItem("myLeads", JSON.stringify(myLeads));

  renderLeads();
});

function renderLeads() {
  //created an empty listItems variable to hold all html list items and assigned it to an empty string
  let listItems = " ";

  //log out the items in the myleads using a for loop
  for (let i = 0; i < myLeads.length; i++) {
    // added the item to the listItems variable instead of ulEl.innerHTML
    listItems += `
<li>
<a target = '_blank' href= '${myLeads[i]}'>
${myLeads[i]}
</a>
</li>
`;
  }
  //rendered the listItems inside the unordered list of the ulEl.innerHTML

  ulEl.innerHTML = listItems;

  //another way to do it
  //const li = document.createElement("li")
  //li.textContent = myLeads[i]
  //ulEl.append(li)
}
