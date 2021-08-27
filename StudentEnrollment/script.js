function addStu(){
  //validating name
    var nm = document.getElementById('namee').value;
    if(nm.length<1 || /\d/.test(nm)){
      alert("Invalid name: Either the name is left blank or name can't have numbers.");
      return(false);
    }
    //vlidating email
    var em = document.getElementById('emaill').value;
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(em))
    {
      em = document.getElementById('emaill').value;

    }
    else{
    alert("You have entered an invalid email address!");
    return(false);
    }
    //validating the web url 
    var web = document.getElementById('websitee').value;
    var expression = /[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);
    if (web.match(regex)) {
        web = document.getElementById('websitee').value;
    } else {
        alert("Invalid URL");
        return(false);
    }
    
    //validating image link
    var img = document.getElementById('imglinkk').value;
    if(img.match(/\.(jpeg|jpg|gif|png)$/) == null){
        alert("Invalid type of image url.");
        return(false);
    }
    
    //setting the gender validation to select atleast one
    if(document.querySelector('input[name="gender"]:checked') == null) {
      alert("You need to choose an gender!");
      return(false);
      }
    else{
      var gen = document.form1.gender.value;
    }
    
    //setting validation for selecting atleast one skill and collecting the number of skills selected.
    var chks = document.getElementsByName("skill");
    var st="";
    for (var i = 0; i < chks.length; i++) {
      if (chks[i].checked) {
          st+=(chks[i].value+",");
      }
    }
    if(st.length<1){
        alert("Please select atleast one skill!");
        return(false);
    }
    //creating a table element for adding rows in the table dynamically
    var tr=document.createElement('tr');
    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));

    //adding details in table dynamically.
    td1.innerHTML= `
        <div>
          <b>${nm}</b><br>
          ${gen}<br>
          <u><a target= _blank href="${web}">${web}</a></u><br>
          ${em}<br>
          ${st}<br>
        </div>
        `;
        
    td2.innerHTML=`<img src="${img}" width="140px" height="120px">`;

    //adding fade in animation effect while adding rows in the table.
    td1.classList.add("fade-in");
    td2.classList.add("fade-in");


    document.getElementById("tableID").appendChild(tr);
    
    
    }