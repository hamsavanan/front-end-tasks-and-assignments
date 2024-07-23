

function checkAll(){
    // window.alert("hi");
    // let ufname = document.getElementById("fname").value;
    
    let ufname = document.getElementById("fname").value;
    let regfname = "^[a-zA-Z]{3,15}$";
  
    console.log("hamsa");

    let uedu = document.myform.edu.value;
    if(ufname.trim()===""){
     window.alert("This field is required");
     return false;
    }
    if(!ufname.trim().match(regfname)){
     window.alert("user name must contain only character min-3 and max-15");
     return false;
    }
console.log(ufname);


    if(uedu[0].checked==false && uedu[1].checked==false && uedu[2].checked==false && uedu[3].checked==false&& uedu[4].checked==false){
        window.alert("please select your qualification");
        return false;
    }

    console.log(ufname);

    let ulname = document.getElementById("lname").value;
        let reglname = "^[a-zA-Z]{3,15}$";

        if(ulname.trim()===""){
            window.alert("This field is required");
            return false;
           }
           console.log(ufname);
           if(!ulname.trim().match(reglname)){
            window.alert("user last name must contain only character min-3 and max-15");
            return false;
           }

           console.log(ufname);

           let upass = document.getElementById("pass").value;
        let regupass = "^[a-zA-Z0-9 ]{6,15}$";

        if(upass.trim()===""){
            window.alert("This field is required");
            return false;
           }
           if(!upass.trim().match(regupass)){
            window.alert("password must contain only character min-6 and max-15");
            return false;
           }


        //    let uemail = document.getElementById("email").value;
        // let reguemail = "^[a-zA-Z0-9 ]{6,15}$";

        console.log("hamsa");


        let ucontact = document.getElementById("contact").value;
        let regucontact = "^[0-9]{10,11}$";

        if(ucontact.trim()===""){
            window.alert("This field is required");
            return false;
           }
           if(!ucontact.trim().match(regucontact)){
            window.alert("contact must contain only numbers max-15");
            return false;
           }



    let ugender = document.myform.gender;

    if(ugender[0].checked==false && uedu[1].checked==false && uedu[2].checked==false){
        window.alert("please select your gender");
        return false;
    }
    return false;
}






