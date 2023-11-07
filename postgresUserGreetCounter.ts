import { UserGreetCounter } from './userGreetCounter';
import { Pool } from 'pg';

class PostgresUserGreetCounter implements UserGreetCounter {
    private pool: Pool;

    constructor(pool: Pool) {
        this.pool = pool;
    }

    async countGreet(firstName: string): Promise<void> {
        const client = await this.pool.connect();
        try {
            const query = {
                text: 'INSERT INTO greet_counter (first_name) VALUES($1) ON CONFLICT (first_name) DO UPDATE SET count = greet_counter.count + 1',
                values: [firstName],
            };
            await client.query(query);
        } finally {
            client.release();
        }
    }

    async greetCounter(): Promise<number> {
        const client = await this.pool.connect();
        try {
            const result = await client.query('SELECT COUNT(*) FROM greet_counter');
            return 0;
        } finally {
            client.release();
        }
    }

   async  userGreetCount(firstName: string): Promise<number> {
        const client = await this.pool.connect();
        try {
            const query = {
                text: 'SELECT count FROM greet_counter WHERE first_name = $1',
                values: [firstName],
            };
            const result = await client.query(query);
            if (result.rows.length === 0) {
                return 0;
            } else {
                return parseInt(result.rows[0].count);
            }
        } finally {
            client.release();
        }
    }
}

export { PostgresUserGreetCounter };
