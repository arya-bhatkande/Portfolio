#!/bin/bash

cd /var/www/myproject || exit 1

git pull origin main

sudo service apache2 reload

