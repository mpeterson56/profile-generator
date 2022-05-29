
const { expect } = require('expect');

const Employee = require('../lib/employee.js');

test('creates a employee object', () => {
    const employee = new Employee('Dave', 69, 'Dave@mail' );
  
    expect(employee.name).toEqual('Dave');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual('Dave@mail');
   
  
  });