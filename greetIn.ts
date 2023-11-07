import { Language } from './language';

interface GreetIn {
    greet(name: string): string;
  }
  

 
  class GreetInEnglish implements GreetIn {
    greet(name: string) {
      return "Hello, " + name;
    }
  }
  

  class GreetInAfrikaans implements GreetIn {
    greet(name: string) {
      return "More, " + name;
    }
  }

  class GreetInXhosa implements GreetIn {
    greet(name: string) {
      return "Molo, " + name;
    }
  }


  class GreetInFrench implements GreetIn {
    greet(name: string) {
      return "Bonjour, " + name;
    }
  }
  
  class GreetInSpanish implements GreetIn {
    greet(name: string) {
      return "Hola, " + name;
    }
  }
  

  export function greet(name: string, chosenLanguage: Language) {
    switch (chosenLanguage) {
      case Language.AFR:
        return "Goeie more, " + name;
      case Language.ENG:
        return "Good morning, " + name;
      case Language.XHOSA:
        return "Molo, " + name;
      default:
        return "Language not supported";
    }
  }
  
  export { GreetIn, GreetInEnglish, GreetInAfrikaans, GreetInXhosa, GreetInFrench, GreetInSpanish };
  