export default function UserDetails({user}){
const {name,email,id,phone,username,website,}=user

    return(
        <div style={{
            border:'1px solid tomato',borderRadius:'10px',margin:'5px',padding:'10px'
        }}>
             <p><b>ID  :</b>{id}</p>
             <p><b>Name :</b>{name}</p>
             <p><b>username :</b>{username}</p>
             <p><b>phone :</b>{phone}</p>
            <p><b>Email: </b>{email} </p>
            <p><b>WebSite:  </b>{website} </p>
        </div>
    )
}