# **Styley TypeScript SDK**

## 📚 **Table of Contents**
1. [Install Node.js & npm](#install-nodejs--npm)
2. [Setup Project Workspace](#setup-project-workspace)
3. [Install TypeScript & SDK Dependencies](#install-typescript--sdk-dependencies)
4. [Environment Variables](#environment-variables)
5. [Deployments](#deployments)
6. [Models](#models)
7. [Summary of Available Methods](#summary-of-available-methods)

---    

##  **Install Node.js & npm**

### **Install Using Official Installer (Recommended)**
1. Go to the Node.js official download page:

    👉 [https://nodejs.org/](https://nodejs.org/)

2. Download the installer for your operating system:
    - **Windows**: Download the `.msi` file.
    - **MacOS**: Download the `.pkg` file.
    - **Linux**: Use the pre-built binary or use the package manager for your OS.

3. **Run the installer** and follow the instructions.

**Verify Installation**
<br>
Check if Node.js and npm are installed and running correctly.

```bash
node -v  # Check Node.js version
npm -v   # Check npm version
```
**Expected output:**

```bash
v20.5.1  # Example node version
8.5.0    # Example npm version
```
If you see "command not found", double-check that Node.js is installed and is in your PATH.

---

## **Setup Project Workspace**
 
1. **Create a project directory:**

```bash
mkdir typescript-sdk-project
cd typescript-sdk-project
```
2. **Initialize a new npm project** (this creates package.json):

```bash
npm init -y
```
This will create a `package.json` file with default values.

---

## **Install TypeScript & SDK Dependencies**

1. **Install TypeScript globally** (optional, but useful for running `tsc` command globally):
  
```bash
npm install -g typescript
```
  
2. **Install Styley TypeScript SDK** and other required dependencies locally in your project:

```bash
npm install --save-dev typescript
npm install --save @styley/typescript-sdk
```

3. **Initialize TypeScript configuration:**
```bash
npx tsc --init
```
This creates a `tsconfig.json` file in the root of your project, which configures how TypeScript compiles your code.

To run the TypeScript SDK, you’ll need a file with TypeScript code.

**Create a file called `index.ts` in your project directory.**

---
## **TypeScript Compatibility**

This SDK is compatible with TypeScript versions 4.0 and above. Please ensure that your project uses a compatible TypeScript version to avoid any issues.

---

## **Environment Variables**

To authenticate API requests, you must set the following environment variables in your system.

```bash
export X_STYLEY_KEY=***************************
```

---

## **Deployments**

### 📤 **Create Deployment**
This method creates a new deployment using the specified model ID, name, and arguments.

```javascript
import { Styley } from '@styley/typescript-sdk';

const styley = new Styley();

async function main() {
const deployment = await styley.deployments.create({
    model: '6db33e45-29cf-4880-8ee0-3d9074c32e5e',
    name: 'Property Details and Maps',
    args: {
      "Basement": "false",
      "City": "Arlington",
      "Garage": "false",
      "Pool": "true",
      "State": "NY",
    },
    sync: false,
  });
  console.log("deployment: ", deployment); 
}
```

---

### 📜 **Get Deployment Job**
Get the status of a deployment job using its job ID.

```javascript
import { Styley } from '@styley/typescript-sdk';

const styley = new Styley(); 
//Change the "job_id" placeholder with actual jobID from the deployment response
const jobStatus = await styley.deployments.getJob("job_id");
console.log("jobStatus: ", jobStatus);
```

---

### 📄 **List Deployments**
Retrieve a list of all deployments.

```javascript
import { Styley } from '@styley/typescript-sdk';

const styley = new Styley();  
const deployments = await styley.deployments.list();
console.log("deployments: ", deployments);
```

---

##  **Models**

### 📜 **List Models**
Retrieve a list of all models available for deployments.

```javascript
import { Styley } from '@styley/typescript-sdk';

const styley = new Styley();
const models = await styley.models.list();
console.log("models: ", models);
```

---

### 🔍 **Get Model By ID**
Fetch a specific model’s details using its model ID.

```javascript
import { Styley } from '@styley/typescript-sdk';

const styley = new Styley();
const model = await styley.models.getById("6db33e45-29cf-4880-8ee0-3d9074c32e5e");
console.log("model: ", model);
```

---

### 🔍 **Get Model By Name**
Fetch model details using its name.

```javascript
import { Styley } from '@styley/typescript-sdk';

const styley = new Styley();
const model = await styley.models.getByName("Property Details and Maps");
console.log("model: ", model);
```

---

## **Summary of Available Methods**

| **Class**     | **Method**       | **Description**                           |
|---------------|-----------------|------------------------------------------|
| **Deployments**| `create(payload)`| Create a new deployment.                 |
| **Deployments**| `list()`         | List all deployments.                    |
| **Deployments**| `getJob(jobID)`  | Get the status of a deployment job.      |
| **Models**     | `list()`         | List all available models.               |
| **Models**     | `getById(id)`    | Get model details by model ID.           |
| **Models**     | `getByName(name)`| Get model details by model name.         |

