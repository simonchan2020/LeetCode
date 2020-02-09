const assert = require('assert');
const uniqueEmails = require('./uniqueEmails');

describe('Unique Email Addresses', function() {
  describe('#uniqueEmails()', function() {
    it ('should validate . in the local name', function() {
        assert.equal(uniqueEmails(['test.email@gmail.com', 'test.oiewfjoiejf@leet.net']), 2)
    });
    it('should validate ., +, and @ correctly', function() {
      assert.equal(uniqueEmails(["test.email+simon@leetcode.com","test.e.mail+bob.smith@leetcode.com","testemail+paul@lee.tcode.com"]), 2);
    });
    it('should allow unique domain names but duplicate local names', function() {
        assert.equal(uniqueEmails(["testemail@leetcode.com","testemail1@leetcode.com","testemail+david@lee.tcode.com"]), 3);
      });
  });
});
