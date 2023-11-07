import { Language } from './language';

export interface Greetable {
    greet(firstName: string, language: Language): string;
}

interface UserGreetCounter {
    countGreet(firstName: string): void;
    greetCounter: number;
    userGreetCount(firstName: string): number;
}
