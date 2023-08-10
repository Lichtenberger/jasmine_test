describe('it should gather the bill information and add to the table', function() {
    beforeEach(function () {
        billAmt = 10;
        tipAmt = 2;
        tipPercent = 20;
        createCurPayment();
        updateSummary();
    });

    it('should make sure the bill and tip have values createCurPayment()', function() {
        expect(billAmt).toBeDefined();
        expect(billAmt).not.toEqual(0);
        expect(billAmt).toEqual(10);
        expect(tipAmt).toBeDefined();
        expect(tipAmt).toEqual(2)
    });

    afterEach(function () {
        billAmt.value = 0;
        tipAmt.value = 0;
        tipPercent.value = 0;
    })
});