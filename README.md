# node-bundletool

A Node.js wrapper for Google's [bundletool](https://developer.android.com/studio/command-line/bundletool).

## Introduction

This package provides a convenient way to install and run `bundletool` using Node.js. It wraps the `bundletool` executable jar and automatically checks for a Java runtime environment before execution.

## Prerequisites

- **Node.js**: Installed on your system.
- **Java**: A Java Runtime Environment (JRE) or Java Development Kit (JDK) must be installed and available in your system's PATH. `bundletool` requires Java to run.

## Installation

You can install this package globally using npm:

```bash
npm install -g node-bundletool
```

Or run it directly using `npx`:

```bash
npx node-bundletool <command>
```

## Usage

Once installed globally, you can use the `bundletool` command directly in your terminal. All arguments are passed directly to the underlying `bundletool` jar.

Check the version:
```bash
bundletool version
```

Build an APK set from an app bundle:
```bash
bundletool build-apks --bundle=/path/to/app.aab --output=/path/to/app.apks
```

Install APKs to a connected device:
```bash
bundletool install-apks --apks=/path/to/app.apks
```

For a full list of commands and options, refer to the [official bundletool documentation](https://developer.android.com/studio/command-line/bundletool) or run:

```bash
bundletool help
```


