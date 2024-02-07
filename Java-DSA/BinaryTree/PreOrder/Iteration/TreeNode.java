import java.util.ArrayList;
import java.util.List;
import java.util.Stack;

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

class Solution{
    private TreeNode root;

    public List<Integer> inorderTraversal(TreeNode root){
        List<Integer> answer= new ArrayList<>();
        Stack<TreeNode> stack= new Stack<>();

        stack.push(root);
        while(!stack.isEmpty()){
            TreeNode cur= stack.peek();
            stack.pop();
            if(cur != null){
                answer.add(cur.val);
                stack.add(cur.right);
                stack.add(cur.left);
            }
        }
        return answer;
    }

    public static void main(String[] args) {
        Solution sol= new Solution();
        sol.root= new TreeNode(3);
        sol.root.left= new TreeNode(12);
        sol.root.right= new TreeNode(9);
        sol.root.left.left= new TreeNode(5);
        sol.root.right.left= new TreeNode(6);
        System.out.println(sol.inorderTraversal(sol.root));
    }
}
