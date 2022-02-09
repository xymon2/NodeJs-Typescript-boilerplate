#!/bin/sh

# -e : Exit immediately if a command exits with a non-zero status.
set -e

cleanup() {
    docker-compose -f docker-compose.dev.yml down
    trap '' EXIT INT TERM
    exit $err
}

trap cleanup SIGINT EXIT