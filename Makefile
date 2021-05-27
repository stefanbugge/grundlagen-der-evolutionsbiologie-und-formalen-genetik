.PHONY: build run

build:
	docker build -t gefg-image .

run:
	docker run -d -p 80:80 --name gefg gefg-image
