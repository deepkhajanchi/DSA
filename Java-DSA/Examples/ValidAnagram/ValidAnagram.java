import java.util.Arrays;

public class ValidAnagram {

    public boolean checkAnagram(String str1, String str2){
        if(str1.length() != str2.length())  return false;
        char[] str1_arr= str1.toCharArray();
        char[] str2_arr= str2.toCharArray();  
        Arrays.sort(str1_arr);
        Arrays.sort(str2_arr);
        return Arrays.equals(str1_arr, str2_arr);
    }    

    public static void main(String[] args) {
        ValidAnagram obj= new ValidAnagram();
        System.out.println(obj.checkAnagram("anagram", "aangram"));
    }
}
