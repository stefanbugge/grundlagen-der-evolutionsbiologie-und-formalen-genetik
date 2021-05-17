.PHONY: build run

build:
	docker build -t gefg-image .

run:
	docker run -d -p 80:80 --name gefg gefg-image

#run-server:
#	docker run -d --name gefg --expose 80 --net nginx-proxy -e VIRTUAL_HOST=genetik-tomiuk.loeschcke.dk grundlagen-efg
