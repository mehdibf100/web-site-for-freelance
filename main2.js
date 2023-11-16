function free(){
    
    document.getElementById("content1").style.visibility="visible"
    ts=0;
}
function client(){
    document.getElementById("content1").style.visibility="visible"
    document.getElementById("content1").innerHTML=document.getElementById("content2").innerHTML;
ts=1;
}

 // check the validty of items 
function check(){
    var tx;
    var lname=document.getElementById("n1").value;
    
    lsname=document.getElementById("n2").value;
   
    mail=document.getElementById("n3").value;
    
 
    if((lname.length>10)){
        document.getElementById("pp1").innerHTML=' name not vailed';
       
    }
    if(lsname.length>10){
        document.getElementById("pp2").innerHTML='last name not vailed';
        
    }
    if(lsname.length<10) {
        
        document.getElementById("pp2").innerHTML="";
        tx++;

    }
    if(lname.length<10){
        document.getElementById("pp1").innerHTML="";
        tx++;
    }
    
    
    
   

}
function verk(){
    var mail=document.getElementById("n3").value;
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return p=pattern.test(mail);
}
function veriftemail(){
    var tx;
    var p=verk()
    
    if(p==false){
        document.getElementById("pp3").innerHTML="mail not valid";
        
       
    }
    if(p==true){
        document.getElementById("pp3").innerHTML="";
        tx++;
    }

}
function vp(){
    var mp=document.getElementById("n4").value;
    const pattern = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    return pattern.test(mp);
}
function maj(){
    var mp=document.getElementById("n4").value;
    regex = /^[A-Z]/;
    return regex.test(mp);
}


function verifmotpasse(){
    var tx;
    var mp=document.getElementById("n4").value;
    var mp1=document.getElementById("n5").value;
    var test=vp()
    var test1=maj();
    
    if((mp.length<8)||(test==false)){
        
        document.getElementById("pp4").innerHTML="Easy";
        document.getElementById("pp4").style.color="red";

    }
    if((mp.length>8)&&(test==true)){
       
         document.getElementById("pp4").innerHTML="moyen";
         document.getElementById("pp4").style.color="orange";

    
        
    }
    if(((mp.length>8)&&(test==true))&&(test1==true)){
        document.getElementById("pp4").innerHTML="Great";
         document.getElementById("pp4").style.color="green";
         tx++;

    }
    if((mp!=mp1)||(mp1=="")){
        document.getElementById("pp5").innerHTML="Password isn't Match";
    
    }
    else{
        document.getElementById("pp5").innerHTML="";
        tx++;

    }

}  /*  else{
    
}*/var ob={
         
     }
function press(){

        
    
   
    var a=document.getElementById("n1").value;
    var b=document.getElementById("n2").value;
    var c=document.getElementById("n3").value;
    var d=document.getElementById("n4").value;
    if((a!="")||(b!="")||(c!="")||(d!="")){

  
    document.getElementById("sin").innerHTML=document.getElementById("p42").innerHTML
   document.getElementById("p42").remove();
     ob.name=a;
     ob.lastName=b;
     ob.email=c;
     ob.Password=d;
    }
 //console.log(ob)
     //return ob;
    
    //return(ob);
    }
    
    // t=localStorage.setItem(ob)
     function motp(){
       // var ob=localStorage.getItem(ob);
       console.log(ob)
       var test=0;
       var y=document.getElementById("tm").value;
       var d=document.getElementById("ta").value;
      
       
       
       if(y!=ob.email){
            document.getElementById("ma").innerHTML="verifier votre email";
            document.getElementById("ma").style.color="red";
            
        }
        else{
            document.getElementById("ma").innerHTML="";

        }
        if(d!=ob.Password){
            document.getElementById("mx").innerHTML="verifier votre motpasse";
            document.getElementById("mx").style.color="red";
        }
        else{
            document.getElementById("mx").innerHTML="";
        }
       
       
          
            if((y==ob.email)&&(d==ob.Password)&&(ts==0)){
                
                window.location.href="pageprofile.html"
            
            }
            if((y==ob.email)&&(d==ob.Password)&&(ts==1)){
                
                window.location.href="acceulcl.html"
            
            }
        
           
            
        }
       

var k=0;
function beg(){
    const p= document.getElementById("bg");
const p1= document.getElementById("bg2");
const p2= document.getElementById("bg3");
    
    p.style.borderColor="rgb(0, 180, 200)";
    p1.style.borderColor="rgb(172, 172, 172)";
    p2.style.borderColor="rgb(172, 172, 172)";
    p.style.backgroundColor="rgb(248, 246, 246)"
    p1.style.backgroundColor="transparent"
    p2.style.backgroundColor="transparent"
    document.getElementById("bb").style.visibility="visible"
}
function exp(){
    const p= document.getElementById("bg");
const p1= document.getElementById("bg2");
const p2= document.getElementById("bg3");
    
    p1.style.borderColor="rgb(0, 180, 200)";
    p.style.borderColor="rgb(172, 172, 172)";
    p2.style.borderColor="rgb(172, 172, 172)";
    p1.style.backgroundColor="rgb(248, 246, 246)"
    p.style.backgroundColor="transparent"
    p2.style.backgroundColor="transparent"
    document.getElementById("bb").style.visibility="visible"
    

}
function exr(){
    const p= document.getElementById("bg");
const p1= document.getElementById("bg2");
const p2= document.getElementById("bg3");
    p2.style.backgroundColor="rgb(248, 246, 246)";
    p2.style.borderColor="rgb(0, 180, 200)";
    p1.style.borderColor="rgb(172, 172, 172)";
    p.style.borderColor="rgb(172, 172, 172)";
    p1.style.backgroundColor="transparent"
    p.style.backgroundColor="transparent"
   document.getElementById("bb").style.visibility="visible"
   
}
var i=0;
//var wi=0;
function next(){
    var t=["content21","content22","content23","content24",]
    p=document.getElementById(t[i]).innerHTML
    i++;
    
    document.getElementById("content21").innerHTML=document.getElementById(t[i]).innerHTML
    
    console.log(t[i])
    
       

return i
}

function back(){

    var t=["content21","content22","content23","content24"]
    
    
    
    document.getElementById("content21").innerHTML=p;
    i--
    console.log(p)
    //wi=wi-25;
//document.getElementById("hr1").style.width=(wi)+"%";
return i;

}


function append(){
    var z=document.getElementById("textarea1").value
    document.getElementById("pp8").innerHTML=z;
    document.getElementById("pp8").style.marginTop="50px"

    var m=document.getElementById("mony").value
    document.getElementById("pp9").innerHTML=m+'$/hr';
    var l=document.getElementById("nm").value
    document.getElementById("pd5").innerHTML=l;
    document.getElementById("pd5").style.textAlign="center";
    document.getElementById("pd5").style.fontWeight="bold"
   
}


function addlanguage(){
    var tab= document.getElementById("tab");
    sle=document.createElement("select");
    op1=document.createElement("option");
    op1.textContent="English"
    op2=document.createElement("option");
    op2.textContent="French"
    op3=document.createElement("option");
    op3.textContent="Arabic"
    sle.appendChild(op1)
    sle.appendChild(op2)
    sle.appendChild(op3)
    sle2=document.createElement("select");
    op11=document.createElement("option");
    op11.textContent="Basic"
    op22=document.createElement("option");
    op22.textContent="Conversatinal"
    op33=document.createElement("option");
    op33.textContent="Fluent"
    op4=document.createElement("option");
    op4.textContent="Native"
    sle2.appendChild(op11)
    sle2.appendChild(op22)
    sle2.appendChild(op33)
    sle2.appendChild(op4)
    btn=document.createElement("button");
    imga=document.createElement("img");
    imga.src="trash.png"
    btn.appendChild(imga);
    td2=document.createElement("td");
    td2.innerHTML=document.getElementById("td2").innerHTML
    

    tr=document.createElement("tr");
    td=document.createElement("td");
    td1=document.createElement("td");
    td.appendChild(sle);
    td1.appendChild(sle2);
    
    tr.appendChild(td);
    tr.appendChild(td1);
    tr.appendChild(td2)
    tab.appendChild(tr);
    




    
}
function trash(){
    
    
    
    tr.remove();}

    function valid(){
        var l=document.getElementById("check").innerHTML;
        if(document.getElementById("rad1").checked==true){
            document.getElementById("check").innerHTML=document.getElementById("check1").innerHTML+"<br>"+document.getElementById("p11").innerHTML+"<br>";    }
            if(document.getElementById("rad2").checked==true){
                document.getElementById("check").innerHTML=document.getElementById("check2").innerHTML+"<br>"+document.getElementById("p12").innerHTML+"<br>";    }
                if(document.getElementById("rad3").checked==true){
                    document.getElementById("check").innerHTML=document.getElementById("check3").innerHTML+"<br>"+document.getElementById("p13").innerHTML+"<br>";    
                }
               
            
            }
    function valid1(){
        //var d=document.getElementById("time").innerHTML
        if(document.getElementById("rad11").checked==true){
            document.getElementById("time").innerHTML=document.getElementById("check11").innerHTML +"<br>";}
        if(document.getElementById("rad22")==true){
                document.getElementById("time").innerHTML=document.getElementById("check22").innerHTML +"<br>";}
         if(document.getElementById("rad33").checked==true){
                    document.getElementById("time").innerHTML=document.getElementById("check33").innerHTML +"<br>";}
    
     }   
     function valid2(){
    
        if(document.getElementById("rad10").checked==true){
            document.getElementById("expert").innerHTML=document.getElementById("check10").innerHTML+"<br>"+document.getElementById("t0").innerHTML+"<br>";}
        if(document.getElementById("rad12").checked==true){
                document.getElementById("expert").innerHTML=document.getElementById("check12").innerHTML +"<br>" +document.getElementById("t1").innerHTML+"<br>";;}
         if(document.getElementById("rad13").checked==true){
                    document.getElementById("expert").innerHTML=document.getElementById("check13").innerHTML +"<br>" +document.getElementById("t2").innerHTML+"<br>";;}
    
     }    
    var wi=0;
    e=0;
       function next1(){
        
        var ta=["content11","content12","content13"]
        e++;
        if(e==3){
            
        window.location.href="checkout.html"
        }
        document.getElementById("content11").innerHTML=document.getElementById(ta[e]).innerHTML;
        console.log(ta[e])
           wi=wi+66;
    document.getElementById("hr1").style.width=(wi)+"%";
       }   




function from(){
        
    if(document.getElementById("rate").checked==true){
        document.getElementById("rat").style.visibility="visible"
        document.getElementById("bud").style.visibility="hidden"

        document.getElementById("rate").style.color="rgb(0, 180, 200)"
    }

}
function rate2(){
    const x=document.getElementById("prob");
    const y=document.getElementById("rat").innerHTML;
    if(document.getElementById("prob").checked==true){
        document.getElementById("bud").style.visibility="visible"
        document.getElementById("rat").style.visibility="hidden"
        x.style.color="red"
        
        

       
    }
}   function job(){
    document.getElementById("acceul").innerHTML=document.getElementById("profrilcl").innerHTML;
    innerHTML=document.getElementById("profrilcl").remove()
}   


function cart(){
    var p=document.querySelector("#ded");
var div99=document.createElement("div");
div99.appendChild(p);

var div77=document.createElement("div")
var div66=document.createElement("div")
var div55=document.createElement("div")
var img1=document.createElement("img")
var img2=document.createElement("img")
img1.src="visa.png";
img2.src="paypal.png";
div77.appendChild(div66)
div66.appendChild(img1)
div77.appendChild(div55)
div55.appendChild(img2)
var radio1=document.createElement("input")
radio1.setAttribute("type","radio")
radio1.setAttribute("name","radio")
var radio2=document.createElement("input")
radio2.setAttribute("type","radio")
radio2.setAttribute("name","radio")

div66.appendChild(radio1)
div55.appendChild(radio2)
document.getElementById("content14").appendChild(div99)

div99.style.width="50%"
div99.style.height="500px"
div66.style.width="70%"

div55.style.width="70%"
img2.style.width="30%"
img1.style.width="40%"
div77.style.display="flex"


var t1=document.createElement("input")
t1.setAttribute("type","text")
t1.setAttribute("placeholder","Name")

var t2=document.createElement("input")
t2.setAttribute("type","number")
t2.setAttribute("placeholder","Card Number")

var t3=document.createElement("input")
t3.setAttribute("type","text")
t3.setAttribute("placeholder","valide date")

var t4=document.createElement("input")
t4.setAttribute("type","number")
t4.setAttribute("placeholder","CVV /CVC")

var b=document.createElement("br")
var b1=document.createElement("br")
t4.style.cssText="margin-left:50px;margin-top:-70px; width:250px;border:none;border:1px solid gray;height:40px;border-radius:5%;margin-left:10 0px;margin-top:30px;"
t3.style.cssText=";margin-top:-70px;width:250px;border:none;border:1px solid gray;height:40px;border-radius:5%;margin-left:10 0px;"
t2.style.cssText="margin-left:50px;margin-top:-70px;width:250px;border:none;border:1px solid gray;height:40px;border-radius:5%;margin-left:10 0px;"
t1.style.cssText=";margin-top:-70px;width:250px;border:none;border:1px solid gray;height:40px;border-radius:5%;margin-left:10 0px;"
div99.style.cssText=" padding-left:100px;padding-top:10px;width:50%;background-color:white;border:none;outline:none;margin-left:270px;height:500px;box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);border-radius:7px"
div99.appendChild(div77)
var inp=document.createElement("input");
        inp.setAttribute("type","email")
        inp.setAttribute("placeholder","email")
        var inp2=document.createElement("input");
        inp2.setAttribute("placeholder","Password")

        var divvv=document.createElement("div")
        divvv.appendChild(inp);
        divvv.appendChild(inp2);
        div99.appendChild(divvv);
       inp.style.cssText="margin-top:80px;width:250px;border:none;border:1px solid gray;height:40px;border-radius:5%;margin-left:20px;"
       inp2.style.cssText="margin-top:80px;width:250px;border:none;border:1px solid gray;height:40px;border-radius:5%;margin-left:20px;" 
       inp.style.visibility="hidden"
            inp2.style.visibility="hidden"
$(":radio").click(function(){
    
    if(radio1.checked==true){


        div99.appendChild(t1)
        
        div99.appendChild(t2)
        div99.appendChild(b)
        div99.appendChild(b1)
        div99.appendChild(t3)
        
        
        div99.appendChild(t4)
        
       
        
          t1.style.visibility="visible"
            t2.style.visibility="visible"
            t3.style.visibility="visible"
            t4.style.visibility="visible"
            inp.style.visibility="hidden"
            inp2.style.visibility="hidden"
        }
        
        if(radio2.checked==true){

            
          
            inp.style.visibility="visible"
            inp2.style.visibility="visible"
            
            t1.style.visibility="hidden"
            t2.style.visibility="hidden"
            t3.style.visibility="hidden"
            t4.style.visibility="hidden"
            
        }
  });
    

}

function addjob(){
    
    var tableau=["YouTube Thumbnail Designer","Roll-up banner design","Roll-up banner design","UI UX Web Designer","UI UX Web Designer","Growers little Helper","Repurpose YT Video into Shorts","Looking For Youtube Video Editor Vox-style (Mystery Wonder niche)",]
    var desc=["We are looking for graphics designers and content creators for a big new graphics  designing and digital artwork company.Apply now for more information on this position.","We are looking for graphics designers and content creators for a big new graphics  designing and digital artwork company.","Hello! I am looking for a talented Graphic designer to design a beautiful cover, layout and graphics for our document advertising a pub/bar edition of our popular game show The Feud&quot;Here are the deliverables","We are running an e-commerce store and want to sell online and looking for a talented web designer who can design 6-10 pages layout that should be interactive and user friendly to generate a high conversion rate.","I'm looking for something that can select a line within a web page, click a reverse transaction button, click ok, then select the next line and do the same. This needs to be repeated until all lines have been reversed.","I'm looking for something that can select a line within a web page, click a reverse transaction button, click ok, then select the next line and do the same. This needs to be repeated until all lines have been reversed.","I'm ooking for a skilled video editor who specializes in repurposing long-form YouTube videos into shorter clips. The ideal candidate should be able to take an existing 4:40-minute video and create multiple 6 shorts clips that are engaging and shareable.","I'm ooking for a skilled video editor who specializes in repurposing long-form YouTube videos into shorter clips. The ideal candidate should be able to take an existing 4:40-minute video and create multiple 6 shorts clips that are engaging and shareable."]
    var price=["10 usd","100 usd","18 usd","140 usd","80 usd","5 usd","50 usd","40 usd"];
    for(n=0;n<8;n++){
    var div=document.createElement("div");
    var title=document.createElement("h3");
    title.textContent=tableau[n];
    var des=document.createElement("p")
    des.textContent=desc[n];
    var prix=document.createElement("p");
    prix.textContent=price[n];
    b=document.createElement("hr")
    
    div.appendChild(title);
    div.appendChild(des);
    div.appendChild(prix);
    
    document.getElementById("search").appendChild(div);
    document.getElementById("search").appendChild(b)

    div.style.marginLeft="30px"
}

var f=document.getElementById
}






        
