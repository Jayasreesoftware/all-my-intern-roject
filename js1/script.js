const show=()=>{
    document.getElementById('p1').style.display="flex"
}
const sav=()=>{
    document.getElementById('p1').style.display="none"
}
const btn=(b)=>{
    if(b==1){
        document.getElementById('tech').style.display="block"
        document.getElementById('tech1').style.display="none"
        document.getElementById('tech2').style.display="none"
    }
       else if(b==2){
        document.getElementById('tech').style.display="none"
        document.getElementById('tech1').style.display="block"
        document.getElementById('tech').style.display="none"
    }
       else if(b==3){
        document.getElementById('tech').style.display="none"
        document.getElementById('tech1').style.display="none"
        document.getElementById('tech2').style.display="block"
    }
}
const remov=(b)=>{
    if(b==1){
        document.getElementById('tech').style.display="none"
        document.getElementById('tech1').style.display="none"
        document.getElementById('tech2').style.display="none"
    }
       else if(b==2){
        document.getElementById('tech').style.display="none"
        document.getElementById('tech1').style.display="none"
        document.getElementById('tech').style.display="none"
    }
       else if(b==3){
        document.getElementById('tech').style.display="none"
        document.getElementById('tech1').style.display="none"
        document.getElementById('tech2').style.display="none"
    }
}