  

#  batch-deletion

Delete files🗃 in one go with same extension/filetype. Node version

  

Have you encounterd a situation where you have to select multiple files📁 with same filetype/extension to delete them, I have

when deleting multiple .srt files from my directory.

  

##  ‍Prerequisites

```
node js
```

##  🔮Usage

  

```
> npm install -g batch-deletion-node-version
```

```
> batch-delete --filetype --path
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

##  🪜Example

```
> batch-delete --filetype txt
```

***or***

```
> batch-delete -ft txt
```

  

##  ✖️Multiple file type arguments

You can pass multiple filetypes at sametime

```
> batch-delete --filetype txt java cpp
```

## 🚶‍♀️Walk through subdirectories.

Suppose you want to delete `file.txt` from each directory inside the current directory.
you have to pass flag -sd or --subdir as true. By default the flag is false so it wont delete files from sub-directories.

```bash
Current Directory
 └─> test
     ├── file.txt
     └─> first folder
         ├── file.txt
         └─> second folder
             ├── file.txt
             └── test.java
```
```
C:\Current Directory> batch-delete -ft md -sd true
```
*This will delete all file's with extension as .md from given directory📂 and it's subdirectories🗃.*

## Command-line Options
```
FLAGS:
    -ft, --filetype               Type/extension of the file.
    -p, --path                    Diretory link (by default current directory)
    -sd, --subdir                 Check's for the files in subdirectories.
    --------------------------------------------------------------------------
FLAG OPTIONS:
    -ft [Multiple fileTypes]      Accepts multiple filetypes.
    -p  [Dir path]                Accepts single directory path.
    -sd [boolean]                 Accepts true/false (by default false).
    --------------------------------------------------------------------------
OPTIONAL FLAGS
    -p, --path
    -sd --subdir
```

## 🗜️Changelog
-  [x] Visual changes.
-  [x] Logs time taken.
-  [x] few other things.


### Previous version
- Performance improved.
- flag -sd to allow deleting from sub-directories.
- Removed flag -dt for directory tree.

  
 ## Any suggestions or issues
 [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=black)](https://github.com/udhaybegyall/batch-deletion-node-version/issues)
