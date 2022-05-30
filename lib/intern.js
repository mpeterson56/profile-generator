const employee= require('../lib/employee.js')

class intern extends employee{
constructor(name , id , email, school){
super(name, id , email);

this.school = school;


}
getSchool () {
   return this.school;
}
getRole () {
   return "Intern";
}
}

module.exports=intern;



//function intern(name= ''){
   // this.name = name;
//this.id = id;
//this.email = email;
//this.school = school;

//}

//getSchool()
//getRole()
