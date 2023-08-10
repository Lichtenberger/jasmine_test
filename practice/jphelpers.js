
// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) { //call funtion
    let total = 0; //start total at 0
  
    for (let key in allPayments) { //use the key in allPayments
      let payment = allPayments[key]; //set payment 
  
      total += Number(payment[type]); //increment the total when adding a bill to the total
    }
  
    return total; //save the new total
  }
  
  // converts the bill and tip amount into a tip percent
  function calculateTipPercent(billAmt, tipAmt) { //call a function
    return Math.round(100 / (billAmt / tipAmt)); //return the tip percentage
  }
  
  // expects a table row element, appends a newly created td element from the value
  function appendTd(tr, value) { //call function
    let newTd = document.createElement('td'); //create new td
    newTd.innerText = value; //sets the text inside the td to the value
  
    tr.append(newTd); //add the new information to the table
  }
  
  // append delete button and click handler for removing server from allServers and DOM td
  function appendDeleteBtn(tr, type) { //call function
    let newTd = document.createElement('td'); //creates new td
    newTd.className = 'deleteBtn'; //sets the class to delete button
    newTd.innerText = 'X'; //makes an 'X' for the delete button
  
    newTd.addEventListener('click', removeEle); //creates the eventlistener for the delete button
  
    tr.append(newTd); //adds tr to the newTD
  }
  
  function removeEle(evt) { //call function
    let ele = evt.target.closest('tr'); //sets an event target for the click
  
    delete allServers[ele.id]; //tells the dom to delete the row associated with the clicked element
  
    ele.parentNode.removeChild(ele); //removes the parentNode of the click
    updateServerTable(); //update the table so the row is removed
  }