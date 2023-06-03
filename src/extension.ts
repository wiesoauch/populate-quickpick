import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';

export function activate(context: vscode.ExtensionContext) {
    let disposable = vscode.commands.registerCommand('populate-quickpick.quickPickFromList', async () => {


        let myFile = "";
        if (vscode.workspace.workspaceFolders !== undefined) {
            let workspacePath = vscode.workspace.workspaceFolders[0].uri.fsPath;
            myFile = path.join(workspacePath, "scripts/temp/available_headers.txt");

        } else {
            vscode.window.showInformationMessage('No workspace is currently open');
        }

        vscode.window.showInformationMessage("QuickPick from: " + myFile);

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

export function deactivate() { }