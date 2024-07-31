import { createContext , useState } from "react";
const USERS = [

    {
        "id":"fhbveiouv",
        "firstName":"Ponraj",
        "lastName":"M",
        "email":"ponrajmurugan3787@gmail.com",
        "password":"Ponraj007"
  
      },
  
      {
          "id":"fhbveiouvehh",
          "firstName":"Thilak",
          "lastName":"M",
          "email":"thilakmurugan@gmail.com",
          "password":"Thilak007"
    
        },
  
        {
          "id":"fhbveiouvtkfgbds",
          "firstName":"Ponrajmurugan",
          "lastName":"M",
          "email":"ponrajmurugan5656@gmail.com",
          "password":"Ponrajmm007"
    
        } 

]
export const UserContext = createContext({

    userItem:[],

    addUser:()=>{} 

});

const UserContextProvider = ({children})=>{

    const [users , setUser] = useState(USERS)

    const itemData = {

        userItem: users,
        addUser:setUser
      
        

    }

    return <UserContext.Provider value = {itemData}> {children} </UserContext.Provider>
}


export default UserContextProvider;
