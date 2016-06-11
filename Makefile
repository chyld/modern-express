BIN   := ./node_modules/.bin
PATH  := $(BIN):$(PATH)

main:
	clear
	@echo [main]
	@echo Project: Modern Express

clean:
	@echo [clean]
	@rm -rf coverage docs dst logs
	@mkdir logs

compile:
	@echo [compile]
	@babel src -d dst -q

lint:
	@echo [lint]
	@eslint src test -f stylish --color

tests:
	@echo [tests]
	@istanbul cover --print summary $(BIN)/_mocha -- --recursive -R dot

docs:
	@echo [docs]
	@jsdoc src -r -d docs -c conf.json

watch: all
	@echo [watch]
	@chokidar 'src/**/*.js' 'test/**/*.js' -c 'make all'

all: main clean compile lint tests docs
