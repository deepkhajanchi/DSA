public class MyRunnable implements Runnable{
    private String name;
    public MyRunnable(String name){
        this.name= name;
    }
    @Override
    public void run() {
        // TODO Auto-generated method stub
        System.out.println("Started thread: "+name);
        try{
            Thread.sleep(1000);
        }catch(InterruptedException e){
            e.printStackTrace();
        }
        System.out.println("Ended thread: "+name);
    }
}
