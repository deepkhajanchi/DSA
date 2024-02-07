//https://leetcode.com/problems/implement-trie-prefix-tree/
/**
 * Time: O(m), In each iteration of the algorithm, 
 * we either examine or create a node in the trie till we reach the end of the key. This takes only m operations.
 * 
 * Space: O(m), In the worst case newly inserted key doesn't share a prefix with the the keys already inserted in the trie. 
 * We have to add mm new nodes, which takes us O(m) space.
 */

// Start with the TrieNode
const TrieNode = function (key) {
    // the "key" value will be the character in sequence
    this.key = key;
    
    // we keep a reference to parent
    this.parent = null;
    
    // we have hash of children
    this.children = {};
    
    // check to see if the node is at the end
    this.end = false;
    
    this.getWord = function() {
      let output = [];
      let node = this;
  
      while (node !== null) {
        output.unshift(node.key);
        node = node.parent;
      }
  
      return output.join('');
    };
}

const Trie = function() {
    this.root = new TrieNode(null);
    
    // inserts a word into the trie.
    // T.C: O(m), m = length of key
    // S.C: O(m)
    this.insert = function(word) {
      let node = this.root; // we start at the root
  
      // for every character in the word
      for(let i = 0; i < word.length; i++) {
        // check to see if character node exists in children.
        if (!node.children[word[i]]) {
          // if it doesn't exist, we then create it.
          node.children[word[i]] = new TrieNode(word[i]);
  
          // we also assign the parent to the child node.
          node.children[word[i]].parent = node;
        }
  
        // proceed to the next depth in the trie.
        node = node.children[word[i]];
  
        // finally, we check to see if it's the last word.
        if (i == word.length-1) {
          // if it is, we set the end flag to true.
          node.end = true;
        }
      }
    };

    // check if it contains a whole word.
    // T.C: O(m), m = length of key
    // S.C: O(1)
  this.contains = function(word) {
    let node = this.root;

    // for every character in the word
    for(let i = 0; i < word.length; i++) {
      // check to see if character node exists in children.
      if (node.children[word[i]]) {
        // if it exists, proceed to the next depth of the trie.
        node = node.children[word[i]];
      } else {
        // doesn't exist, return false since it's not a valid word.
        return false;
      }
    }

    // we finished going through all the words, but is it a whole word?
    return node.end;
  };

  // returns every word with given prefix
  // T.C: O(m), m = length of key
  // S.C: O(m)
  this.find = function(prefix) {
    let node = this.root;
    let output = [];

    // for every character in the prefix
    for(let i = 0; i < prefix.length; i++) {
      // make sure prefix actually has words
      if (node.children[prefix[i]]) {
        node = node.children[prefix[i]];
      } else {
        // there's none. just return it.
        return output;
      }
    }

    // recursively find all words in the node
    findAllWords(node, output);

    return output;
  };

  // recursive function to find all words in the given node.
  const findAllWords = (node, arr) => {
    // base case, if node is at a word, push to output
    if (node.end) {
      arr.unshift(node.getWord());
    }

    // iterate through each children, call recursive findAllWords
    for (let child in node.children) {
      findAllWords(node.children[child], arr);
    }
  }

  // removes a word from the trie.
  this.remove = function (word) {
    let root = this.root;

    if(!word) return;

    // recursively finds and removes a word
    const removeWord = (node, word) => {

        // check if current node contains the word
        if (node.end && node.getWord() === word) {

            // check and see if node has children
            let hasChildren = Object.keys(node.children).length > 0;

            // if has children we only want to un-flag the end node that marks the end of a word.
            // this way we do not remove words that contain/include supplied word
            if (hasChildren) {
                node.end = false;
            } else {
                // remove word by getting parent and setting children to empty dictionary
                node.parent.children = {};
            }

            return true;
        }

        // recursively remove word from all children
        for (let key in node.children) {
            removeWord(node.children[key], word)
        }

        return false
    };

    // call remove word on root node
    removeWord(root, word);
  };
}

const trie = new Trie();

// insert few values
trie.insert("peter");
trie.insert("piper");
trie.insert("picked");
trie.insert("pickled");
trie.insert("pepper");

// check contains method
console.log(trie.contains("picked"));  
console.log(trie.contains("pepper")); 
trie.remove("pepper");
// check find method
console.log(trie.find("pi"));  
console.log(trie.find("pe")); 

/*
class Trie {
    constructor() {
        this.root = {};
    }

    insert(word) {
        let node = this.root;
        for (let c of word) {
        if (node[c] == null) node[c] = {};
        node = node[c];
        }
        node.isWord = true;
    }

    traverse(word) {
        let node = this.root;
        for (let c of word) {
        node = node[c];
        if (node == null) return null;
        }
        return node;
    }

    search(word) {
        const node = this.traverse(word);
        return node != null && node.isWord === true;
    }

    startsWith(prefix) {
        return this.traverse(prefix) != null;
    }
}
  */

var SnakeGame = function(width, height, food) {
  this.occupied = [[0, 0]];
  this.set = new Set();
  this.score = 0;
  this.width = width;
  this.height = height;
  this.foods = food;
  this.foodIdx = 0;
  
  this.currX = 0;
  this.currY = 0;
  
  this.moves = {
      "U": [-1, 0],
      "L": [0, -1],
      "D": [1, 0],
      "R": [0, 1]
  };
};
