const form = document.getElementById("form3");

form.addEventListener('submit',(e)=>{
    (e).preventDefault();
});
let Name = localStorage.getItem("name");
document.getElementById("user_name").innerHTML = Name;
function send_money(){
    let balance= 100;
    let phone = document.getElementById("amount").value.trim();
    let pin = document.getElementById("passcode").value.trim();
    let trans = document.getElementById("amount").value.trim();
    if(phone!= "" && trans != "" && pin!= ""){
        if (trans<=100){
            balance=balance-trans;
            document.getElementById("total_balance").innerHTML = "$"+balance;
            alert("Money transferred successfully");
        }
        else{
            alert("you don't have sufficient balance");
        }
    }
}