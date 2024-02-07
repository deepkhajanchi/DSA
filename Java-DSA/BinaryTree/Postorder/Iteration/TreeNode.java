import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

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
    private TreeNode root;
    public List<Integer> postorderTraversal(TreeNode root) {
        List<Integer> output = new ArrayList<>();
        Stack<TreeNode> stack = new Stack<>();
        
        while (root != null || !stack.isEmpty()) {
            if(root != null) {
                stack.push(root);
                root = root.left;    
            }else{
                TreeNode temp= stack.peek().right;
                if(temp == null){
                    temp=stack.pop();
                    output.add(temp.val);
                    while(!stack.isEmpty() && temp == stack.peek().right){
                        temp=stack.pop();
                        output.add(temp.val);
                    }
                }else   root= temp;
            }
        }
        return output;
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
