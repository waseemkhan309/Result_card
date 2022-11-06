console.log("hy...");

function resultcard(){
    let fname =document.querySelector("#name").value;
    let rollnumber=document.querySelector("#rolnum").value;

    // if(rollnumber.length>5){
    //   document.querySelector("#error").innerHTML=("*Roll-Number not more than 5 Digits.");
    // }
     let mth=document.querySelector("#math").value;
     let eng=document.querySelector("#english").value;
     let urdu=document.querySelector("#urdu").value;
     let compsci=document.querySelector("#comp").value;
     
        // alert(fname);
        // alert(rollnumber);
        // alert(mth);
        // alert(eng);
        // alert(urdu);
        // alert(compsci);
        document.querySelector("#fname1").innerHTML= ("<b>Name :</b> "+fname +"<br>");
        document.querySelector("#rollnumber").innerHTML= ("<b>Roll Number :</b>"+rollnumber +"<br>");
        document.querySelector("#sub1").innerHTML=(" <b>Math : </b>"+ mth +"<br>");
        document.querySelector("#sub2").innerHTML=("<b>English : </b>"+ eng +"<br>");
        document.querySelector("#sub3").innerHTML=("<b>Urdu : </b>"+ urdu +"<br>");
        document.querySelector("#sub4").innerHTML=("<b>Computer Science : </b>"+ compsci +"<br>");
        //percentage
        var Obtmarks= parseInt(mth)+parseInt(eng)+parseInt(urdu)+parseInt(compsci);
        document.querySelector(".total-marks").innerHTML=("<b> Total Marks : </b>"+ 400 + "<br>");

        document.querySelector(".Obtain-marks").innerHTML=("<b> Obt. Marks : </b>"+Obtmarks + "<br>");
        var perc = parseFloat( Obtmarks/400 *100  );
        document.querySelector("#Percentage").innerHTML= "<b> Percentage : </b>"+perc +"%"+"<br>";

        if(perc>= 90 ){
          document.querySelector("#Grade").innerHTML= "<b>Grade is : </b>" +"+A";
        }    
        else if(perc>= 80 ){
          document.querySelector("#Grade").innerHTML="<b>Grade is : </b> " +"A";
        }    
        else if(perc>= 70 ){
          document.querySelector("#Grade").innerHTML="<b>Grade is : </b>" +"B";
        }    
        else if(perc>= 60 ){
          document.querySelector("#Grade").innerHTML="<b>Grade is : </b>" +"C";
        }    
        else if(perc>= 50 ){
          document.querySelector("#Grade").innerHTML="<b>Grade is : </b> " +"D";
        }else{
          document.querySelector("#Grade").innerHTML="<b>Grade is : </b> "+"F";
        }
          //status

        if(perc<50){
        document.querySelector("#status").innerHTML="<br>"+"<b>Status:</b> "+"  FAIL";
        }else if(perc>50)
        document.querySelector("#status").innerHTML="<br>"+"<b>Status:</b> "+"PASS";
        else{
        document.querySelector("#status").innerHTML="<br>"+"<b>Status:</b> "+"Nothing";}

         
      } 