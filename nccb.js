profile(data.profile);
    career(data.career);
    education(data.education);
   })
   var left=document.querySelector(".left");
   function profile(e){
    var img=document.createElement("img");
    img.src=e.img;
    left.appendChild(img);
    var h2=document.createElement("h2");
    h2.textContent=e.name;
    left.appendChild(h2);
    var h3=document.createElement("h3");
    h3.textContent=e.roll;
    left.appendChild(h3);
     var h3=document.createElement("h3");
    h3.textContent=e.place;
    left.appendChild(h3);
   
   }
   var right=document.querySelector(".right");
    function career(d){
      var h1=document.createElement("h1");
      h1.innerHTML="RESUME BUILDING";
      right.appendChild(h1);
      var h2=document.createElement("h2");
       h2.innerHTML="Carrer Objective";
      right.appendChild(h2);
       var h2=document.createElement("hr");
           right.appendChild(h2);
       var p=document.createElement("p");
       p.textContent=d.info;
      right.appendChild(p);
  }
    function education(f){
      var h2=document.createElement("h2");
      h2.innerHTML="Education Details";
      right.appendChild(h2);
      
         var table=document.createElement("table");
         table.border="1";
         var tr1="<tr><td>sno</td><td>degree</td><td>institute</td><td>percentege</td><td>yop</td></tr>";
        var tr2="";
        for(i=0;i<f.length;i++)
        {
          tr2=tr2+"<tr><td>"+e[i].sno+"</td><td>"+e[i].degree+"</td><td>"+e[i].institute+"</td><td>"+e[i].percentege+"</td><td>"+e[i].yop+"</td></tr>";
        }
        table.innerHTML=tr1+tr2;
         right.appendChild(table);
     
    }