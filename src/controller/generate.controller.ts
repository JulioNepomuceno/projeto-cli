import path from 'node:path';
import shelljs from 'shelljs';
import fs from 'node:fs';
import { EChoicesBoilerPlate } from 'enum/choices-bolierplate.enum';
import { EGitName } from 'enum/git-name.enum';
import { IAnswersP } from 'interface/answers.interface';


class GenerateController {
  public gen(answrs: IAnswersP) {
    try {
      switch (answrs.tech) {

        case EChoicesBoilerPlate.NODEJS_TS:
            this._execPath(EGitName.NODEJS_TS, answrs.folderName);
          break;
      }
    } catch (error) {
      console.log(error);
    }
  }

  private _execPath(gitName:string, folderName:string){
        try {
            shelljs.cd(path.resolve());
            shelljs.exec(`git clone git@github.com:troquatte/${gitName}.git`);
            
            fs.renameSync(
                `${path.join(path.resolve(), gitName)}`,
                `${path.join(path.resolve(),folderName)}`
            )

            console.log('Arquivo criado com Sucesso');
            return shelljs.exit();
        } catch (error) {
            
        }
  }
}

export const GenFile = new GenerateController();
