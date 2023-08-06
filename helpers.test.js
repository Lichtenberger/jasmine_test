describe('Testing the payment total', function() {
  beforeEach(function() {
    total.value = 10;
  });

  it("accepts 'tipAmt' and sums total", function() {
    expect(Object.keys(total)).toEqual(10);
  });

  afterEach(function() {
    total.value = 0;
  });
});

describe('converts the bill and tip amount into a tip percent', function() {
  beforeEach(function() {
    total.value = (100 / (50 / 5));
  });
  it('converts the bill and tip amount into a tip percent calculateTipPercent()', function() {
    expect(total.value).toBeDefined();
    expect(total.value).toEqual(10);
  });
  afterEach(function() {
    total.value = 0;
  })
})
