const { expect } = require('expect');
const Manager = require('../lib/manager.js');


test('creates a manager object', () => {
    const manager = new Manager('Dave', 56, 'dave@mail', 69);
  
    expect(manager.name).toEqual('Dave');
    expect(manager.id).toEqual(expect.any(Number));
    expect(manager.email).toEqual('dave@mail');
   expect(manager.officeNumber).toEqual(expect.any(Number))
  
  });