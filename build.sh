#!/bin/bash

clear
echo "-> COMPILING"
babel src -d dst
echo "-> LINTING"
eslint src test -f stylish --color
echo "-> TESTING"
mocha
echo "-> DONE"
