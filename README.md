# records

You can run the project with the following project with sudo if needed:

/bin/bash ./launch.sh

it will make the needed migrations needed and launch docker compose. (I use the python command here, maybe you'll need to change it to python3)
it will launch the backend on port 8000 and frontend on 3000
You can see the records in the backend at http://localhost:8000/api/records
See the app at http://localhost:3000
Click on the + to add a record, you can modify or delete it.

--------------------------------------
--------------------------------------


you can clean by running the following command with sudo if needed when you're done:

/bin/bash ./clean.sh

it will remove node_modules et package-lock.json and db.sqlite3 from the frontend, stop the containers and clear.