import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class RunnableDemo {
    public static void main(String[] args){

        /*Define how many thread needed to be created when server is up.
            Starting on server, we'll have 5 threads which are responsible
            to serve no. of reqs pass to executors
        */
        ExecutorService executorService= Executors.newFixedThreadPool(10);
        //create runnable object before passing it, 10 objects
        for(int i=0;i<10;i++){
            Runnable runnable= new MyRunnable("myworkerThread" + i);
            /*execute it
            - everytime it'll create an object, automatically start the thread
            and try to execute it
            */
            executorService.execute(runnable);
        }
        //once execution is done
        executorService.shutdown();
        /* 
            while executor service is not terminated,
            need to keep on waiting for all the service to finish
        */ 
        while(!executorService.isTerminated()){

        }
        System.out.println("All requests are completed.");
    }    
}

/*
 * When we set a threadpool size even though more tasks
 * are available, worker threads will be in queue until the previous ones
 * will be completed.
 * Once that will complete, remaining will be executed.
 */
