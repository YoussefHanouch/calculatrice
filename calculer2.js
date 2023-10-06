function egale(){
    let N1=document.getElementById("nb1").value;
    let N2=document.getElementById("nb2").value;
    let res=document.getElementById("ress");
 
    //recherche operation
     let addition =document.getElementById("add");
     let soustr =document.getElementById("sous");
     let division =document.getElementById("div");
     if(addition.checked){
        res.innerHTML=parseFloat(N1)+parseFloat(N2);
     }
     if(soustr.checked){
         res.innerHTML=parseFloat(N1)-parseFloat(N2);
     }
     if(division.checked){
         if(N2!=0){
             res.innerHTML=parseFloat(N1)/parseFloat(N2)
         }
         else{
             alert("opperation n'est pas coucher");
         }
     }

}