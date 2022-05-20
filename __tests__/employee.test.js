const employee = require('../lib/employee.js');

test('creates a employee object', () => {
    const employee = new employee('Dave');
  
    expect(employee.name).toBe('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(email));
   
  
  });