import java.util.ArrayList;
import java.util.List;

public class TreeNode {
     int val;
     TreeNode left;
     TreeNode right;
     TreeNode() {}
     TreeNode(int val) { this.val = val; }
     TreeNode(int val, TreeNode left, TreeNode right) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    private List<Integer> output= new ArrayList<>();
    private TreeNode root;
    
    private void dfs(TreeNode node){
        if(node == null)    return;
        
        output.add(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    
    public List<Integer> preorderTraversal(TreeNode root) {
        dfs(root);
        return output;
    }

    public static void main(String[] args) {
      Solution sol=new Solution();
      sol.root= new TreeNode(1);
      sol.root.left= new TreeNode(12);
      sol.root.right= new TreeNode(9);
      sol.root.left.left= new TreeNode(5);
      sol.root.right.left= new TreeNode(6);
      System.out.println(sol.root);
      System.out.println( sol.preorderTraversal(sol.root));
    }
}
/*
class Node {
    int item;
    Node left, right;
  
    public Node(int key) {
    item = key;
    left = right = null;
    }
  }

class Tree {
    // root of Tree
    Node root;
  
    Tree() {
      root = null;
    }
  
    void preorder(Node node) {
      if (node == null)
        return;
  
      // traverse the root node
      System.out.print(node.item + "->");
      // traverse the left child
      preorder(node.left);
      // traverse the right child
      preorder(node.right);
    }
  
    public static void main(String[] args) {
      // create object of tree
      Tree tree = new Tree();
  
      // create nodes of the tree
      tree.root = new Node(1);
      tree.root.left = new Node(12);
      tree.root.right = new Node(9);
      tree.root.left.left = new Node(5);
      tree.root.left.right = new Node(6);
  
      // preorder tree traversal
      System.out.println("\nPreorder traversal ");
      tree.preorder(tree.root);
    }
  }
*/