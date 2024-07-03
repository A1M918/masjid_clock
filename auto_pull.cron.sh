#!/bin/bash

# Navigate to your project directory
#cd /path/to/your/project

# Pull the latest code from the master branch
git pull origin master

# Log the update
echo "Code pulled from master branch at $(date)" >> ~/Desktop/logs/logfile.log
