// import React from 'react';
import React, { useContext, useEffect, useState} from 'react';
import "./crud.css";
import { TodoContext } from '../../store/todoContext';
import Button from 'react-bootstrap/Button';



// const Todo = () =>{
//     return(
//          <div>
//             <h1>
//                 Todo
//             </h1>
//          </div>
//     )
// }
// export default Todo;




//  const ITEMS = [
  
//     { 
     
//       id:1,
//       model:"Note 10 Pro Max",
//       brand:"Redmi",
//       price:20_000

//     },
//     {
//       id:2,
//       model:"Note 11 Pro Max",
//       brand:"Redmi",
//       price:22_000

//     },
//     {
//      id:3,
//      model:"Note 12 Pro Plus",
//      brand:"Redmi",
//      price:25_000

//    }

//    ]

   const Todo = () => {
    const {items, addItem , updateItem , deleteItem } = useContext(TodoContext);
    //  const [product, setProduct] = useState(items);
     const [isEdit , setEdit] = useState(false)
     const [input, setInput] = useState({
        
            id:"",
            model:"",
            brand:"",
            price:""
        })
     

    //  const [isEditing, setIsEditing] = useState(false);
    //  const [editId, setEditId] = useState(null);

     const onFormSubmit =(e) => {
        e.preventDefault();
     }
        // if (isEditing) {
        //     setProduct(prevProduct =>
        //       prevProduct.map(item =>
        //         item.id === editId ? { ...item, ...input } : item
        //       )
        //     );
          
        // setIsEditing(false);
        // setEditId(null);
        //   } else {
        //     let uniqId = product[product.length - 1].id + 1;
        //     // setProduct(prevItem => [...prevItem, { id: uniqId, ...input }]);
        //   }
      
        //   setInput({
        //     id: "",
        //     model: "",
        //     brand: "",
        //     price: ""
        //   });
        //  };  
  

     const onChangeInput = (e)=>{
        let name = e.target.name;
        let val = e.target.value;


         setInput(prevData => ({...prevData,[name]: val}));


     }

   //   const onDelete = (items.id) => {
   //      deleteItem(items.id);
   //    };


      

      // const startEditing = (item) => {
      //   setIsEditing(true);
      //   setEditId(item.id);
      //   setInput({
      //     model: item.model,
      //     brand: item.brand,
      //     price: item.price
      //   });
      // };
    
      // const cancelEditing = () => {
      //   setIsEditing(false);
      //   setEditId(null);
      //   setInput({
      //     id: "",
      //     model: "",
      //     brand: "",
      //     price: ""
      //   });
      // };
    

     return(

        <div>
                  <h1 className='awesome-header'>
                  Todo
                </h1>
                <form onSubmit={onFormSubmit}>

                    <input style={{backgroundColor:"transparent", borderColor:"blue"}} type='text' placeholder='id' name='id' value={input.id} onChange={onChangeInput}/>
                    <input style={{backgroundColor:"transparent", borderColor:"blue"}} type='text' placeholder='model' name='model' value={input.model} onChange={onChangeInput}/>
                    <input style={{backgroundColor:"transparent", borderColor:"blue"}} type='text' placeholder='Brand' name='brand' value={input.brand} onChange={onChangeInput}/>
                    <input style={{backgroundColor:"transparent", borderColor:"blue"}} type='text' placeholder='Price' name='price' value={input.price} onChange={onChangeInput}/>
                   
                    {/* <button className='btn btn-primary'>{isEditing ? "Update" : "Add Product"}</button>
                    {isEditing && <button type="button" className='btn btn-secondary' onClick={cancelEditing}>Cancel</button>} */}
                    
                    
                     <Button variant="outline-primary" type='button' onClick={()=>addItem({
                        id:4,
                        title:"5s pro",
                        brand:"oneplus",
                        price:20_000                         
                         
                     })}>Add Item</Button>


                     
                   
                     <Button className='btn-up' variant="outline-secondary" type='button' onClick={()=>updateItem({
                        id:3,
                        title:"4s pro",
                        brand:"redplus",
                        price:10_000                         
                         
                     })}>Update Item</Button>


                </form>
  
  
        <div  className='df'>

         {
           items.length > 0 &&
           items.map((item,inx) =>{
             return (
               <div key={inx} className='cont'>

                  <h4>Item No: { item.id }</h4>

                  <h4>Model: { item.model  }</h4>

                  <h4>Brand: { item.brand }</h4>

                  <h4>Price: { item.price }</h4>

                  

              <div>

                
                 <button style={{marginRight:"15px"}} className='btn btn-primary'>Edit</button>
                 <button className='btn btn-danger' onClick={() =>  deleteItem(item.id)}>Delete</button>
              </div>

               </div>)
           })
         }
         </div>

       </div>

     )

   }

   export default Todo;
