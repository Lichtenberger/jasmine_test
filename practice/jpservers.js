//declare the form starting with an empty allServers list starting at index 0
let serverNameInput = document.getElementById('serverName'); //identify the serverNameInput
let serverForm = document.getElementById('serverForm'); //identify the serverForm

let serverTbody = document.querySelector('#serverTable tbody'); //identify the serverTable

let allServers = {}; //an empty list
let serverId = 0; //index starting at 0

serverForm.addEventListener('submit', submitServerInfo); //event listener for form submission

// create server object and add to allServers, update html and reset input
function submitServerInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event

  let serverName = serverNameInput.value;  //gets the value from input 

  if (serverName !== '') { //checks than the value inputed is not empty
    serverId++; //increment the serverId for indexing
    allServers['server' + serverId] = { serverName };  //adds the name and id to the list
 
    updateServerTable(); //calls function

    serverNameInput.value = ''; //returns the input value to an empty string
  }
}

// Create table row element and pass to appendTd function with input value
function updateServerTable() {
  serverTbody.innerHTML = ''; 

  for (let key in allServers) { //use the key to check allServers
    let curServer = allServers[key]; //select a curServer using the key in allServers

    let newTr = document.createElement('tr'); //create the new table row
    newTr.setAttribute('id', key); //set the id attribute to key

    let tipAverage = sumPaymentTotal('tipAmt') / Object.keys(allServers).length; //formula to calculate tipAverage

    appendTd(newTr, curServer.serverName); // add the curServer to the table
    appendTd(newTr, '$' + tipAverage.toFixed(2)); // add the tipAverage to table
    appendDeleteBtn(newTr, 'server'); //add a delete button to table

    serverTbody.append(newTr); //updates the table with new information
  }
}