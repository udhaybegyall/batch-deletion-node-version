# batch-deletion-node-version
Delete files🗃 in one go with same extension/filetype. Node version

Have you encounterd a situation where you have to select multiple files📁 with same filetype/extension to delete them, I have
when deleting multiple .srt files from my directory.

## Prerequisites
```
node js
```
## Usage

```
npm install -g batch-deletion-node-version
```
```
batch_delete --filetype --path
```

There are two arguments you have to pass.

It is ❗important❗ to specify the file type or extension.
```
--filetype or -ft
```

It is optional to specify the path, by default it will take current working directory.
```
--path or -p
```
## Example
```
batch_delete --filetype .txt
```
***or***
```
batch_delete -ft .txt
```

## Multiple file type arguments
You can pass multiple filetypes at sametime
```
batch_delete --filetype .txt .java .cpp
```

## Python version
[Batch Deletion](https://github.com/udhaybegyall/Batch_deletion)
