import * as vscode from 'vscode';
import * as fs from 'fs';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('populate-quickpick.quickPickFromList', async () => {
        
		// TODO
		// get file from relative path of workspace
		// use workspace variable and explanatory filename for txt
		// https://code.visualstudio.com/docs/editor/variables-reference
		const myFile = '/Users/juliamayer/orga/available_headers.txt';

		const content = fs.readFileSync(myFile);
		const myArray = content.toString().split("\n");


        const selection = await vscode.window.showQuickPick(myArray);
        if (selection) {
            // vscode.window.showInformationMessage(`You selected: ${selection}`);
			return selection;
        } else {
            vscode.window.showInformationMessage('No item selected');
        }
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}