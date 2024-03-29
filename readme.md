  

#  batch-deletion

Delete files🗃 in one go with same extension/filetype. Node version

  

Have you encounterd a situation where you have to select multiple files📁 with same filetype/extension to delete them, I have

when deleting multiple .srt files from my directory.

  

##  ‍Prerequisites

```
node js
```

<br>

##  🔮 Usage

  

```
> npm install -g batch-deletion-node-version
```

```
> bd --filetype --path
```

It is ❗important❗ to specify the file type or extension.

```
--filetype or -ft
```

  

It is optional to specify the path, by default it will take current working directory.

```
--path or -p
```

<br>

##  🪜 Example

```
> bd --filetype txt
```

***or***

```
> bd -ft txt
```

<br>

##  ✖️ Multiple file type arguments

You can pass multiple filetypes at sametime

```
> bd -ft txt java cpp
```

<br>

## 🚶‍♀️ Walk through subdirectories.

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
C:\Current Directory> bd -sd -ft md
```
*This will delete all file's with extension as .md from given directory📂 and it's subdirectories🗃.*

<br>

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
    --------------------------------------------------------------------------
OPTIONAL FLAGS
    -p, --path
    -sd --subdir
```


## 🗜️ Changelog
-  [x] Command change from batch-delete to bd.
-  [x] No need to pass true as an option to -sd flag.
-  [x] few other things.


### Previous version
- Visual changes.
- Logs time taken.
- few other things.
-----------------------------------------------------
- Performance improved.
- flag -sd to allow deleting from sub-directories.
- Removed flag -dt for directory tree.
