const characters = ['Bilbo', ' Gandalf', ' Nazgul ']

console.log(`Your characters are ${characters}`);
const answer = prompt(`What do you want to do with the characters? 
1. Add new Character
2. Delete a Character`)

const charactersIndex = characters.map((item, index) => {
    return (`[${index}] ${item}`);
})


const characterAdd = item => {
  character = characters.push(item);
  console.log(`${item} is added to your collections!`);
};

const characterDelete = (item) => {
    character = characters.splice(item, 1)
    console.log(characters);
    characterList = characters.map(item => {
        return `${item} is cool`
    })

    console.log(`${character} is deleted from your collections!`);

}

const characterOptions = (option) => {
    if (option == 1) {
        const answer = prompt('Please enter the name of the Character')
        characterAdd(answer)
        return console.log(characters);

    } else if (option == 2) {
        const character = charactersIndex
        const answer = prompt(`Who do you want to delete from the characters? \n ${character}`)
        characterDelete(answer)
        return console.log(`Your colection is updated: ${characters}`);
    }
}



// console.log(charactersIndex);

console.log(characterOptions(answer));

// characterAdd(answer)
// characterDelete(answer)
// console.log(characters);




// const users = [
//     { id: 1, name: 'Dea' },
//     { id: 2, name: 'Dhila' },
//     { id: 3, name: 'Zaky' }
// ]

// const user = users.find(item => item.id === 2)
// const newUsers = users.filter(item => item.id < 3)

// console.log(user);
// console.log(user.name);

// console.log(newUsers)

