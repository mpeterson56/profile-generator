const employee = require('./lib/employee')
const fs = require('fs');
const inquirer = require('inquirer');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const generatePage = require('./src/page-template');


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









