#!/bin/bash

set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" <<-EOSQL
    CREATE USER server WITH PASSWORD 'password' CREATEDB;
    CREATE DATABASE server_dev;
    GRANT ALL PRIVILEGES ON DATABASE server_dev TO server;
EOSQL
