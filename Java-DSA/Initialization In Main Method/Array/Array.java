import java.util.Arrays;
import java.util.List; 

public class Array {
	public static void main(String[] args){ 

        //toString
		int[] arr= new int[3]; 
		arr[0] = 1; 
		arr[1] = 2; 
		arr[2] = 3; 
		System.out.println(Arrays.toString(arr)); 

        // accessing element at index 2
        int[] arr1 = { 1, 2, 3, 4 };
        System.out.println(arr1[2]);

        //asList
        Integer arr2[] = { 10, 20, 11, 21, 31 };
        List<Integer> arrList= Arrays.asList(arr2);
        System.out.println("Integer Array as List: " + arrList);

        //sort and binarySearch
        int Arr[] = { 10, 20, 11, 21, 31 };
		Arrays.sort(Arr);
		int Key = 31;
		System.out.println(Key + " found at index = "+ Arrays.binarySearch(Arr, Key));

        //copyOf
        int Arr1[] = { 10, 20, 11, 21, 31 };
		System.out.println("Integer Array is: "+ Arrays.toString(Arr));
		System.out.println("\nNew Arrays by copyOf is:\n");
		System.out.println("Integer Array is: "+ Arrays.toString(Arrays.copyOf(Arr1, 10)));

        //2D array
        int[][] matrix = { { 4, 5 }, { 34, 67 }, { 8, 9 } };
        for (int i = 0; i < 3; i++) {
            // The inner loop iterates through each column
            // of the array
            for (int j = 0; j < 2; j++) {
                // Print the value of the current element to
                // the console
                System.out.println("matrix[" + i + "][" + j+ "]=" + matrix[i][j]);
            }
        }
	}
}