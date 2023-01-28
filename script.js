const animals = [
    {
        "Name": "Capybara",
        "Scientific Name": "Hydrochoerus hydrochaeris",
        "Random Fact": "Excellent at both diving and swimming.",
        "Weight": 50,
        "Height": 115,
        "Carnivore": false,
        "Predators": ["Jaguar", "Caiman", "Harpy Eagle"]
    },
    {
        "Name": "Otter",
        "Scientific Name": "Lutra Canadensis",
        "Random Fact": "There are 13 different species worldwide.",
        "Weight": 30,
        "Height": 105,
        "Carnivore": true,
        "Predators": ["Birds", "Foxes", "Wolves"]
    },
    {
        "Name": "Guinea Pig",
        "Scientific Name": "Cavia porcellus",
        "Random Fact": "Natively found in the Andes Mountain range",
        "Weight": 1,
        "Height": 20,
        "Carnivore": false,
        "Predators": ["Wild Cats", "Coyotes", "Wolves", "Snakes", "Owls"]
    },
    {
        "Name": "Prairie Dog",
        "Scientific Name": "Cynomys gunnisoni",
        "Random Fact": "They are cousins of the squirrels in your backyard.",
        "Weight": 1.20,
        "Height": 35,
        "Carnivore": false,
        "Predators": ["Foxes", "Hawks", "Eagles", "Badgers"]
    },
    {
        "Name": "Duck",
        "Scientific Name": "Canis Lupus",
        "Random Fact": "Rows of tiny plates line their teeth!",
        "Weight": 1.05,
        "Height": 40,
        "Carnivore": false,
        "Predators": ["Bobcats", "Foxes", "Coyotes", "Humans"]
    },
    {
        "Name": "Ferret",
        "Scientific Name": "Mustela furo",
        "Random Fact": "Ferrets can be trained to do tricks like dogs!",
        "Weight": 1.35,
        "Height": 45,
        "Carnivore": true,
        "Predators": ["Wolves", "Dogs"]
    },
    {
        "Name": "Fennec Fox",
        "Scientific Name": "Vulpes zerda",
        "Random Fact": "Found in the African Sahara Desert!",
        "Weight": 1.25,
        "Height": 32.5,
        "Carnivore": true,
        "Predators": ["Jackals", "Eagle"]
    },
    {
        "Name": "Hedgehog",
        "Scientific Name": "Atelerix albiventris",
        "Random Fact": "Thought to be one of the oldest mammals on Earth!",
        "Weight": 1.5,
        "Height": 16,
        "Carnivore": false,
        "Predators": ["Owls", "Dogs", "Foxes"]
    },
    {
        "Name": "Red Panda",
        "Scientific Name": "Ailurus fulgens",
        "Random Fact": "There are less than 3,000 left in the wild!",
        "Weight": 4.6,
        "Height": 90,
        "Carnivore": false,
        "Predators": ["Snow Leopard", "Marten", "Human"]
    },
    {
        "Name": "Macaw",
        "Scientific Name": "Ara ararauna",
        "Random Fact": "The largest species of parrot in the world!",
        "Weight": 1.45,
        "Height": 88,
        "Carnivore": false,
        "Predators": ["Jaguar", "Eagle", "Hawks", "Monkeys", "Snakes"]
    },
    {
        "Name": "Kangaroo",
        "Scientific Name": "Macropus rufus",
        "Random Fact": "Females have a deep pouch on their front!",
        "Weight": 75,
        "Height": 200,
        "Carnivore": false,
        "Predators": ["Human", "Dingo"]
    },
    {
        "Name": "Quokka",
        "Scientific Name": "Setonix brachyurus",
        "Random Fact": "Makes runways through the long grasses!",
        "Weight": 30,
        "Height": 47,
        "Carnivore": false,
        "Predators": ["Foxes", "Wild Cats", "Dogs"]
    }
]

const searchButton = document.getElementById("buttonId");
const searchIcon = document.getElementById("iSearch");
const textArea = document.getElementById("textId");
const h1Name = document.getElementsByTagName("h1");
const ulId = document.getElementById("ul-id");

window.onload = function() {
    for(let i = 0; i < animals.length; i++) {
        let animal = document.createElement("li");
        animal.id = [i] + animals[i]["Name"];
        ulId.append(animal);
        let animalName = document.createElement("h1");
        animalName.innerText = animals[i]["Name"].toUpperCase(); 
        document.getElementById([i] + animals[i]["Name"]).append(animalName);
        let animalImg = document.createElement("img");
        animalImg.classList.add('animal-picture');
        animalImg.src = './imgs/' + animals[i]["Name"] + '.png'; 
        document.getElementById([i] + animals[i]["Name"]).append(animalImg);

        let infosContainer = document.createElement("div");
        infosContainer.classList.add("infos-container");
        infosContainer.id = animals[i]["Name"];
        document.getElementById(animal.id).append(infosContainer);

        let span1 = document.createElement("span");
        span1.innerText = "Scientific Name"; 
        let p1 = document.createElement("p");
        p1.innerText = animals[i]["Scientific Name"];
        let span2 = document.createElement("span");
        span2.innerText = "Weigth"; 
        let p2 = document.createElement("p");
        p2.innerText = animals[i]["Weight"] + " kg"; 
        let span3 = document.createElement("span");
        span3.innerText = "Heigth"; 
        let p3 = document.createElement("p");
        p3.innerText = animals[i]["Height"] + " cm"; 
        let dietIcon = document.createElement("img");
        animals[i]["Carnivore"] ?
         dietIcon.src = "./imgs/meat.svg" : 
         dietIcon.src = "./imgs/leaf.svg"
        dietIcon.title = animals[i]["Carnivore"] ? "Carnivor" : "Not carnivorous";
        let span4 = document.createElement("span");
        span4.innerText = "Predators"; 
        let p4 = document.createElement("p");
        p4.innerText = (animals[i]["Predators"]).toString().split(',').join(', '); 
        let span5 = document.createElement("span");
        span5.innerText = "Random Fact"; 
        let p5 = document.createElement("p");
        p5.innerText = animals[i]["Random Fact"];

        console.log(
            `${animals[i]["Name"]}\n
            ${span1.innerText}: ${p1.innerText}\n
            ${span2.innerText}: ${p2.innerText}\n
            ${span3.innerText}: ${p3.innerText}\n
            Carnivore: ${animals[i]["Carnivore"]}\n
            ${span4.innerText}: ${p4.innerText}\n
            ${span5.innerText}: ${animals[i]["Random Fact"]}`
            )

        let animalId = animals[i]["Name"];
    
        document.getElementById(animalId).append(span1);
        document.getElementById(animalId).append(p1);
        document.getElementById(animalId).append(span2);
        document.getElementById(animalId).append(p2);
        document.getElementById(animalId).append(span3);
        document.getElementById(animalId).append(p3);
        document.getElementById(animalId).append(span4);
        document.getElementById(animalId).append(p4);
        document.getElementById(animalId).append(span5);
        document.getElementById(animalId).append(p5);
        document.getElementById(animalId).append(dietIcon);
        
    }
}

searchButton.addEventListener("click", searchAnimal);
searchIcon.addEventListener("click", searchAnimal);

textArea.addEventListener("keypress", (e) => {
    if(e.key === "Enter" && textArea.value !== '') {
        searchAnimal();
    } else if(e.key === "Enter") {
        window.alert("Type an animal name.")
    }
})

function searchAnimal() {

    if(textArea.value === '') {
        window.alert("Type an animal name.")
        return
    }
    
    for(let i = 0; i < animals.length; i++) {
        
        !h1Name[i].innerText.toLowerCase().includes(textArea.value.toLowerCase()) ? 
        document.getElementById([i] + animals[i]["Name"]).style.display = 'none' : 
        document.getElementById([i] + animals[i]["Name"]).style.display = 'flex'

}}

function labenuAverageNumRequest() {
    let average = 0;
    for(let i = 0; i < animals.length; i++) {
        average = average + (animals[i]["Height"] + animals[i]["Weight"]) / 2;
    }
    console.log(average)
}

labenuAverageNumRequest();