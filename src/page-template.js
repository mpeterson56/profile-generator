const generateEmployee = employee => {
    if(!employee){return ``;}
   return`
    <body class="uk-grid-small uk-child-width-expand uk-text-center uk-flex-center">
    <div class=" manager uk-card uk-card-default uk-card-body ">
    ${employee
        .map(({name,role,id,email,school,github}) => {
            return`
    
 <h2 class="uk-background-primary" > ${name}  </h2>
 <h3 class="uk-background-primary" >   ${role}   </h3>
 <h4>    ${id}   </h4>
 <h4>   ${email}     </h4>
 <h4>    ${school || github} </h4>
 
    </div>
       <div>
      `;
    })
    .join('')}
    
    </div>
      
    `;
};
  


const generatePage = (name, role, id , email , officeNumber ) => {
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
   <div class=" manager uk-card uk-card-default uk-card-body ">
<h2 class="uk-background-primary" > ${name}  </h2>
<h3 class="uk-background-primary" >   ${role}   </h3>
<h4>    ${id}   </h4>
<h4>   ${email}     </h4>
<h4>    ${officeNumber}  </h4>
   </div>
   ${generateEmployee}
          
    </body>
    
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.14.0/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.14.0/dist/js/uikit-icons.min.js"></script>
    </html>
    `;
  };

  module.exports = generatePage;