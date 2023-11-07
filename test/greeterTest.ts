import { Greeter } from '../Greeter';
import { MapUserGreetCounter } from '../userGreetCounterImpl';
import { GreetIn, GreetInAfrikaans, GreetInEnglish } from '../greetIn';
import { Language } from '../language';
import  assert  from 'assert';

// import { Greeter } from './Greeter'; // Update path accordingly

// Create instances of GreetIn implementations for each language
const greetMap = new Map<Language, GreetIn>();
greetMap.set(Language.AFR, new GreetInAfrikaans());
greetMap.set(Language.ENG, new GreetInEnglish());
// Add more languages if needed

const greeter = new Greeter(greetMap);

// Test cases
assert.equal("Goeie dag, Andre", greeter.greet("Andre", Language.AFR));
assert.equal("Good day, Andrew", greeter.greet("Andrew", Language.ENG));
// assert.equal("", greeter.greet("Andrew", Language.fr)); // Non-existent language

// Add more test cases as required
