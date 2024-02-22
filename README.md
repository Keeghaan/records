# records

You can run the project with the following project with sudo if needed:

/bin/bash ./launch.sh

it will activate the virtual env (Maybe you'll need to install virtualenv first ?), make the needed migrations needed and launch docker compose. (I use the python3 command here)
it will launch the backend on port 8000 and frontend that'll take few seconds to install dependencies and then be started on port 3000
You can see the records in the backend at http://localhost:8000/api/records
See the app at http://localhost:3000
Click on the + to add a record, you can modify or delete it.

--------------------------------------
--------------------------------------


you can clean by running the following command with sudo if needed when you're done:

/bin/bash ./clean.sh

it will remove node_modules et package-lock.json and db.sqlite3 from the frontend, stop the containers and clear.