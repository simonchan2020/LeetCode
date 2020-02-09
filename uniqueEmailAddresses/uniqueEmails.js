// Every email consists of a local name and a domain name, separated by the @ sign.

// For example, in simon@leetcode.com, simon is the local name, and leetcode.com is the domain name.

// Besides lowercase letters, these emails may contain '.'s or '+'s.

// If you add periods ('.') between some characters in the local name part of an email address, mail sent there will be
// forwarded to the same address without dots in the local name.
// For example, "simon.c@leetcode.com" and "simonc@leetcode.com" forward to the same email address.  (Note that this rule does not apply for domain names.)

// If you add a plus ('+') in the local name, everything after the first plus sign will be ignored. This allows certain emails to be filtered,
// for example m.y+name@email.com will be forwarded to my@email.com.  (Again, this rule does not apply for domain names.)
// It is possible to use both of these rules at the same time.
// Given a list of emails, we send one email to each address in the list.  How many different addresses actually receive mails?
// Input: ["test.email+simon@leetcode.com","test.e.mail+bob.smith@leetcode.com","testemail+paul@lee.tcode.com"]
// Output: 2
// Explanation: "testemail@leetcode.com" and "testemail@lee.tcode.com" actually receive mails

/**
 * Every email address is valid. How many unique mails are actually sent?
 * @param {string[]} emails
 * @return {number}
 */
const numUniqueEmails = function(emails) {
    let uniqueEmails = new Set();
    for (email of emails) {
        // Split up local name and domain name using the @ symbol
        let names = email.split('@');
        let localName = names[0];
        let domainName = names[1];
        // Remove all instances of . from local name
        localName = localName.split('.').join('');
        // Remove everything after the +
        localName = localName.split('+')[0];
        // Add the full email to a set, which will automatically discard duplicates
        uniqueEmails.add(localName + '@' + domainName);
    }
    // Return the Set's size
    return uniqueEmails.size;
};

module.exports = numUniqueEmails;
