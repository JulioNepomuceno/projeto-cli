#!/usr/bin/env node

import { GenFile } from 'controller/generate.controller';
import inquirer from 'inquirer';
import { IAnswersP } from 'interface/answers.interface';
import { questions } from 'questions';


class Init {
  constructor() {
    inquirer.prompt(questions).then((answrs:IAnswersP) => {
      GenFile.gen(answrs);
    });
  }
}

new Init();
