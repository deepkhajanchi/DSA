public class MultithreadThing extends Thread{
    
    private  int threadNumber;
    public MultithreadThing(int threadNumber){
        this.threadNumber= threadNumber;
    }
    @Override
    //beacause we are overriding thread class's run method
    public void run(){
        for(int i=0; i<=5; i++){
            System.out.println(i+ "from thread" + threadNumber);
            if(threadNumber == 3){
                throw new RuntimeException();
            }
            try {
                Thread.sleep(1000);
            } catch (InterruptedException e) {
                // TODO Auto-generated catch block
                e.printStackTrace();
            }
        }
    }
}