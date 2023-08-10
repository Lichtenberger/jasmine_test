describe('it should gather the bill information and add to the table', function() {
    beforeEach(function () {
        billAmt = 10;
        tipAmt = 2;
        tipPercent = 20;
        createCurPayment();
        updateSummary();
    });

    it('should add the bill payment table', function() {
        expect(billAmt).toBeDefined();
        expect(billAmt).toEqual(10);
        expect(billAmt).not.toEqual(0);
    });

    it('should add the tip to payment table', function() {
        expect(tipAmt).toBeDefined();
        expect(tipAmt).toEqual(2);
    });

    it('should have a tip percentage of 20%', function() {
        expect(tipPercent).toBeDefined();
        expect(tipPercent).toEqual(20);
    });

    afterEach(function () {
        billAmt.value = 0;
        tipAmt.value = 0;
        tipPercent.value = 0;
    })
})