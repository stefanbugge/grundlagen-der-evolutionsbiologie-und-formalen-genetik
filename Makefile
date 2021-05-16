.PHONY: build run

build:
	docker build -t grundlagen-efg .

run:
	docker run -d -p 80:80 --name gefg grundlagen-efg 