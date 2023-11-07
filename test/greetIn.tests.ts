import  assert  from 'assert';
import { Language } from "../language";
import { greet } from '../greetIn';
import { GreetIn, GreetInXhosa, GreetInFrench, GreetInSpanish } from '../greetIn';

describe('GreetIn interface implementations', () => {
  it('Should greet in Xhosa', () => {
    const xhosaGreeter: GreetIn = new GreetInXhosa();
    const greeting: string = xhosaGreeter.greet("Thando");
    assert.equal(greeting, "Molo, Thando");
  });

  it('Should greet in French', () => {
    const frenchGreeter: GreetIn = new GreetInFrench();
    const greeting: string = frenchGreeter.greet("Pierre");
    assert.equal(greeting, "Bonjour, Pierre");
  });

  it('Should greet in Spanish', () => {
    const spanishGreeter: GreetIn = new GreetInSpanish();
    const greeting: string = spanishGreeter.greet("Carlos");
    assert.equal(greeting, "Hola, Carlos");
  });


  it('Should greet in Afrikaans', () => {
      assert.equal(greet('Jan', Language.AFR), 'Goeie more, Jan');
    });
  
    it('Should greet in English', () => {
      assert.equal(greet('John', Language.ENG), 'Good morning, John');
    });
  
    it('Should greet in Xhosa', () => {
      assert.equal(greet('Thando', Language.XHOSA), 'Molo, Thando');
    });
  
    it('Should return "Language not supported"', () => {
      assert.equal(greet('Someone', 'InvalidLanguage' as Language), 'Language not supported');
    });
});

// describe('Greet function for different languages', () => {
    
//   });