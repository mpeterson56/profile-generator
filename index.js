const employee = require('./lib/employee')
const fs = require('fs');
const inquirer = require('inquirer');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');



const promptquestions = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'manager',
        message: 'What is managers name? (Required)',
        validate: managerInput => {
          if (managerInput) {
            return true;
          } else {
            console.log('Please enter your project manager!');
            return false;
          }
        }
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter employee id (Required)',
        validate: idInput => {
          if (idInput) {
            return true;
          } else {
            console.log('Please enter an id for the employee!');
            return false;
          }
        }
      },

   
      {
        type: 'input',
        name: 'email',
        message: 'What is your email? (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('You need to enter your email');
            return false;
          }
        }
      },

      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the manager office number? (Required)',
        validate: officeNumberInput => {
          if (officeNumberInput) {
            return true;
          } else {
            console.log('You need to enter the office number');
            return false;
          }
        }
      },


 ]);

};
const promptQuestions = QuestionsData => {
    if (!QuestionsData.employee){
      QuestionsData.employee= [];
    }
    return inquirer
    .prompt([

        

          {
            type: 'list',
            name: 'role',
            message: 'What employee role would you like to add? (select one please)',
            choices: [ 'engineer', 'intern'],
            
          },

          {
            type: 'input',
            name: 'github',
            message: 'Enter the engineer github.',
         when: ({ engineer}) => engineer,
          },
          {
            type: 'input',
            name: 'school',
            message: 'Enter the interns school.',
            when:({ intern}) => intern,
          },
        
         





          {
            type: 'input',
            name: 'name',
            message: 'What is their name? (Required)',
           
            validate: managerInput => {
              if (managerInput) {
                return true;
              } else {
                console.log('Please enter their name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'id',
            message: 'Enter employee id (Required)',
           
            validate: idInput => {
              if (idInput) {
                return true;
              } else {
                console.log('Please enter an id for the employee!');
                return false;
              }
            }
          },
    
       
          {
            type: 'input',
            name: 'email',
            message: 'What is their email? (Required)',
            
            validate: emailInput => {
              if (emailInput) {
                return true;
              } else {
                console.log('You need to enter their email');
                return false;
              }
            }
          },

    
    
    
          {
            type: 'confirm',
            name: 'confirmAddEmployee',
            message: 'Would you like to enter another employee',
            default: false
          },

    
    
    
    
    ])
    .then(employeeData => {
      QuestionsData.employee.push(employeeData);
      if (employeeData.confirmAddEmployee) {
        return promptQuestions(QuestionsData);
      } else {
        return QuestionsData;
      }
    });
    };



promptquestions()
.then(promptQuestions)
.then(employeeData => {
    const pageHTML = generatePage(employeeData);

    fs.writeFile('./index.html', pageHTML, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out index.html in this directory to see it!');
    });
  });









const generateEmployee = employee => {
    if(!employee){return ``;}
    return `
    <body class="uk-grid-small uk-child-width-expand uk-text-center uk-flex-center">
    <div class=" manager uk-card uk-card-default uk-card-body ">
 <h2 class="uk-background-primary" > ${name}  </h2>
 <h3 class="uk-background-primary" >   ${role}   </h3>
 <h4>    ${id}   </h4>
 <h4>   ${email}     </h4>
 <h4>    ${officeNumber} ${school} ${github} </h4>
 
    </div>
       
      `;
     
    

      
  };



const generatePage = (name, role, id , email , github,school, officeNumber ) => {
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


   <div class=" intern uk-card uk-card-default uk-card-body">
   <h2 class="uk-background-primary" > ${name}  </h2>
<h3 class="uk-background-primary" >   ${role}   </h3>
<h4>    ${id}   </h4>
<h4>   ${email}     </h4>
<h4>    ${school}  </h4>

       </div>

       <div class=" engineer uk-card uk-card-default uk-card-body">
       <h2 class="uk-background-primary" > ${name}  </h2>
<h3 class="uk-background-primary" >   ${role}   </h3>
<h4>    ${id}   </h4>
<h4>   ${email}     </h4>
<h4>    ${github}  </h4>

           </div>

          

    </body>
    
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.14.0/dist/js/uikit.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/uikit@3.14.0/dist/js/uikit-icons.min.js"></script>
    </html>
    `;
  };

  module.exports = generatePage;