export default function Singers({singer}){


    return (
        <div>
            <h1>ID:{singer.id}</h1>
            <h5>Singer Name:{singer.name} </h5>
            <p>Age: {singer.age}</p>

        </div>
    )
}