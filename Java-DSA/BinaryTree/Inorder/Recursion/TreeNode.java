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
       
       dfs(node.left);
       output.add(node.val);
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