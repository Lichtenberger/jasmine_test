describe("submitPaymentInfo", function() {
    it("should add a curPayment object to allPayments", function() {
      submitPaymentInfo();
      expect(Object.keys(allPayments).length).toEqual(1);
    });
  });

  // checks that the function returns undefined when the inputs are negative or empty and returns a curPayment object when the inputs are positive
  describe("createCurPayment", function() {
    it("should return undefined with negative or empty inputs", function() {
      billAmtInput.value = '-1';
      tipAmtInput.value = '0';
      expect(createCurPayment()).toBeUndefined();
    });
  
    it("should return undefined with empty inputs", function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
      expect(createCurPayment()).toBeUndefined();
    });
  
    it("should return a curPayment object with positive billAmt and tipAmt", function() {
      billAmtInput.value = '10';
      tipAmtInput.value = '2';
      expect(createCurPayment()).toEqual({
        billAmt: '10',
        tipAmt: '2',
        tipPercent: 20,
      });
    });
  });

  //checks that the appendPaymentTable function creates a table row element with the input value and that the updateSummary function updates the summary table with the calculated sum of all payments
  describe("appendPaymentTable", function() {
    it("should create a table row element with input value", function() {
      let curPayment = {
        billAmt: '10',
        tipAmt: '2',
        tipPercent: 20,
      };
      appendPaymentTable(curPayment);
      let newTr = document.getElementById('payment1');
      expect(newTr).toBeDefined();
      expect(newTr.children[0].innerHTML).toEqual('$10');
      expect(newTr.children[1].innerHTML).toEqual('$2');
      expect(newTr.children[2].innerHTML).toEqual('20%');
    });
  });
  
  describe("updateSummary", function() {
    it("should update summary table with calculated sum of all payment", function() {
      let curPayment1 = {
        billAmt: '10',
        tipAmt: '2',
        tipPercent: 20,
      };
      let curPayment2 = {
        billAmt: '20',
        tipAmt: '4',
        tipPercent: 20,
      };
      allPayments['payment1'] = curPayment1;
      allPayments['payment2'] = curPayment2;
      updateSummary();
      expect(summaryTds[0].innerHTML).toEqual('$30');
      expect(summaryTds[1].innerHTML).toEqual('$6');
      expect(summaryTds[2].innerHTML).toEqual('20%');
    });
  });