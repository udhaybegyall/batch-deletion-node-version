#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { version } = require('../package.json');
const { ArgumentParser } = require('argparse');

const parser = new ArgumentParser({ description: 'Batch delete files with same extension or file-type from a directory' });

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

const args = parser.parse_args();
const { filetype, path: dirPath } = args;

const dir = fs.readdirSync(dirPath);
const files = dir.filter(f => fs.statSync(f).isFile());
const files_to_be_deleted = files.filter(f => filetype.includes(path.parse(f).ext));
let deleted = 0;

const deleteFile = ( doc ) => {

    try {

        fs.unlinkSync(doc);
        console.log(`Deleted file ${doc}.`);

    } catch (err) {

        if (err.code === 'EBUSY') {
            console.error(`${doc} is opend! CLOSE THE FILE FIRST.`);
        } else {
            throw err;
        }
    }

    deleted++;
}

// deleting files
for (doc of files_to_be_deleted) {
    deleteFile(doc);
}

console.log(`\n- Deleted ${deleted} | of | ${files.length} files. -`);