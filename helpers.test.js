//sumPaymentTotal test
describe("sumPaymentTotal(type)", function() {
    it("should return the sum of all tipAmt values", function() {
      // Set up initial state
      allPayments = {
        payment1: {tipAmt: '5'},
        payment2: {tipAmt: '10'},
        payment3: {tipAmt: '15'}
      };
  
      // Call function to test
      let result = sumPaymentTotal('tipAmt');
  
      // Check if result is correct
      expect(result).toBe(30);
    });
  
    it("should return the sum of all billAmt values", function() {
      // Set up initial state
      allPayments = {
        payment1: {billAmt: '50'},
        payment2: {billAmt: '100'},
        payment3: {billAmt: '150'}
      };
  
      // Call function to test
      let result = sumPaymentTotal('billAmt');
  
      // Check if result is correct
      expect(result).toBe(300);
    });
  });

  //calculateTipPercent test checks the tip percentage
  describe("calculateTipPercent(billAmt, tipAmt)", function() {
    it("should return the correct tip percentage", function() {
      // Call function to test
      let result = calculateTipPercent(100, 20);
  
      // Check if result is correct
      expect(result).toBe(20);
    });
  });
  
  //make sure table creates properly
  describe("appendTd(tr, value)", function() {
    it("should append a new td element to the tr element", function() {
      // Set up initial state
      let tr = document.createElement('tr');
  
      // Call function to test
      appendTd(tr, 'Test');
  
      // Check if tr has a new td element
      expect(tr.children.length).toBe(1);
    });
  });
  