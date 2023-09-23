var istatus = document.querySelector('h5')


var addFreind = document.querySelector('#add-freind')
flag =0;

addFreind.addEventListener('click',function(){

    if(flag == 0){
        addFreind.innerHTML = "Remove Freind";
        istatus.innerHTML = "Request Sent" ;
        istatus.style.color = "green";
    flag = 1;

    }
    else{
        addFreind.innerHTML = "Add Freind";
        istatus.innerHTML = "Stranger" ;
        istatus.style.color = "Red";
    alert("Request Revoked");
    flag = 0;

    }
    
})