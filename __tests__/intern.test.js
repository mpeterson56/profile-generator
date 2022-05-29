const Intern = require('../lib/intern.js');


test('creates a intern object', () => {
    const intern = new Intern('Dave', 22, 'dave@mail');
  
    expect(intern.name).toEqual('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual('dave@mail');
   
  
  });