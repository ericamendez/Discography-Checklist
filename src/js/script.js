let submit = document.querySelector('#submit')
let infoSection = document.querySelector('#artistInfo')

// https://apilist.fun/api/audio-db

async function getArtist(e){
    e.preventDefault()
    infoSection.innerHTML = ''
    let inputArtist = document.querySelector('#artist').value

    let response = await fetch(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=${inputArtist}`)
    let data = await response.json()
    
    populateDOM(data.artists[0])
    
    console.log(data)
}

function populateDOM({
    idArtist,
    strArtist, 
    strArtistLogo,
    strArtistThumb, 
    strArtistFanart2,
    strArtistFanart3,
    strArtistFanart4,
    strCountry,
    strBiographyEN, 
    strGenre, 
    strWebsite
}){
    let imgLogo = document.createElement('img')
    imgLogo.src = strArtistLogo
    infoSection.appendChild(imgLogo)
    
    let img = document.createElement('img')
    img.src = strArtistThumb
    infoSection.appendChild(img)
    
    let p = document.createElement('p')
    let bio = document.createTextNode(strBiographyEN)
    p.appendChild(bio)
    infoSection.appendChild(p)
}

submit.addEventListener('click', getArtist)
// getArtist('FKA Twigs')