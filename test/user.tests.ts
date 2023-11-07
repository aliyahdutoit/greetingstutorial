import assert  from 'assert';
import greet from '../greet';
import Person from '../person';

describe('Greet function', () => {
  it('Should greet a user with an email when provided', () => {
    assert.equal(
      "Hello, Bob Crow we will be in touch at: bob@crow.com",
      greet({
        firstName: "Bob",
        lastName: "Crow",
        email: "bob@crow.com"
      })
    );
  });

  it('Should greet a user with first and last name when email is missing', () => {
    assert.equal(
      "Hello, Bob Crow we can't contact you.",
      greet({
        firstName: "Bob",
        lastName: "Crow"
      })
    );
  });
});
