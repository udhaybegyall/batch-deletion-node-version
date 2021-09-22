
# batch-deletion
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
batch-delete --filetype --path
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
batch-delete --filetype .txt
```
***or***
```
batch-delete -ft .txt
```

## Multiple file type arguments
You can pass multiple filetypes at sametime
```
batch-delete --filetype .txt .java .cpp
```
##  Changelog

- command change from batch_delete to batch-delete
- some other small changes

## Python version
[Batch Deletion](https://github.com/udhaybegyall/Batch_deletion)
