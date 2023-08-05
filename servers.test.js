describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  afterEach(function() {
    // teardown logic
   serverTbody.deleteRow(0);
  });
});

describe('add the tips to the tip pool', function () {
  beforeEach(function () {
    tipAmtInput.value = 10;
  })
  
  it('should create table row element and pass to appendTd function with input value', function() {
    updateServerTable();

    expect(Object.keys(tipAmt)).toEqual(10);
    expect(tipAmt['payment' + paymentId].toBeDefined());

    afterEach( function() {
      tipAmt.value = '0';
    })
  })
});
