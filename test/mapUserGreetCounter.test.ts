import { MapUserGreetCounter } from '../userGreetCounterImpl'
import  assert  from 'assert';

describe('MapUserGreetCounter', () => {
    it('should count unique users greeted', () => {
        const userCounter = new MapUserGreetCounter();
        userCounter.countGreet('Alice');
        userCounter.countGreet('Bob');
        userCounter.countGreet('Alice');
        userCounter.countGreet('Charlie');

        assert.strictEqual(userCounter.greetCounter, 3);
    });

    it('should count individual user greetings', () => {
        const userCounter = new MapUserGreetCounter();
        userCounter.countGreet('Alice');
        userCounter.countGreet('Bob');
        userCounter.countGreet('Alice');
        userCounter.countGreet('Charlie');

        assert.strictEqual(userCounter.userGreetCount('Alice'), 2);
        assert.strictEqual(userCounter.userGreetCount('Bob'), 1);
        assert.strictEqual(userCounter.userGreetCount('Charlie'), 1);
        assert.strictEqual(userCounter.userGreetCount('David'), 0);
    });
});
