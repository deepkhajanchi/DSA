import java.util.Arrays;

public class sessionTime {
    public int minSessions(int[] tasks, int sessionTime) {
        Arrays.sort(tasks);
        int sum = 0; 
        for (int t: tasks){
            sum += t;
        }
        
        // descending tasks
        // so canWork will fit the most time consuming tasks first
        // which will help canWork return earlier. 
        int s = 0; 
        int e = tasks.length - 1; 
        while (s < e){
            int tmp = tasks[s]; 
            tasks[s] = tasks[e];
            tasks[e] = tmp;
            s++;
            e--;
        }
        
        // minimum seesion number needed 
        int sessionLeast = sum / sessionTime;
        if (sum % sessionTime > 0){
            sessionLeast += 1;
        }
        
        for (int i = sessionLeast; i <= tasks.length; i++){
            int[] bucket = new int[i];
            Arrays.fill(bucket, sessionTime);
            if (canWork(0, tasks, bucket)){
                return i;
            }
        }
        
        return -1;
        
    }
    
    public boolean canWork(int curIdx, int[] tasks, int[] bucket){
        if (curIdx == tasks.length){
            return true;
        }
        
        // for task curIdx, we only need to try to fit it in the first 
        // curIdx bucket or bucket.length -1 which is smaller. 
        
        for (int i = 0; i <= Math.min(curIdx, bucket.length - 1); i++){
            if (bucket[i] >= tasks[curIdx]){
                bucket[i] -= tasks[curIdx];
                boolean res = canWork(curIdx + 1, tasks, bucket);
                if (res) return true;
                bucket[i] += tasks[curIdx];
            }
        }
        return false;
    }

    public static void main(String[] args) {
        sessionTime obj= new sessionTime();
        int[] arr={1,3,1,3,1};
        System.out.println(obj.minSessions(arr,10));
    }
}
