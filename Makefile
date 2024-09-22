##---------- Preliminaries ----------------------------------------------------
.POSIX:     # Get reliable POSIX behaviour
.SUFFIXES:  # Clear built-in inference rules

##---------- Variables --------------------------------------------------------
PREFIX = /usr/local  # Default installation directory

##---------- Build targets ----------------------------------------------------

help: ## Show this help message (default)
	@awk 'BEGIN {FS = ":.*?## "} /^[a-zA-Z_-]+:.*?## / {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}' $(MAKEFILE_LIST)

dev: ## Run development server
	hugo server -D

local: ## Run local
	hugo server -D --bind 192.168.0.195 --port 8080 --baseURL http://192.168.0.195:8080


up: dev ## Alias to `make dev`
run: dev ## Alias to `make dev`

build: ## Build
	hugo

preview: ## Preview
	hugo server --disableFastRender --navigateToChanged --templateMetrics --templateMetricsHints --watch --forceSyncStatic -e production --minify


# cursor: 15 del
