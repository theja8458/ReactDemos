function hanldeClick(event){
    console.log("Hello!");
    console.log(event);
}

function handleMoseOver(){
    console.log("Bye!");
}

function hanldeDblClick(){
    console.log("You double clicked");
}
export default function Buttoon(){
    return (
        <div>
         <button onClick={hanldeClick}>Click me!</button>
         <p onMouseOver={handleMoseOver}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse quisquam voluptatibus ipsam, ducimus ab eligendi voluptate beatae nesciunt accusantium odio delectus eius dolorem quod earum reprehenderit neque quo voluptas ex.</p>
         <button onDoubleClick={hanldeDblClick}>double click me!</button>
        </div>
    )
};