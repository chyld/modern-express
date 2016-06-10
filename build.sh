#!/bin/bash

clear
echo "-> CLEAN"
rm -rf coverage docs dst logs
mkdir logs
echo "-> COMPILING"
babel src -d dst
echo "-> LINTING"
eslint src test -f stylish --color
echo "-> TESTING + COVERAGE"
istanbul cover _mocha -- test --recursive
echo "-> JSDOC"
jsdoc src -r -d docs --verbose
echo "-> DONE"
