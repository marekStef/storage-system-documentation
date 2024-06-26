---
sidebar_position: 7
---

# Setup

### Setup and Running without Docker

#### .env Modification

We need to uncomment and comment the following in the `.env` file:

```env
MONGO_DB_URI=mongodb://localhost:27017/accessDb # for manual starting
# MONGO_DB_URI=mongodb://mongo1:27017/accessDb # for docker

DATA_STORAGE_URL=http://localhost:3001 # for manual starting
# DATA_STORAGE_URL=http://data_storage:3001 # for docker
```

In the `.env` file, the key `DATA_STORAGE_URL` is essential. If the port in the `dataStorage` project changes, this change must also be reflected in the `.env` file here 

For running this component, the `.env` file also needs the key `AUTH_SERVICE_PORT=3000`. If the `authService` component cannot be started on this port, it must be changed.

If you need to change the port of this component and the user wants to use the export requests for the `PostMan` program, this change must also be applied there in the `Environment` section.

#### Running

##### Installation

To install all dependencies, run:

```bash
npm install
```

##### Initialization

It is absolutely **essential** to run `npm run initialise_service` before `npm run start`. This script is responsible for storing the `root` profile of events. If the app wants to register a new profile for its events, this new profile must have the 'root' profile set, which is configured by this script.

Running this script uses `dataStorage`, so before running this script, it is **necessary** to have the `dataStorage` component fully running.

This script cannot be executed more than once (profiles must be unique). To run it again, the entire `dataStorage` must be deleted ( more information in the component's readme).

##### Running

Then we can start the `authService`:

```bash
npm run start
```

##### Usage

In this case, `AuthService` is the default component with which you can currently communicate. This component verifies individual events and applications and then saves these changes using its own HTTP requests to `dataStorage`. Therefore, `dataStorage` does not verify anything and fully trusts the component it collaborates with (in this case, it is `AuthService`).