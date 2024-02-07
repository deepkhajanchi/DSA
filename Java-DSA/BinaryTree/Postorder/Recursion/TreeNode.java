import java.util.ArrayList;
import java.util.List;

public class TreeNode {
    int val;
    TreeNode left;
    TreeNode right;
    TreeNode() {}
    TreeNode(int val) { this.val = val; }
    TreeNode(int val, TreeNode left, TreeNode right){
        this.val= val;
        this.left= left;
        this.right= right;
    }    
}
/*
Recursion
- if root is not null,
    - Start with root.left, then root.right and then root.val
    - push all the values in list and return it.
Time:O(n), Space:O(n)
*/

class Solution {
    private List<Integer> answer= new ArrayList<>(); 
    private TreeNode root;

    public void dfs(TreeNode root){
        if(root == null)    return;
        dfs(root.left);
        dfs(root.right);
        answer.add(root.val);
    }
    public List<Integer> postorderTraversal(TreeNode root) {
        dfs(root);
        return answer;
    }
    public static void main(String[] args) {
        Solution sol= new Solution();
        sol.root= new TreeNode(3);
        sol.root.left= new TreeNode(12);
        sol.root.right= new TreeNode(9);
        sol.root.left.left= new TreeNode(5);
        sol.root.right.left= new TreeNode(6);
        System.out.println(sol.postorderTraversal(sol.root));
    }
}
