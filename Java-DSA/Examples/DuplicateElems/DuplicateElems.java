import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class DuplicateElems {
    public /*static*/ List<Integer> findDuplicates(int[] nums){
        List<Integer> ans= new ArrayList<>();
        Set<Integer> seen= new HashSet<>();

        for(int num: nums){
            if(seen.contains(num)){
                ans.add(num);
            }else{
                seen.add(num);
            }
        }
        return ans;
    }

    public static void main(String[] args){
        DuplicateElems obj= new DuplicateElems();
        int[] nums= {4,3,2,7,8,2,3,1};
        //System.out.println(findDuplicates(nums));
        System.out.println(obj.findDuplicates(nums));
    }
}
