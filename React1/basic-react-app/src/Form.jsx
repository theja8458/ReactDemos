function handleFormSumbit(event){
    event.preventDefault();
    console.log("Form was submitted")
}

export default function Form(){
    return (
        <form>
            <input type="text" name="" id="" placeholder="Write something"/>
            <button onClick={handleFormSumbit}>Submit</button>
            
        </form>
    )
}