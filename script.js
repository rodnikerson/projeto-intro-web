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
console.log(averageCalories)

console.log(vegan1 && vegan2 && vegan3)
console.log(dish1.toUpperCase(), dish2.toUpperCase(), dish3.toUpperCase())

dishInfos1 = {
    dish: 'Caesar Salad',
    kCal: 200,
    vegan: true,
    ingredients: ['Lettuce', 'Parmesan Cheese', 'Crisp Croutons', 'Garlic']
}

dishInfos2 = {
    dish: 'The Hamburger',
    kCal: 600,
    vegan: false,
    ingredients: ['Ground Beef', 'Black Pepper', 'Cheese', 'Dry Bread']
}

dishInfos3 = {
    dish: 'Cauliflower Hot Wings',
    kCal: 550,
    vegan: true,
    ingredients: ['Cauliflower', 'Salt', 'Pepper', 'Vegan Hot Sauce', 'Coconut Oil', 'Garlic Powder', 'Paprika']
}

let menu = []

menu.push(dishInfos1, dishInfos2, dishInfos3)

console.log(menu)