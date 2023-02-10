import { QuestionsController } from "./Controllers/QuestionsController.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  // valuesController = new ValuesController();

    triviaController = new QuestionsController();
}

window["app"] = new App();
