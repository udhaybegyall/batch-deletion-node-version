#!/usr/bin/env node

import fs from 'fs';
import chalk from 'chalk';
import { ArgumentParser } from 'argparse';

const parser = new ArgumentParser({
    description: 'Batch delete files with same extension or file-type from a directory'
});

// parser.add_argument('-v', '-version', {
//     action: 'version', version
// });

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
let no_of_files = 0;
let files_to_delete = [];

/**
 * log the deleted files.
 * 
 * @param {file to be loged} file
 */
const print_log = (file) => {

        const topnode = "┌"
        const midnodes = "├";
        const endnode = "└";

        if (files_to_delete.indexOf(file) === 0) {
                console.log(`\n${chalk.red.bold(' Deleted:')} ${chalk.dim(topnode)} ${chalk.dim(file.split('./').pop())}`);

        } else if (files_to_delete.indexOf(file) !== files_to_delete.length - 1) {
                console.log(`${chalk.red.bold(' Deleted:')} ${chalk.dim(midnodes)} ${chalk.dim(file.split('./').pop())}`);

        } else {
                console.log(`${chalk.red.bold(' Deleted:')} ${chalk.dim(endnode)} ${chalk.dim(file.split('./').pop())}`);
        }
}

/**
 * Delete files with the provide paths in files_to_delete array.
 */
const deleteFile = () => {

        files_to_delete.forEach(file => {
            try {

                fs.unlinkSync(file);
                print_log(file);
                deleted++;

            } catch (err) {

                if (err.code === 'EBUSY') {
                    console.log(`${file} is opened closing file.`);
                    fs.closeSync(fs.openSync(file, 'r+'));
                    fs.unlinkSync(file);
                    print_log(file);
                    deleted++;

                } else {
                    console.log(err);
                }
            }
        });
}

/**
 * walk through the directory recursively and search for files with the same extension or file-type.
 * 
 * @param {path of the directory} dir
 * @param {file type to be deleted} filetype
 */
const walk = (dir, filetype) => {

        let files = fs.readdirSync(dir);

        files.forEach(file => {
            const filePath = `${dir}/${file}`;
            let stat = fs.statSync(filePath);

            if (stat && stat.isDirectory()) {
                if (subdir) {
                    walk(filePath, filetype);
                }

            } else {

                no_of_files++;
                if (filetype) {
                    if (filetype.includes(file.split('.').pop())) {
                        files_to_delete.push(filePath);
                    }

                } else {
                    files_to_delete.push(filePath);
                }
            }
        });
}

const start = new Date().getTime();
walk(dirPath, filetype);
deleteFile();
const end = new Date().getTime();

console.log(`\n- ${chalk.green.bold("Deleted")} ${deleted} ${chalk.dim("files of")} ${no_of_files} ${chalk.dim("files.")} -`);
console.log(`- ${chalk.yellow.bold("Time taken")} ${end - start} ${chalk.dim("ms.")} -`);