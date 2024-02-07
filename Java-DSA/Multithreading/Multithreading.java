import javax.management.RuntimeErrorException;

public class Multithreading {
    public static void main(String[] args){
        for(int i=0; i<=3; i++){
            MultithreadThing myThing= new MultithreadThing(i);
            myThing.start();

            /*
            While implementing Runnable interface
                MultithreadThing myThing= new MultithreadThing(i);
                Thread myThread= new Thread(myThing);
                myThread.start();
                myThread.join();    //waits for this thread to die
                myThread.isAlive(); //returns boolean
            */         
        }
        throw new RuntimeErrorException(null);
    }   
}
