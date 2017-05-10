window.onload = function() {
    if(localStorage.getItem("counter")==null){
        var records= document.getElementById('records');
        var records2=localStorage.getItem("counter");
        records.innerHTML="0";
    }
    else{
        var records= document.getElementById('records');
        var records2=localStorage.getItem("counter");
        records.innerHTML=records2;
    }

    for(var i=1; i<=localStorage.getItem("counter");i++){
        var p = document.createElement('p');
        p.innerHTML=localStorage.getItem(i);
        document.getElementById('allscores').appendChild(p);
//        alert(localStorage.getItem(i));
    }
}
if(localStorage.getItem("counter")>0){
    var counter=localStorage.getItem("counter");
}
else{
    var counter=0;
}





function add(){  
    
    var name = document.getElementById('name').value;
    var secondname=document.getElementById('secondname').value;
    var datebirth = document.getElementById('datebirth').value;
    var email = document.getElementById('email').value;
    var pesel = document.getElementById('pesel').value;
    var nip = document.getElementById('nip').value;
    var prawa = document.getElementById('prawa').value;
    var konto = document.getElementById('konto').value;
    
    
    counter++;
    
//    alert(counter);
    
    localStorage.setItem(counter, name + "  " + secondname + ", " + datebirth + ", " + email + ", " + pesel + ", " + nip + ", " + prawa + ", " + konto);
    localStorage.setItem("counter",counter);
    
    
    
    var p = document.createElement('p');
    p.innerHTML=name +"  " + secondname;
    document.getElementById('allscores').appendChild(p);
    var records= document.getElementById('records');
    var records2=localStorage.getItem("counter");
    
}
function clearall(){
    localStorage.clear();
    location.reload();
    
}