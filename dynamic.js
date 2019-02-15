function getfile(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("Application/json");
	 xhr.open('GET',file,true);
     // true means file opened otherwise file will be close intialization is nothing but file open
     xhr.onreadystatechange=function(){
      if(xhr.readyState===4 && xhr.status=="200"){
        callback(xhr.responseText);
      }
     }  
     xhr.send(null);
   }
   getfile("dynamic.json",function(text){
        var data=JSON.parse(text);
        console.log(data);
        profile(data.profile);
    career(data.career);
    education(data.education);
    languages(data.languages);
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
      var h2=document.createElement("hr");
           right.appendChild(h2);
       
         var table=document.createElement("table");
         table.border="1";
         var tr1="<tr><td>sno</td><td>degree</td><td>institute</td><td>percentege</td><td>yop</td></tr>";
        var tr2="";
        for(i=0;i<f.length;i++)
        {
          tr2=tr2+"<tr><td>"+f[i].sno+"</td><td>"+f[i].degree+"</td><td>"+f[i].institute+"</td><td>"+f[i].percentege+"</td><td>"+f[i].yop+"</td></tr>";
        }
        table.innerHTML=tr1+tr2;
         right.appendChild(table);
       }
       function languages(e){
         var h2=document.createElement("h2");
         h2.innerHTML="Languages";
         right.appendChild(h2);
         var h2=document.createElement("hr");
           right.appendChild(h2);
       
       var ul=document.createElement("ul");
       
      for(i=0;i<e.length;i++)
      {
        var li=document.createElement("li");
        li.textContent=e[i].lang;
        ul.append(li);
      } 
      right.append(ul);
}