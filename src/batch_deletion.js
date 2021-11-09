#!/usr/bin/env node

const fs = require('fs');
const { version } = require('../package.json');
const { ArgumentParser } = require('argparse');

const parser = new ArgumentParser({ 
    description: 'Batch delete files with same extension or file-type from a directory'
});

parser.add_argument('-v', '-version', {
    action: 'version', version
});

parser.add_argument('-ft', '--filetype', {
    type: String,
    default: null,
    nargs: '+',
    help: 'Only files with the fiven type will be deleted'
});

parser.add_argument('-p', '--path', {
    type: String,
    default: '.',
    help: 'Path of the directory from the files need to be deleted'
});

parser.add_argument('-sd', '--subdir', {
    type: Boolean,
    default: false,
    help: 'Directory tree of located file.'
});

const args = parser.parse_args();
const { filetype, path: dirPath, subdir } = args;

let deleted = 0;

// create a function to delete files and make deleted count increase

const deleteFile = (file) => {
    
    try {

        fs.unlinkSync(file);
        console.log(`Deleted ${file}`);
        deleted++;

    } catch (err) {
        
        if (err.code === 'EBUSY') {

            console.log(`${file} is opened closing file.`);
            fs.closeSync(fs.openSync(file, 'r+'));
            fs.unlinkSync(file);
            console.log(`Deleted ${file}`);
            deleted++;

        } else {
            console.log(err);
        }
    }
};

// create a function to walk through the directory and it's sub-directories

const walk = (dir, filetype) => {

    const files = fs.readdirSync(dir);

    files.forEach(file => {

        const filePath = `${dir}/${file}`;
        const stat = fs.lstatSync(filePath);

        if (stat.isDirectory()) {

            if (subdir) {
                walk(filePath, filetype);
            }

        } else {

            if (filetype) {

                if (filetype.includes(file.split('.').pop())) {
                    deleteFile(filePath);
                }

            } else {
                deleteFile(filePath);
            }
        }
    });
};

walk(dirPath, filetype);
console.log(`\n- Deleted ${deleted} files. -`);