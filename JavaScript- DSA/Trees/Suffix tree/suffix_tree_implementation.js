/*
- Use of hashtables, objects where every node in the trie, in the suffix trie
will be a key in a hashtable pointing to another hashtable.
- All the values in hashtable to which it points will be other nodes in the
trie, whose keys will be a specifc letter that comes after the previous letter
and that points to another hashtable.

Searching
Time: O(M) , M= length of string which we are searching in suffix tree
Space: O(1), not storing any extra space

Creation
Time: O(N*N), N= input string that we are looking for. 
- Iterate through all of the suffixes and then all of their characters.

Space: O(N*N), worst case

Useful for problems: finding strings, searching for strings, matching strings

*/

/**
 * Implementation:
 * Root node= empty string points to empty object
 * EndSymbol to denote end of every suffix in the trie.
 * creation method.
 * 
 * populateSuffixTrieFrom(string):
 * populating the suffix trie from a string is going to involve iterating through all the suffixes and adding them, one by one to the trie.
 * A for loop through every char in string.
 * Insert particular suffix that we are currently looking at.
 * 
 * A method to insert a string in our suffix trie. This includes a process checking whether or not a certain character is already sorted in a trie or not.
 * Define node that is current node, which is root node.
 * Start iterating through all the characters in a string
 */

 class SuffixTrie {
    constructor(string) {
      this.root = {};
      this.endSymbol = '*';
      this.populateSuffixTrieFrom(string);
    }
  
    populateSuffixTrieFrom(string) {
      // Write your code here.
      for(let i=0; i< string.length; i++){
        this.insertSubstringStartingAt(i, string);
      }
    }
  
    insertSubstringStartingAt(i, string){
      let node= this.root;
      for(let j=i; j< string.length; j++){
        let letter= string[j];
        if(!(letter in node))  node[letter]={};
        node= node[letter];
      }
      node[this.endSymbol]= true;
    }
  
  
    contains(string) {
      // Write your code here.
      let node= this.root;
      for(const letter of string){
        if(!(letter in node))  return false;
        node= node[letter];
      }
      return this.endSymbol in node;
    }
  }
