#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { ArgumentParser } = require('argparse');

const parser = new ArgumentParser({ description: 'Batch delete files with same extension from a directory' });

parser.add_argument('-v', '-version', {
    action: 'version', version
});

parser.add_argument('-ft', '--filetype', {
    type: String,
    default: null,
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
let deleted = 0;

for (const doc of files) {

    const file = path.parse(doc);

    if (file.ext === filetype) {

        try {

            fs.unlinkSync(doc);
            console.log(`Deleted file ${doc}.`);

        } catch (err) {

            if (err.code === 'EBUSY') {
                console.log(`${doc} is busy make sure the file is closed.`);
            } else {
                throw err;
            }
        }

        deleted++;

    }
}

console.log(`Deleted ${deleted} of ${files.length} files.`);

