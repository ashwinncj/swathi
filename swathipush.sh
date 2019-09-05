#!/bin/bash

git add *
git commit -m $(date "+%H:%M:%S%d/%m/%y")
git push origin

