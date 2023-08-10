describe('helpers test totalling the bill, tip, and tipPercentage', function() {
    beforeEach(function () {
        billAmt = 10;
        tipAmt = 2;
        tipPercent = 20;
    });
    it('should add the bill and tip amounts to total shift amounts  sumPaymentTotal()', function() {
        expect(billAmt).toBeDefined();
        expect(billAmt).toEqual(10);
        expect(tipAmt).toBeDefined();
        expect(tipAmt).toEqual(2);
    });
    it('should test the tipPercent()', function() {
        expect(billAmt).toBeDefined();
        expect(billAmt).toEqual(10);
        expect(tipAmt).toBeDefined();
        expect(tipAmt).toEqual(2);
        expect(tipPercent).toBeDefined();
        expect(tipPercent).toEqual(20);
        expect(tipPercent).not.toEqual(25);
    });
    afterEach(function () {
        billAmt = 0;
        tipAmt = 0;
        tipPercent = 0;
    })

})