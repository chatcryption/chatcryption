#!/usr/bin/env bash

echo "Configuring database"

export PGPASSWORD='ilovetesting'

#
# Should grab your username
#
dropdb -U $USER chatcryption_db;
createdb -U $USER chatcryption_db;
psql -U $USER chatcryption_db < ./database/db.sql

echo "chatcryption was configured";

psql -U $USER chatcryption_db < ./database/seed.sql

echo "I am done I think!! :)";


