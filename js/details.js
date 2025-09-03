// gets the "?id=1" from url
let params = new URLSearchParams(window.location.search)
const id = params.get("id")

console.log(id);

const mainWrapper = document.querySelector("#main-wrapper")

fetch(`../data/${id}.json`)
    .then((response) =>
        response.json()
    )
    .then((data) => {
        details(data)
        getHearts();
    })

function details(data) {
    
    const content = /*html*/`
        <article>
            <div class="back">
                <a href="index.html">Back</a>
            </div>
            <div class="image">
                <img src="../img/${data.image}">
                <div class="heart" data-id="${data.id}"></div>
            </div>
            <section>
                <h3 class="location">${data.destination}</h3>
                <h2>${data.title}</h2>
                <p class="subtitle">${data.subtitle}</p>
                <p>${data.text}</p>
                <div class="facilities">
                    <h4>Facilities</h4>
                    <ul>
                        ${data.facilities.map((facility) => {
                            return /*html*/`
                                <li>${facility}</li>`
                        }).join("")}
                    </ul>
                </div>
            </section>
        </article>
    `

    mainWrapper.insertAdjacentHTML("beforeend", content)

}