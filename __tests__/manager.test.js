const manager = require('../lib/manager.js');


test('creates a manager object', () => {
    const manager = new manager('Dave');
  
    expect(manager.name).toBe('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual(expect.any(email));
   
  
  });