import { Pool } from 'pg';
import { PostgresUserGreetCounter } from '../postgresUserGreetCounter';
import assert from "assert";

describe('PostgresUserGreetCounter', () => {
    let pool: Pool;
    let postgresUserGreetCounter: PostgresUserGreetCounter;

    before(() => {
        pool = new Pool({
            // Your PostgreSQL configuration
            user: 'your_username',
            host: 'localhost',
            database: 'your_database_name',
            password: 'your_password',
            port: 5432,
        });

        postgresUserGreetCounter = new PostgresUserGreetCounter(pool);
    });

    it('should count greetings in PostgreSQL', async () => {
        await postgresUserGreetCounter.countGreet('Alice');
        await postgresUserGreetCounter.countGreet('Alice');
        await postgresUserGreetCounter.countGreet('Bob');
        const counter = await postgresUserGreetCounter.greetCounter;

        // Assertions
        // You may need to change this based on your database setup
        assert.strictEqual(counter, 2);
        assert.strictEqual(await postgresUserGreetCounter.userGreetCount('Alice'), 2);
        assert.strictEqual(await postgresUserGreetCounter.userGreetCount('Bob'), 1);
        assert.strictEqual(await postgresUserGreetCounter.userGreetCount('Charlie'), 0);
    });

    after(() => {
        pool.end();
    });
});
