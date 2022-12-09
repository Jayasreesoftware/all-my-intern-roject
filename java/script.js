
const calc=(para)=>{
  let a=document.getElementById('txt').Value;
  let b=document.getElementById('txt1').Value;
  console.log(a,b)

  let c=Number(a)
  let d=Number(b)
 console.log(c,d)

  if(para=="plus"){

    document.getElementById('txt2').value=c+d;


  }
  else if(para=="divi"){

    document.getElementById('txt2').value=c/d;


  }
    else if(para=="mult"){

    document.getElementById('txt2').value=c*d;


  }
 
}