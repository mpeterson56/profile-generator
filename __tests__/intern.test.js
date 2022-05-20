const intern = require('../lib/intern.js');


test('creates a intern object', () => {
    const intern = new intern('Dave');
  
    expect(intern.name).toBe('Dave');
    expect(intern.id).toEqual(expect.any(Number));
    expect(intern.email).toEqual(expect.any(email));
   
  
  });