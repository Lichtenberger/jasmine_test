let billAmtInput = document.getElementById('billAmt'); //identify billAmtInput
let tipAmtInput = document.getElementById('tipAmt'); //identify tipAmtInput
let paymentForm = document.getElementById('paymentForm'); //identify paymentForm

let paymentTbody = document.querySelector('#paymentTable tbody'); //identify the paymentTable
let summaryTds = document.querySelectorAll('#summaryTable tbody tr td'); //identify the tds for paymentTable

let allPayments = {}; //start with an empty list
let paymentId = 0; //index of 0

paymentForm.addEventListener('submit', submitPaymentInfo); //add event listener for submitPaymentInfo form

// Add a curPayment object to allPayments, update html and reset input values
function submitPaymentInfo(evt) {
  if (evt) evt.preventDefault(); // when running tests there is no event

  let curPayment = createCurPayment(); //create a function to record current payment

  if (curPayment) { //confirms a curPayment
    paymentId += 1; //increase the payment index

    allPayments['payment' + paymentId] = curPayment; //adds the payment and index to curPayment

    appendPaymentTable(curPayment); //adds the curPayment information to the table
    updateServerTable(); //calls the updateServerTable function
    updateSummary(); //calls the updateSummary function

    billAmtInput.value = ''; //returns the bill input value to empty string 
    tipAmtInput.value = ''; //returns the tip input value to empty string
  }
}

// createCurPayment() will return undefined with negative or empty inputs
// positive billAmt is required but tip can be 0
function createCurPayment() {
  let billAmt = billAmtInput.value; //get the current bill amount input
  let tipAmt = tipAmtInput.value; //get the current tip amount input

  if (billAmt === '' || tipAmt === '') return; //verify there is a bill or tip amount

  if (Number(billAmt) > 0 && Number(tipAmt) >= 0) { //checking the bill amount is greater than 0 tip can be 0 or greater
    return { //return the following information
      billAmt: billAmt, //bill amount from billAmtInput.value
      tipAmt: tipAmt, //tip amount from tipAmtInput.value
      tipPercent: calculateTipPercent(billAmt, tipAmt), //tip percentage after the calculateTipPercent
    }
  }
}

// Create table row element and pass to appendTd with input value
function appendPaymentTable(curPayment) { //call function
  let newTr = document.createElement('tr'); //create a new tr
  newTr.id = 'payment' + paymentId; //set the id of payment and the id number to the tr

  appendTd(newTr, '$' + curPayment.billAmt); //add to the billAmt
  appendTd(newTr, '$' + curPayment.tipAmt); //add to the tipAmt
  appendTd(newTr, curPayment.tipPercent + '%'); //add to the percentage
  appendDeleteBtn(newTr, 'payment'); //adds the delete button

  paymentTbody.append(newTr); //adds the information to the payment table
}

// Create table row element and pass to appendTd with calculated sum of all payment
function updateSummary() { //call function
  let tipPercentAvg = sumPaymentTotal('tipPercent') / Object.keys(allPayments).length; //calculates the tipPercentAvg

  summaryTds[0].innerHTML = '$' + sumPaymentTotal('billAmt'); //sets the bill amount in the table
  summaryTds[1].innerHTML = '$' + sumPaymentTotal('tipAmt'); //sets the tip amount in the table
  summaryTds[2].innerHTML =  Math.round(tipPercentAvg) + '%'; //sets the tip percentage in the table
}