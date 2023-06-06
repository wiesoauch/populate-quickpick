# quickPickFromFile
This extension generates a QuickPick. The options are provided in a file. It returns the selection for further use.

- [quickPickFromFile](#quickpickfromfile)
	- [Usage](#usage)
	- [`myFile` Details](#myfile-details)
	- [Install and adaption of the extension](#install-and-adaption-of-the-extension)
	- [Future Ideas](#future-ideas)
	- [Links](#links)



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
				"command": "populate-quickpick.quickPickFromFile"
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



## `myFile` Details

- path to file
  - must be created as such `<workspacePath>/scripts/temp/available_headers.txt`
  - the extension adapts automatically to the workspace you are in

- format
  - every line is listed as one option in the QuickPick window
  - the file is split with the `\n` character

```
option 1
option 2
... 
```



## Install and adaption of the extension
- install extension from `.vsix` 
  - via `code --install-extension <path to vsix>` from file
  - to list all existing extensions `code --list-extensions`
- uninstall older version 
  - via `code --uninstall-extension undefined_publisher.populate-quickpick`
  - additionally remove locally `rm -r undefined_publisher.populate-quickpick-0.0.1/` in `/Users/.../.vscode/extensions`
- extension can be adapted and packaged with `vsce`, no need to publish it ([more infos on packaging](https://code.visualstudio.com/api/working-with-extensions/publishing-extension#packaging-extensions))
  - in `/Users/.../populate-quickpick`
  - call `vsce package`
- test extension
  - without the need to install it via an Extension Development Host window with `F5`
  - there, call extension from the `Command Palette (shift-cmd-P)` via command `QuickPick from a File`
- the extension was created via `Yeoman` for vsc ([more infos on building extensions](https://code.visualstudio.com/api/get-started/your-first-extension)).

## Future Ideas
- add file path as option in user settings
- make extension run not only for workspaces but also without a workspace
- allow a hierarchy of topics
- make nested QuickPicks available for different hierarchy topics like shown in the [QuickInput examples](https://github.com/microsoft/vscode-extension-samples/tree/main/quickinput-sample)


## Links
- What is a [QuickPick](https://code.visualstudio.com/api/ux-guidelines/quick-picks)?
- [QuickInput examples](https://github.com/microsoft/vscode-extension-samples/tree/main/quickinput-sample) from VSC
- Original idea of how to [populate a pickString dynamically](https://stackoverflow.com/a/64637337/19407854) within a task using an extension
- [VSC extension](https://code.visualstudio.com/api/get-started/your-first-extension) basics