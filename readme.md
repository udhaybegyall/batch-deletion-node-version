  

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

##  🪜Example

```

batch-delete --filetype txt

```

***or***

```

batch-delete -ft txt

```

  

##  ✖️Multiple file type arguments

You can pass multiple filetypes at sametime

```

batch-delete --filetype txt java cpp

```

## Directory tree
```
batch-delete -ft txt java -dt true
```
***output***
```bash
src
 └─> test
     ├── file.txt
     └─> first folder
         ├── file.txt
         └─> second folder
             ├── file.txt
             └── test.java

- Deleted 4 files. -
```

## 🚶‍♀️Walk through subdirectories.

Suppose you want to delete `readme.md` from each directory inside the current directory.

```bash
Current Directory/
├─ go chain/
│  ├─ chain.go
│  ├─ `readme.md`
├─ js/
│  ├─ script.js
│  ├─ `redme.md`
```
```
C:\Current Directory> batch-delete -ft md
```
*This will delete all file's with extension as .md from given directory📂 and it's subdirectories🗃.*

##  🗜️Changelog
- [x] Performance issue --fixed
- [x] Flag to show directory tree of located files with matching filetypes.

### Previous version
- Supports walk through subdirectories.
- No need to add dot while specifying filetype.
- command change from batch_delete to batch-delete
- some other small changes

  
 ## Any suggestions or issues
 [![github](https://img.shields.io/badge/github-1DA1F2?style=for-the-badge&logo=github&logoColor=black)](https://github.com/udhaybegyall/batch-deletion-node-version/issues)
