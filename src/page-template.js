const generateManager = manager => {
    return`
    
    <div class=" manager uk-card uk-card-default uk-card-body ">
    <h2 class="uk-background-primary" > ${manager.name}  </h2>
    <h3 class="uk-background-primary" >   ${manager.role}   </h3>
    <h4>  ID:  ${manager.id}   </h4>
    <h4>Email: <a href="mailto:${manager.email}">${manager.email}  </a>   </h4>
    <h4> Office Number:   ${manager.officeNumber}  </h4>
       </div>
    
    
    `
}


const generateEngineer = Engineer => {
  return`
  
  <div class=" Engineer uk-card uk-card-default uk-card-body ">
  <h2 class="uk-background-primary" > ${Engineer.name}  </h2>
  <h3 class="uk-background-primary" >   ${Engineer.role}   </h3>
  <h4>  ID:  ${Engineer.id}   </h4>
  <h4>Email: <a href="mailto:${Engineer.email}">${Engineer.email}  </a>   </h4>
  <h4>  Github: <a href="https://github.com/ ${Engineer.github}">${Engineer.github} </a>  </h4>
     </div>
  
  
  `
}

const generateIntern = Intern => {
  return`
  
  <div class=" Intern uk-card uk-card-default uk-card-body ">
  <h2 class="uk-background-primary" > ${Intern.name}  </h2>
  <h3 class="uk-background-primary" >   ${Intern.role}   </h3>
  <h4>  ID:  ${Intern.id}   </h4>
  <h4>Email: <a href="mailto:${Intern.email}">${Intern.email}  </a>   </h4>
  <h4>  school: ${Intern.school}  </h4>
     </div>
  
  
  `
}




const generatePage = (name, role, id , email , officeNumber ) =>  {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.14.0/dist/css/uikit.min.css">
    
      <title>My Team</title>
    </head>
    <header class="uk-child-width-expand@s uk-text-center uk-background-primary uk-margin-bottom-10 ">
    <div class="uk-container uk-width-expand@m uk-animation-toggle"tabindex="0">
        
    <h1 class="uk-align-center uk-animation-shake uk-animation-reverse "  >  My Team
    </h1 >
    
    
    
    </div>
    
        </header>
        
    <body class="uk-grid-small uk-child-width-expand uk-text-center uk-flex-center">

   ${generateManager}
   ${generateEngineer}
   ${generateIntern}
          
    </body>
    
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.14.0/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.14.0/dist/js/uikit-icons.min.js"></script>
    </html>
    `;

  };

  module.exports = generatePage;