function  managerCard (manager) {  // The functions below create each card for manager, engineer and intern.
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body bg-primary text-white">
      <h2 class="card-name">${manager.name} </h2>
      <h3 class="card-role fas fa-mug-hot"> Manager </h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id} </li>
      <li class="list-group-item">Email:<a href="mailto:${manager.email}" target="_blank" >  ${manager.email} </a> </li> </li>
      <li class="list-group-item">Office Number: ${manager.officeNumber} </li>
    </ul>
  </div>
    `
}

 function engineerCard (engineer) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body bg-primary text-white">
      <h2 class="card-name"> ${engineer.name} </h2>
      <h3 class="card-role fa-solid fa-glasses"> Engineer </h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${engineer.id} </li>
      <li class="list-group-item">Email:<a href="mailto:${engineer.email}" target="_blank" >  ${engineer.email} </a> </li>
      <li class="list-group-item">Github: <a href='https://www.github.com/${engineer.github}' target='blank'> ${engineer.github} </a></li>
    </ul>
  </div>
    `
}

 function internCard (intern){
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body bg-primary text-white">
      <h2 class="card-name"> ${intern.name} </h2>
      <h3 class="card-role fas fa-user-graduate"> Intern </h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${intern.id} </li>
      <li class="list-group-item">Email: <a href="mailto:${intern.email}" target="_blank" >  ${intern.email} </a> </li> </li>
      <li class="list-group-item">School: ${intern.school} </li>
    </ul>
  </div>
    `
}

const RenderHTML = (data) => {  // here we have the team array and push each team member to the teamArray.
  let teamArray = [] 

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];

    const role = employee.roleAssign()
    
    if (role === 'Manager'){
      const renderedManager = managerCard(employee)
      teamArray.push(renderedManager)
    }

    if(role === 'Engineer'){
      const renderedEngineer = engineerCard(employee)
      teamArray.push(renderedEngineer)
    }

    if (role === 'Intern'){
      const renderedIntern = internCard(employee)
      teamArray.push(renderedIntern)
    }
  }


  const allCards = teamArray.join('')  // here we join all the cards to the teamArray and create the final page with all the information together. 
  const finalPage = contentPage(allCards)

  return finalPage
}

function contentPage(allCards) {  // Here is the function that generates the html page and pushes the cards into the div. 
   return ` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.0/css/all.min.css" integrity="sha512-xh6O/CkQoPOWDdYTDqeRdPCVd1SpvCA9XXcUnZS2FmJNp1coAFzvtCN9BmamE+4aHK8yyUHUSCcJHgXloTyT2A==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <link rel="stylesheet" href="./style.css">
    <title> Team Creator </title>
</head>

<body>
    <div class ="container-fluid">
        <div class ="mb-3 col-12 jumbotron bg-danger" style="height:75px;">
            <h1 class="text-center text-white"> My Team </h1>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="team-created d-flex justify-content-between flex-wrap">

        ${allCards}
                
            </div>
         </div>
    </div>

 
</body>
</html>
`
}



module.exports = RenderHTML; //exporting the renderHTML.js