import { useState } from "react";


const TastingFrom = () => {

    const [name, setName]= useState(null);
    
    const [email, setEmail]= useState(null);
    
    const [password, setpassword]= useState(null);

    const [error, seterror]= useState();

    const handleSubmit = e => {
        e.preventDefault();

        if(password.length < 6 ){
            seterror('please passord must be 6 charector longer')
        }
        else{
            seterror('')
        }

        console.log(email,password,name);

        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);

    };

    const handleName = e =>{
        console.log(e.target.value);
        setName(e.target.value)
     };
         const handleEmail = e =>{
            console.log(e.target.value);
            setEmail(e.target.value)
         };
         const handlepassword = e =>{
            console.log(e.target.value);
            setpassword(e.target.value)
         };

         
    return (
        <div>
             <form onSubmit={handleSubmit}>
                <input
                onChange={handleName}
                type="text" name="name"/>
                <br />
                <input 
                  onChange={handleEmail}
                type="email" name="email"/>
                <br />
                <input
                 onChange={handlepassword}
                type="password" name="password" required/>
                <br />
                
                <input type="submit" value="Submit" />
                {
                    error && <p>{error}</p>
                }
             </form>
        </div>
    );
};

export default TastingFrom;