const names = ['Kameron', 'Max', 'Chelsea', 'Michelle', 'Megan', 'Lucas', 'Scott', 'Julia'];
const occupations = ['Contractor', 'Developer', 'Translator', 'Cleaner', 'Realtor', 'Welder', 'Teacher']

const freeLancers = [
    {name:'Andre', occupation:'Dog Walker', wage:30},
    {name:'Morgan', occupation:'Nanny', wage:50}
]

const addFreelancerIntervalId = setInterval(addFreelancer, 5000);

render()

function render () {
    freeLancers.forEach((freelancer) => {
        addFreelancerToTable(freelancer)
    })
    averageWage()
}


function addFreelancerToTable(details) { 
    let tbl = document.querySelector('tbody');
    let newRow = tbl.insertRow(-1);
    let newName = newRow.insertCell(0);
    let newOccupation = newRow.insertCell();
    let newWage = newRow.insertCell(2);
    newName.innerHTML = details.name;
    newName.classList.add('name')
    newOccupation.innerHTML = details.occupation;
    newOccupation.classList.add("occupation")
    newWage.innerHTML = details.wage;
    newWage.classList.add("wage")
}

function averageWage() {
    let total = 0
    freeLancers.forEach((freelancer) => total = total + freelancer.wage);
    let average = total / freeLancers.length
    let dollars = parseFloat(average).toFixed(2)
    document.getElementById('averagePrice').textContent=`${dollars}`;
}

function addFreelancer() {

    const addName = names[Math.floor(Math.random() * names.length)];
  
    const addOccupation = occupations[Math.floor(Math.random() * occupations.length)];

    const addWage = (Math.floor(Math.random() * 10) + 1) * 10;
  
    freeLancers.push({name:addName, occupation:addOccupation, wage:addWage});
    
    addFreelancerToTable({name:addName, occupation:addOccupation, wage:addWage})
  }
//function should select the table from html
//funtion should then call