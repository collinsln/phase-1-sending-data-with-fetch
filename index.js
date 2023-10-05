
function submitData(){

let name; // declare variable name
let email;// declare email

 
  
    const data = {
    name: name,
    email: email,
  }
  };
  const options ={
    method:`POST`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch("http://localhost:3000/users")
  .then(response =>{
    if(!response.ok) {
      throw new Error("network poor network response");
    }

    })
  
  
