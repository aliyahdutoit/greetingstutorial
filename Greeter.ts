import { Language } from './language';
import { GreetIn } from './greetIn';
import { UserGreetCounter } from './userGreetCounter';

export class Greeter {
    private greetLanguages: Map<Language, GreetIn>;

    constructor(greetLanguages: Map<Language, GreetIn>) {
        this.greetLanguages = greetLanguages;
    }

    greet(name: string, chosenLanguage: Language): string {
        const greetIn = this.greetLanguages.get(chosenLanguage);
        if (greetIn) {
            return greetIn.greet(name);
        }
        return "";
    }
}


// export {Greeter};