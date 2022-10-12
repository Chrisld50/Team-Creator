function  managerCard (manager) {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body bg-primary text-white">
      <h2 class="card-name">${manager.name} </h2>
      <h3 class="card-role fa-regular fa-mug-hot "> Manager </h3>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id} </li>
      <li class="list-group-item">Email: ${manager.email} </li>
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
      <li class="list-group-item">Email: ${engineer.email} </li>
      <li class="list-group-item">Github: ${engineer.github} </li>
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
      <li class="list-group-item">Email: ${intern.email} </li>
      <li class="list-group-item">School: ${intern.school} </li>
    </ul>
  </div>
    `
}

const RenderHTML = (data) => {

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];

    const role = employee.roleAssign()
    
    if (role === 'Manager'){
      const renderedManager = managerCard(employee)
    }
  }




    return
    // teamArray = [];

    //         teamArray.push(renderedManager)
    

    //     if(role === 'Engineer'){
    //         const renderedEngineer = engineerCard(employee)
    //         teamArray.push(renderedEngineer)
    //     }

    //     if(role === 'Intern'){
    //         const renderedIntern = internCard(employee)
    //         teamArray.push(renderedIntern)
    //     }
        

        
    // }
    // const allCards = teamArray.join('')
    // const finalPage = contentPage(allCards)
    // return finalPage;
}
function contentPage(allCards) {
   return ` <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> 
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
    <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
    <title>New Document Type</title>
</head>

<body>
    <div class ="container-fluid">
        <div class ="mb-3 col-12 jumbotron bg-danger" style="height:75px;">
            <h1 class="text-center text-white"> My Team </h1>
        </div>
    </div>

    <div class="container">
        <div class="row">
            <div class="team-created col-12 d-flex justify-content-center">

        ${allCards}
                
            </div>
         </div>
    </div>

 
</body>
</html>
`
}



module.exports = RenderHTML;