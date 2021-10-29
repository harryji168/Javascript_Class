if (false) {
    document.addEventListener("click", (event) => {
        // console.log("target", event.target);
        // event.target is the DOM Node that triggered this event. It does not have to be the nod that has the event
        console.log("currentTarget", event.currentTarget);
        // event.currentTarget is the node owns this event
        console.log(this);
        // console.log(event);
        // key word this returns the same value as event.currentTarget only when it is not inside the arrow function!
        console.log("Document was clicked");
    })
}



const toxicTim = document.getElementById("toxic-tim");
toxicTim.addEventListener("click", event => {
    console.log("Toxic Tim was clicked");
    console.log(event.currentTarget);
    console.log(event.target);
    console.log(event.clientX, event.clientY);
})

const titles = document.querySelectorAll(".doggo.fighter h1");
titles.forEach(node => {
    node.addEventListener("click", () => {
        console.log("Doggo Name was clicked");
    })
})

// console.log(document instanceof Node)
// console.log("a string" instanceof Node);


const teamSalmon = document.querySelector(".team.salmon");
teamSalmon.addEventListener("click", function (event) {
    console.log(this);
})

const allDoggos = document.querySelectorAll(".doggo.fighter");

allDoggos.forEach(doggoNode => {
    doggoNode.addEventListener("click", event => {
        const clickedElement = event.currentTarget;
        const rosterNode = clickedElement.closest(".roster");
        rosterNode.append(clickedElement);
    })
})

allDoggos.forEach(doggoNode => {
    doggoNode.addEventListener("dblclick", event => {
        event.currentTarget.classList.toggle("inverted")
    })
    doggoNode.addEventListener("mousedown", event => {
        event.currentTarget.classList.add("flipped")
    })
    doggoNode.addEventListener("mouseup", event => {
        event.currentTarget.classList.remove("flipped")
    })
})
 