package SpringProgram1.bean;

public class Students {
    
    private String name;
    private String email;
    private int rollNo;

    public String getName(){
        return this.name;
    }

    public String getEmil(){
        return this.email;
    }

    public int getRollNo(){
        return this.rollNo;
    }

    public void setName(String name){
        this.name = name;
    }

    public void setEmail(String email){
        this.email = email;
    }

    public void setRollNo(int rollNo){
        this.rollNo = rollNo;
    }
}
