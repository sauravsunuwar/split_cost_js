function User(name, email, mobile, photo) {
    this.name = name;
    this.email = email;
    this.mobile = mobile;
    this.photo = photo;

}


function Expense(description, amount) {
    this.description = description;
    this.amount = amount;
    this.isSetteled = false;
    this.date = new Date();

}

function SplitCostApp() {
    this.unsettledAmount = 0;
    this.users = [];
    this.expenses = [];
    


    this.displayUnsettledAmount = function () {
        document.querySelector(".amount").textContent = `$${this.unsettledAmount}`;

    }
    this.addUser = function (name, email, mobile, photo) {
        const user = new User(name, email, mobile, photo);
        this.users.push(user);

    }

    this.displayUsers = function () {
        let userElements = '';
        for(let user of this.users){
            userElements +=`<div><img src="${user.photo}" alt="${user.html}" /></div>`

          }
          document.querySelector(".users-wrapper").innerHTML = userElements;

    }
    this.displayExpenses = function(){
        let expenseElements = '';
        for (let expense of this.expenses){
            expenseElements +=`<div class="expenses-item">
                <div>
                    <spam>${expense.description}</spam>
                    <spam>${expense.amount}</spam>
                </div>
                <div class="date">${expense.date} </div>

            </div>`
        }
        document.querySelector(".expenses-wrapper").innerHTML = expenseElements;
    }
    this.addExpenses = function(event) {
        event.preventDefault();
        console.log('Adding expenses......')
        const description = document.querySelector('#description').value;
        if(description && amount){
        const amount = document.querySelector("#amount").value;
        const expense = new Expense (description, amount);
        this.expenses.unshift(expense);
        this.displayExpenses();
        document.querySelector("form").reset();
        this.calculateUnsettleAmount();
        this.displayUnsettledAmount();
        
    }
    }
    this.calculateUnsettleAmount = function(){
        let total = 0;
        for (let expense of this.expenses){
            total = total + Number(expense.amount);

        }
        const unsettledAmount = total / this.users.length;
        this.unsettledAmount = unsettledAmount;
    }

    this.addNewEventListener = function(){
        document.querySelector ("form").addEventListener("submit", (event) =>{
            this.addExpenses(event);
        } );
    }
}


const splitCostApp = new SplitCostApp();
splitCostApp.addNewEventListener();
splitCostApp.displayUnsettledAmount();
console.log(splitCostApp);

splitCostApp.addUser('Alex', 'alex@gmail.com', '451864455', 'https://randomuser.me/api/portraits/men/57.jpg');
splitCostApp.addUser('Rob', 'Rob@gmail.com', '451864335', 'https://randomuser.me/api/portraits/men/78.jpg');
splitCostApp.addUser('Garry', 'Gary@gmail.com', '451863455', 'https://randomuser.me/api/portraits/men/54.jpg');
splitCostApp.addUser('FIn', 'fin@gmail.com', '45186344355', 'https://randomuser.me/api/portraits/men/17.jpg');







console.log({ splitCostApp });
splitCostApp.displayUsers();