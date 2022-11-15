
import './form.css'

export function Form(){

  let formData= document.querySelectorAll("#form input");
  
  const getInfo= (e)=>{
    e.preventDefault();
    let allData= Array.from(formData).reduce((acc,input)=>({...acc, [input.id]:input.value}),{});
    console.log(allData);
    //setTimeout(()=>form.reset(), 500)   //Clean the inputs in form
  }
  
  return(<>
    <form id="form" onSubmit={getInfo} className="form">
      <label>Name:</label>
      <input type="text" id="name" autoComplete="off"/>
      <label>E-mail:</label>
      <input type="text" id="email" autoComplete="off"/>
      <label>Mobile phone #:</label>
      <input type="text" id="mobile" autoComplete="off"/>
      <input type="submit"/>
    </form>
  </>)
}