# quickPickFromList
This extension generates a QuickPick. The options are provided in a file. It returns the selection for further use.


## Usage
The use case is the dynamical generation of a QuickPick in custom VSC [tasks](https://code.visualstudio.com/docs/editor/tasks). 

For example:
```json
	"tasks": {
		"version": "2.0.0",
		"tasks": [
			{
				"label": "My Task",
				"type": "shell",
				"command": "echo", // your command here
				"args": [
					"${input:pickDemo}"
				],
				"problemMatcher": []
			}
		],
		"inputs": [
			{
				"id": "pickDemo",
				"type": "command",
				"command": "populate-quickpick.quickPickFromList"
			}
		]
```

If you call the task `My Task`, a QuickPick window will open which lists the options provided in `myFile`. The selected option is then echoed.

This allows to easily pass an argument from within VSC to a python script.

```json
"command": "python",
"args": [
    "script.py",
	"--arg",
    "${input:pickDemo}"
    ]
```

## `myFile` Format
Every line is listed as one option in the QuickPick window. The file is split with the `\n` character.

```
option 1
option 2
... 
```

## Install and adaption of the extension
- install `.vsix` via `code --install-extension <path to vsix>` from file
- extension can be adapted and packaged with `vsce`, no need to publish it ([more infos](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions)).


## Links
- What is a [QuickPick](https://code.visualstudio.com/api/ux-guidelines/quick-picks)?
- [QuickInput examples](https://github.com/microsoft/vscode-extension-samples/tree/main/quickinput-sample) from VSC
- Original idea of how to [populate a pickString dynamically](https://stackoverflow.com/a/64637337/19407854) within a task using an extension
- [VSC extension](https://code.visualstudio.com/api/get-started/your-first-extension) basics