const dish1 = 'Caesar Salad'
const kCal1 = 200
const vegan1 = true
const ingredients1 = ['Lettuce', 'Parmesan Cheese', 'Crisp Croutons', 'Garlic']

const dish2 = 'The Hamburger'
const kCal2 = 600
const vegan2 = false
const ingredients2 = ['Ground Beef', 'Black Pepper', 'Cheese', 'Dry Bread']

const dish3 = 'Cauliflower Hot Wings'
const kCal3 = 550
const vegan3 = true
const ingredients3 = ['Cauliflower', 'Salt', 'Pepper', 'Vegan Hot Sauce', 'Coconut Oil', 'Garlic Powder', 'Paprika']

const averageCalories = (kCal1 + kCal2 + kCal3) / 3
// console.log(averageCalories)

// console.log(vegan1 && vegan2 && vegan3)
// console.log(dish1.toUpperCase(), dish2.toUpperCase(), dish3.toUpperCase())

dishInfos0 = {
    dish: 'Caesar Salad',
    kCal: 200,
    vegan: true,
    ingredients: ['Lettuce', 'Parmesan Cheese', 'Crisp Croutons', 'Garlic']
}

dishInfos1 = {
    dish: 'The Hamburger',
    kCal: 600,
    vegan: false,
    ingredients: ['Ground Beef', 'Black Pepper', 'Cheese', 'Dry Bread']
}

dishInfos2 = {
    dish: 'Cauliflower Hot Wings',
    kCal: 550,
    vegan: true,
    ingredients: ['Cauliflower', 'Salt', 'Pepper', 'Vegan Hot Sauce', 'Coconut Oil', 'Garlic Powder', 'Paprika']
}

let menuStorage = [dishInfos0, dishInfos1, dishInfos2]

let menu = []

// for(i = 0; i < menuStorage.length; i += 1) {
//     if(menuStorage[i].vegan) {
//         menu.push(menuStorage[i])
//     }
//     else {
//         console.log(`Não foi possível adicionar o item ${menuStorage[i]['dish']} na lista`)
//     }
// }

// console.log(menu)

// var menu = menuStorage.filter(function(x) {
//     return x.vegan == true;
// })

// console.log(menu)

menuStorage.forEach((elem) => elem.vegan ? menu.push(elem) : console.log(`Não foi possível adicionar o item ${elem['dish']} na lista`))

//console.log(menu)

let ingredientsStorage = []

for (i = 0; i < menu.length; i++) {
    // console.log(menu[i].ingredients)
    for (j = 0; j < menu[i].ingredients.length; j++) {
        ingredientsStorage.push(menu[i].ingredients[j])
    }
}

let ingredientsStorageString = ingredientsStorage.toString()

// console.log(ingredientsStorageString)

// Importante salientar que o loop com 'i' e 'j' acima foram feitos porque foram requisitados no exercício
// afinal, seria muito mais simples usar o método .toString() direto - mas os loops reforçam a lógica

// function stringOfObject(obj) {
//     let objStorage = []
//     for(i = 0; i < obj.length; i++) {
//         for(elem in obj[i]) {
//             objStorage.push((obj[i][elem]))
//         }
//     }
//     console.log(objStorage)
// }

// stringOfObject(menuStorage)

let string = 'vegan'

function returnEqual(obj, string) {
    let objReturn = ''
    for(i = 0; i < obj.length; i++) {
        for(elem in obj[i]) {
            elem === string ? objReturn += (string + ': ' + obj[i][elem] + ' ') : console.log('Nenhum item encontrado')
        }
    }
    console.log(objReturn)
}

returnEqual(menuStorage, string)