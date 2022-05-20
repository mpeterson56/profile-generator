const engineer = require('../lib/engineer.js');

test('creates a engineer object', () => {
    const engineer = new engineer('Dave');
  
    expect(engineer.name).toBe('Dave');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(email));
   
  
  });