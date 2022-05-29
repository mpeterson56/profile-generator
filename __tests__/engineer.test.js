const Engineer = require('../lib/engineer.js');

test('creates a engineer object', () => {
    const engineer = new Engineer('Dave',99, 'dave@mail', 'github');
  
    expect(engineer.name).toEqual('Dave');
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual('dave@mail');
    expect(engineer.github) .toEqual('github');
  
  });