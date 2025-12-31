#!/usr/bin/env node

const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

// Check if Java is installed
const checkJava = () => {
    return new Promise((resolve, reject) => {
        const javaCheck = spawn('java', ['-version']);
        javaCheck.on('error', () => {
            reject(new Error('Java is not installed or not in PATH. Please install Java to run bundletool.'));
        });
        javaCheck.on('close', (code) => {
            if (code === 0) {
                resolve();
            } else {
                reject(new Error('Java check failed.'));
            }
        });
    });
};

const runBundletool = () => {
    const jarPath = path.join(__dirname, 'bundletool.jar');
    
    if (!fs.existsSync(jarPath)) {
        console.error(`Error: bundletool jar not found at ${jarPath}`);
        process.exit(1);
    }

    const args = ['-jar', jarPath, ...process.argv.slice(2)];
    
    const child = spawn('java', args, {
        stdio: 'inherit'
    });

    child.on('close', (code) => {
        process.exit(code);
    });
    
    child.on('error', (err) => {
        console.error('Failed to run bundletool:', err);
        process.exit(1);
    });
};

checkJava()
    .then(() => {
        runBundletool();
    })
    .catch((err) => {
        console.error(err.message);
        process.exit(1);
    });
