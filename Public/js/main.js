/* var */
const t_1 = document.querySelector('#t_1')
const t_2 = document.querySelector('#t_2')
const t_3 = document.querySelector('#t_3')

const s_1 = document.querySelector('#s_1')
const s_2 = document.querySelector('#s_2')
const s_3 = document.querySelector('#s_3')

const p_1 = document.querySelector('#p_1')
const p_2 = document.querySelector('#p_2')
const p_3 = document.querySelector('#p_3')

const divImg_1 = document.querySelector('#divImage_1')

const divImg_2 = document.querySelector('#divImage_2')

const divImg_3 = document.querySelector('#divImage_3')

const $image_1 = document.createElement('img')
const $image_2 = document.createElement('img')
const $image_3 = document.createElement('img')

/* logic */

const data = async ()=>{
    const dataRest = await fetch('https://rickandmortyapi.com/api/character/?page=19')
    const json = await dataRest.json()
    console.log(json.results)
    const respuesta_1 = json.results[0]
    const respuesta_2 = json.results[1]
    const respuesta_3 = json.results[2]
    const respuesta_4 = json.results[3]
    /* view */
    t_1.innerHTML = respuesta_1.name
    t_2.innerHTML = respuesta_2.name
    t_3.innerHTML = respuesta_3.name

    s_1.innerHTML = respuesta_1.species
    s_2.innerHTML = respuesta_2.species
    s_3.innerHTML = respuesta_3.species

    p_1.innerHTML = respuesta_1.status
    p_2.innerHTML = respuesta_2.status
    p_3.innerHTML = respuesta_3.status

    /* imagen */
    $image_1.setAttribute('src', respuesta_1.image)
    divImg_1.appendChild($image_1)
    $image_2.setAttribute('src', respuesta_2.image)
    divImg_2.appendChild($image_2)
    $image_3.setAttribute('src', respuesta_3.image)
    divImg_3.appendChild($image_3)



}
data()