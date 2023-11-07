import {Language} from "./language";
import { GreetIn } from "./greetIn";
import { Greetable } from "./interfaces";
class GreetInManager implements Greetable {
    private greetLanguages: Map<Language, GreetIn>;

    constructor(greetLanguages: Map<Language, GreetIn>) {
        this.greetLanguages = greetLanguages;
    }

    greet(firstName: string, language: Language): string {
        let greetIn = this.greetLanguages.get(language);
        if (greetIn) {
            return greetIn.greet(firstName);
        }
        return "Language not supported";
    }
}
