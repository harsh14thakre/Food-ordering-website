function cart_call(){
    location.href="/crudd_operation/cart_book.html";
    return false;
}

let fetchData=async()=>{
    let url="http://localhost:3000/Item"
    let res=await fetch(url,{method:"GET"})
    let data=await res.json()
    console.log(data)
    let Show=document.querySelector("#showData")

    data.map((e)=>{
        Show.innerHTML+=`      
        <tr>
        <td>${e.name}</td>
        <td>${e.address}</td>
        <td>${e.mobile}</td>
        <td>${e.quantity*150}</td>
        <td onclick="Del('${e.id}')"> Delete</td> 
        <td onclick="Upd('${e.id}')">Edit<td/>   
        </tr>           
        `
    })
}
let Del=(id)=>{
    let url=`http://localhost:3000/Item/${id}`

    fetch(url,{method:"DELETE"})
}
// fetchData()

let book=()=>{

    let inpname=document.querySelector('#name').value
    let inpaddress=document.querySelector('#address').value
    let inpmobile=document.querySelector('#mobile').value
    let inpquantity=document.querySelector('#quantity').value

    let url="http://localhost:3000/Item"

         
    fetch(url,{

        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify(
        {
            "name":inpname,
            "address":inpaddress,
            "mobile":inpmobile,
            "quantity":inpquantity

        })
    })
    location.href="/add_cart_html/chole_kulche.html" 
    return false
}

let Upd=async(id)=>{

    let url=`http://localhost:3000/Item/${id}`
    let res = await fetch(url,{method:"GET"})
 
    let data=await res.json()
    console.log(data);

    let formfill=document.querySelector('#formfill')
    formfill.innerHTML=`
    
     Enter Name: <input type="text" value="${data.name}" id="upname"> <br> <br>
        Enter Address: <input type="text" value="${data.address}" id="upaddress"> <br> <br>
        Enter Mobile: <input type="text" value="${data.mobile}" id="upmobile"> <br> <br>
        Enter Quantity: <input type="text" value="${data.quantity}" id="upquantity"> <br> <br>
        <!-- Enter Country: <select value="" id="upCountry">
        <option value="India">India</option>
        <option value="USA">USA</option>
        <option value="China">China</option>
        <option value="Nepal">Nepal</option>
        <option value="Russia">Russia</option>
        <option value="Switzerland">Switzerland</option> -->
        
        <!-- </select> -->
         <br>  
        <input type="submit" value="Booknow" onclick="return finalupdate('${data.id}')" >
        
    `
    
}


let finalupdate=(id)=>{

    let inpname=document.querySelector('#upname').value
    let inpaddress=document.querySelector('#upaddress').value
    let inpmobile=document.querySelector('#upmobile').value
    let inpquantity=document.querySelector('#upquantity').value

    let url=`http://localhost:3000/Item/${id}`

    fetch(url,{

        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },

        body: JSON.stringify(
        {
            "name":inpname,
            "address":inpaddress,
            "mobile":inpmobile,
            "quantity":inpquantity
        })
    })
    
    // location.href="index.html"
 return false  ;


}