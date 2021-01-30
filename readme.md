# batch-deletion-node-version
Delete files🗃 in one go with same extension/filetype. Node version

Have you encounterd a situation where you have to select multiple files📁 with same filetype/extension to delete them, I have
when deleting multiple .srt files from my directory.

## Prerequisites
```
node js
```
## Usage

Clone the repo or download the file.

open command prompt and run js file.
```
node batch_deletion.js
```
There are two arguments you have to pass.

It is ❗important❗ to specify the file type or extension.
```
--filetype
```

It is optional to specify the path, by default it will take current working directory.
```
--path
```
## Example
```
node batch_deletion.js --filetype .txt --path your path
```