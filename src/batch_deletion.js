#!/usr/bin/env node

const fs = require('fs');
const dree = require('dree');
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

const options = {
    stat: false,
    hash: false,
    size: true,
    sizeInBytes: false,
    normalize: true,
    extensions: filetype
}

let fileLength = 0;
let deleted = 0;

const deleteFile = ( doc, docName, docSize ) => {

    try {

        fs.unlinkSync(doc);
        console.log(`DELETED FILE - ( ${docName} ) OF SIZE | ${docSize}.`);

    } catch (err) {

        if (err.code === 'EBUSY') {
            console.error(`${doc} is opend! CLOSE THE FILE FIRST.`);
        } else {
            throw err;
        }
    }

    deleted++;
}

const fileCallBack = ( file ) => {
    deleteFile(file.path, file.name, file.size)
}

const findLength = ( file  ) => {
    if (fs.statSync(file.path)
        .isFile()) {
        fileLength++;
    }
}

const files = dree.scan(dirPath, null, findLength);

const tree = dree.scan(dirPath,
options,
fileCallBack
)

console.log(`\n- Deleted ${deleted} | of | ${fileLength} files. -`);

