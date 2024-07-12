function User(name,email,mobile,photo){
    this.name=name;
    this.email=email;
    this.mobile=mobile;
    this.photo=photo;

}


function Expense(description, amount){
    this.description=description;
    this.amount=amount;
    this.isSetteled=false;
    this.date=new Date();

}

function Splitcostapp(){
    this.unsettleAmount=0;
    this.users=[];
    this.expenses=[]
}