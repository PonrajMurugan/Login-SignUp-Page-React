import { createContext, useReducer  } from "react";
const TODOITEM =[ { 
     
    id:1,
    model:"Note 10 Pro Max",
    brand:"Redmi",
    price:20_000

  },
  {
    id:2,
    model:"Note 11 Pro Max",
    brand:"Redmi",
    price:22_000

  },
  {
   id:3,
   model:"Note 12 Pro Plus",
   brand:"Redmi",
   price:25_000

 }]
export const TodoContext = createContext({

     item:[],
     addItem:() => {},
     updateItem:()=>{},
     deleteItem:()=>{}
  

})
 
 const itemReducer = (state,action)=>{

       if(action.type === "ADDITEM"){
         let newItem = [...state];
         newItem.push(action.payload)

         
          return newItem;


       }

       if(action.type === "UPDATEITEM"){
              
           let updateItem = [...state];
           let existIndx = state.findIndex((item) => item.id ===action.payload.id)
           updateItem [existIndx] = {...action.payload};
           return updateItem;
          

       }

       if(action.type === "DELETEITEM"){
              
     
          let deletedItem= state.filter((item) => item.id !== action.id)

          return deletedItem;
         

      }

  

 }

const TodoContextProvider = ({children}) => {

      const [items,dispatchItem] = useReducer(itemReducer,TODOITEM);

      const onAddItem = (data)=>{

           dispatchItem({type:"ADDITEM", payload:data})
      }

      const onUpdateItem = (data)=>{
          dispatchItem({type:"UPDATEITEM", payload:data})
      
      }

      const onDeleteItem = (id)=>{
          dispatchItem({type:"DELETEITEM", id})
      
      }
      

      const todoItem = {
           items,
           addItem: onAddItem,
           updateItem:onUpdateItem,
           deleteItem:onDeleteItem


      }

      return <TodoContext.Provider value={todoItem}>{children}</TodoContext.Provider>

}

export default TodoContextProvider;
