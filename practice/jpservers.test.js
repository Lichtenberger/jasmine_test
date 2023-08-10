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

    it('should expect serverName to have a length of at least 1', function() {
        expect(Object.keys(serverNameInput).length).toBeDefined();
        expect(serverNameInput.length).not.toEqual(0);
    })
  
    afterEach(function() {
      // teardown logic
      serverNameInput.value = '';
      serverTbody.innerHTML = '';
      allServers = {};

    });
  });