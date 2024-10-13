
function Button() {

    // let count = 1;

    // const handleButton = (name) => {
    //     if(count == 1) {
    //         console.log(`${name} clicked me ${count} time`);
    //     } else if(count < 5) {
    //         console.log(`${name} clicked me ${count} times`)
    //     } else {
    //         console.log("Stop Clicking Me!")
    //     }
    //     count++;
    // }

    const handleClick = (e) => e.target.textContent = "Ouch";

    return(
        <button className="button" onDoubleClick={(e) => handleClick(e)}>Click me</button>
    );
}

export default Button