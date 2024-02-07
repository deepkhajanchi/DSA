import java.util.Arrays;
import java.util.List;
import java.util.Map;
import java.util.function.Function;
//import java.util.stream.Collector;
import java.util.stream.Collectors;

public class words {
    
    public static void main(String[] args){
        String str= "Welcome to Java and Java welcome you";

        //map that store word->frequency as key-value pair
        // 
        List<String> list= Arrays.asList(str.split(" "));
        Map<String, Long> map= list.stream().collect(Collectors.groupingBy(Function.identity(), Collectors.counting()));
        //Function<String, String> fn= Function.identity();
        System.out.println(map);
    }
}
