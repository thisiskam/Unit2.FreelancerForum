const names = ['Kameron', 'Max', 'Chelsea', 'Michelle', 'Megan', 'Lucas', 'Scott', 'Julia'];
const occupations = ['Contractor', 'Developer', 'Translator', 'Cleaner', 'Realtor', 'Welder', 'Teacher']

const freeLancers = [
    {name:'Andre', occupation:'Dog Walker', wage:30},
    {name:'Morgan', occupation:'Nanny', wage:50}
]

const maxFreelancers = 20

//set interval for how often a freelancer is added to the freeLancers array
const addFreelancerIntervalId = setInterval(addFreelancer, 3000);

//Render is called to the page
render()

//first table elements function
function render () {
    //funcion to loop through my first array of freelancers and add them to the HTML Table
    freeLancers.forEach((freelancer) => {
        addFreelancerToTable(freelancer)
    })

    //calls function that collects the average wages
    averageWage()
}

//funtion to add all freelancer tetails onto HTMlL. Will be called on first render and then later when more Freelancers are added
function addFreelancerToTable(details) { 
    //create new rows and cells in the HTML for the new freelancer data
    let tbl = document.querySelector('tbody');
    let newRow = tbl.insertRow(-1);
    let newName = newRow.insertCell(0);
    let newOccupation = newRow.insertCell(1);
    let newWage = newRow.insertCell(2);
    //add data to the cells with class names
    newName.innerHTML = details.name;
    newName.classList.add('name')
    newOccupation.innerHTML = details.occupation;
    newOccupation.classList.add("occupation")
    newWage.innerHTML = details.wage;
    //class name wage will be used to get all wages to calculate average
    newWage.classList.add("wage")
}

//function that calculates average wage. will be called on first render, and then each time a freelancer is added
function averageWage() {
    let total = 0
    //collects all wage data from the freeLancers array
    freeLancers.forEach((freelancer) => total = total + freelancer.wage);
    //gets average then converts it to dollar format
    let average = total / freeLancers.length
    let dollars = parseFloat(average).toFixed(2)
    //pushes that data to the html
    document.getElementById('averagePrice').textContent=`${dollars}`;
}

//function that will be called every few seconds to add new freelancers to the page
function addFreelancer() {
    if(freeLancers.length <= maxFreelancers) {
        //functions to get random data for a new freelancer
        const addName = names[Math.floor(Math.random() * names.length)];
        const addOccupation = occupations[Math.floor(Math.random() * occupations.length)];
        const addWage = (Math.floor(Math.random() * 10) + 1) * 10;
        //pushes that data to the freeLancers array
        freeLancers.push({name:addName, occupation:addOccupation, wage:addWage});

        //calls the function to add the new data to the table, doing it this way will prevent the data from repeating over and over. 
        addFreelancerToTable({name:addName, occupation:addOccupation, wage:addWage})

        //collects the average wage each time
        averageWage()
    } else {
        clearInterval(addFreelancerIntervalId)
        alert('No More Freelancers To Show')
      }
  }