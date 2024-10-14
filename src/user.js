function User(props){
    return(
        
           <div>
             <span>name: {props.data.name}</span>
            <span>Email: {props.data.Email}</span>
            <button onClick={()=>alert(props.data.contact)}>click {props.data.contact}</button>
           
           </div>
       
    )
}
export default User;
