
class employee{
constructor(name,id ,email){
    this.name=name;
    this.id= id;
    this.email= email;

}

getName() {
    return this.name;
}

getId() {
    return this.id;
}


getemail () {
    return this.email;
}

getRole() {
return 'employee';
}
}




module.exports= employee;
//function employee(name=''){
   // this.role=['engineer','manager','intern']
//this.name = name;
//this.id = id;
//this.email = email;


//}

//getName()
//getId ()
//getEmail()
//getRole()