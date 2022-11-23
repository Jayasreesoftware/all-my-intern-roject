let inputText=document.getElementById('int');
let button=document.getElementById('btn');
let span=document.getElementById('spn');

const print =()=>{
    
    
    if(inputText.value==90){
        
        console.log('we selected the scoop')
        span.innerHTML="we selected the scoop"
        span.style.color="red"
        document.getElementById('main').style.backgroundImage="url(https://plus.unsplash.com/premium_photo-1661510680786-2218882673a7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=967&q=80)"
    
        document.getElementById('main').style.backgroundRepeat="no-repeat"
        document.getElementById('main').style.backgroundPosition="center"
        document.getElementById('main').style.backgroundSize="cover"
        

    }
    else if(inputText.value==200){
       
       
        span.innerHTML="we selected the cone"
         span.style.color="blue"
    document.getElementById('main').style.backgroundImage="url(https://images.unsplash.com/photo-1586775490184-b79f0621891f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2hpdGUlMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)"
    
     document.getElementById('main').style.backgroundRepeat="no-repeat"
     document.getElementById('main').style.backgroundPosition="center"
     document.getElementById('main').style.backgroundSize="cover"

    }
    else{
        span.innerHTML="we don't selected on this price"
        span.style.color="green"
        document.getElementById('main').style.backgroundImage="url(https://images.unsplash.com/photo-1454944338482-a69bb95894af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGUlMjBpbWFnZXN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60)"
    
        document.getElementById('main').style.backgroundRepeat="no-repeat"
        document.getElementById('main').style.backgroundPosition="center"
        document.getElementById('main').style.backgroundSize="cover"

    }
}


