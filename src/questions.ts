import { EChoicesBoilerPlate } from "enum/choices-bolierplate.enum";
import path from "path";
import fs from 'node:fs';
import { EErros } from "enum/erros.enum";
import { EGitName } from "enum/git-name.enum";

export const questions = [
    {
      type: 'list',
      name: 'tech',
      message: 'Qual Boilerplate devo criar?',
      choices: [EChoicesBoilerPlate.NODEJS_TS],
    },
    {
        type: 'input',
        name: 'folderName',
        message: 'Qual nome devo dar para pasta do Projeto?',

      validate(folderName: string){
        if(!folderName) return EErros.ERROR_NULL;

        if(/[^\w\s-]/.test(folderName)) return EErros.ERROR_SPECIAL_CHARACTERES;

        if(folderName === EGitName.NODEJS_TS) return EErros.ERROR_GIT_NAME
        
        try {
            const dir = path.resolve(folderName);
            fs.accessSync(dir, fs.constants.R_OK);
            return EErros.ERROR_INVALID_FOLDER;
        } catch (error) {
            
        }

        return true;
      }

      
    },
  ];
  