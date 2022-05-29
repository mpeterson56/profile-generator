const Employee = require('./lib/employee')
const fs = require('fs');
const inquirer = require('inquirer');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');

const generatePage = require('./src/page-template');
const Manager = require('./lib/manager');

const employeeArray = [];

const promptquestions = () => {
  if(!Manager.employeeArray){Manager.employeeArray= [];}
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
type:'confirm',
name:'role',
message: 'confirm manager?',
default:true

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
        validate:emailInput => {
          valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
          if (valid) {
              return true;
          } else {
              console.log('Please enter a valid Email address.');
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


 ]).then(addManager => {
const {name, id ,role, email ,officeNumber} = addManager;
const manager = new Manager (name, id,role, email , officeNumber);
   employeeArray.push(Manager)
 }
   );
 
 
 


};
const promptQuestions = () => {
    if (!Employee.employeeArray){
      Employee.employeeArray= [];
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
            validate: githubInput => {
              if (githubInput) {
                return true;
              } else {
                console.log('Please enter their github!');
                return false;
              }
            },
         when: (input)=> input.role === 'engineer',
          },
          {
            type: 'input',
            name: 'school',
            message: 'Enter the interns school.',
            when:(input)=> input.role === 'intern',
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
            validate:emailInput => {
              valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailInput)
              if (valid) {
                  return true;
              } else {
                  console.log('Please enter a valid Email address.');
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
    .then(addEmployee => {
      const {name, id ,role, email ,github, school} = addEmployee;
      const employee = new Employee (name, id,role, email , github, school);
         employeeArray.push(Employee)


      if (addEmployee.confirmAddEmployee) {
        return promptQuestions(employeeArray);
      } else {
        return Employee;
      }
    });
    };



promptquestions()
.then(promptQuestions)
.then(employeeArray => {
    const pageHTML = generatePage(employeeArray);

    fs.writeFile('./index.html', pageHTML, err => {
      if (err) throw new Error(err);

      console.log('Page created! Check out index.html in this directory to see it!');
    });
  });









