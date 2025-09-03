const mainWrapper = document.querySelector("#main-wrapper")

fetch("../data/destinations.json")
    .then((response)=>
        response.json()
    )
    .then((data)=> {
        content(data.destinations)
        getHearts()
    })

function content(destinations) {

    const destination = destinations.map((destination) => {

    return /*html*/ `
        <figure>
            <img src="../img/${destination.image}">
            <h2>${destination.title}</h2>
            <figcaption>
                <div class="heart" data-id="${destination.id}"></div>
                <a href="details.html?id=${destination.id}">MORE</a>
            </figcaption>
        </figure>`

    }).join("")

    mainWrapper.insertAdjacentHTML("beforeend", destination)

}