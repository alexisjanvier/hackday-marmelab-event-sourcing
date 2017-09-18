.PHONY: help install start stop

help: ## Display available commands
	@fgrep -h "##" $(MAKEFILE_LIST) | fgrep -v fgrep | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

install: ## Setup all project dependencies
	docker-compose -p hackday build
	npm install

start: ## Start dockerised kafka
	docker-compose -p hackday up -d

stop: ## Stop dockerised kafka
	docker-compose -p hackday down

log-kafka: ## Display new message in kafka hackday topic
	kafka/bin/kafka-console-consumer.sh --bootstrap-server localhost:9092 --topic hackday --from-beginning
