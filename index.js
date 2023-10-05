
function submitData(){

let name; // declare variable name
let email;// declare email

 
  
    const data = {
    name: name,
    email: email,
  
  };
  const options ={ //fetch request
    method:`POST`,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch("http://localhost:3000/users")
  .then(response =>{
    if(!response.ok) {

      throw new Error("network poor network response");//throws error when response is null
    }
    return response.json();

    })
    .then(data => {
      const newUserId=data.id;

      const userIdElem =document.createElement("div"); // create new element in HTML.
      userIdElem.textContent=`New User Id:
${newUserId}`;//content of the div
document.body.appendChild(userIdElem);   //adds it to the body 

    })
    .catch(error =>{
      const errorElement = document.createElement('div');
    errorElement.textContent = `Error: ${error.message}`;
    document.body.appendChild(errorElement);
  });
}

// Call the submitData function to initiate the POST request
submitData();
  
  
