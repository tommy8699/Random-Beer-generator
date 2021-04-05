document.addEventListener('DOMContentLoaded', () =>{
    const startBtn = document.querySelector('.beer-button')
    const randomBeer = document.querySelector('.random-beer')
    const descriptionDisplay = document.querySelector('.description')
    const img = document.querySelector('.img')
    function getData() {
        fetch('https://api.punkapi.com/v2/beers/random')
            .then(response => {
                return response.json()
            })
            .then(data => {
                const name = data[0].name
                const description = data[0].description
                const {volume} = data[0]
                const volumeValue = volume.value
                const volumeUnit = volume.unit
                const image_url = data[0].image_url

                randomBeer.innerHTML = name + ' ' + volumeValue + volumeUnit
                descriptionDisplay.innerHTML = description
                img.src = image_url
            })
    }
    startBtn.addEventListener('click', getData);
})

