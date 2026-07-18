const container = document.getElementById("container")
fetch("https://rickandmortyapi.com/api/character")
    .then(res => res.json())
    .then(data => {
        console.log(data.results[0])
        console.log(data.results[0].image)
        console.log(data.results[0].name)
        console.log(data.results[0].species)
        console.log(data.results[0].status)
        console.log(data.results[0].origin.name)
        
        data.results.forEach(elemento => {
            const card = document.createElement("div")
            card.className = "card"
            card.innerHTML = `
                <img src="${elemento.image}" alt="">
                <h3>${elemento.name}</h3>

                <div class="details-container">
                    <div class="details-personagens"></div>
                    <div>
                        <img src="./images/iconAlien.svg" alt="">
                        <span>${elemento.species}</span>
                    </div>
                    <div class="details-container">
                        <div class="details-personagens"></div>
                        <div>
                            <img src="./images/iconHeart.svg" alt="">
                            <span>${elemento.status}</span>
                        </div>
                        <div class="details-container">
                            <div class="details-personagens"></div>
                            <div>
                                <img src="./images/icon.svg" alt="">
                                <span>${elemento.origin.name}</span>
                            </div>
                    </div>

            `
            container.appendChild(card)
        });
    })