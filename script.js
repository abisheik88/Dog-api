async function start() {
    try {
        const response = await fetch("https://dog.ceo/api/breeds/list/all")
        const data = await response.json()
        createBreedList(data.message)
    } catch (e) {
        console.log("There was a problem fetching the breed list.")
    }
}

start()

function createBreedList(breedList) {
    document.getElementById("breed").innerHTML = `
    <select onchange="loadByBreed(this.value)">
          <option>Choose a dog breed</option>
          ${Object.keys(breedList).map(function (breed) {
        return `<option>${breed}</option>`
    }).join('')}
        </select>
    `
    defaultImg = "https://img.freepik.com/free-vector/cute-dog-sticking-her-tongue-out-cartoon-icon-illustration_138676-2709.jpg?w=740&t=st=1663700300~exp=1663700900~hmac=6649a2a86a75cb75577b04c0a6ef5541b0c313c907f02c1795c652d5e5fc1037"
    document.getElementById("image").setAttribute("src", defaultImg)
}

async function loadByBreed(breed) {
    if (breed != "Choose a dog breed") {
        const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`)
        const data = await response.json()
        document.getElementById("image").setAttribute("src", data.message[0])

    }
    else {
        defaultImg = "https://img.freepik.com/free-vector/cute-dog-sticking-her-tongue-out-cartoon-icon-illustration_138676-2709.jpg?w=740&t=st=1663700300~exp=1663700900~hmac=6649a2a86a75cb75577b04c0a6ef5541b0c313c907f02c1795c652d5e5fc1037"
        document.getElementById("image").setAttribute("src", defaultImg)
    }
}