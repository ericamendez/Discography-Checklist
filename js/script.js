let submit = document.querySelector('#submit')
let infoSection = document.querySelector('#artistInfo')

async function getArtist(e){
    e.preventDefault()
    let inputArtist = document.querySelector('#artist').value

    let response = await fetch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${inputArtist}`)
    let data = await response.json()

    let img = document.createElement('img')
    img.src = 
    console.log(data)
}

submit.addEventListener('click', getArtist)
// getArtist('FKA Twigs')