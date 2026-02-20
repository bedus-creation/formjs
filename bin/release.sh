#!/usr/bin/env bash

set -e

# Make sure the release tag is provided.
if (( "$#" != 1 ))
then
    echo "Version type has to be provided: major|minor|patch."

    exit 1
fi

npm version $1 \
    --workspace=packages/core \
    --workspace=packages/vue2 \
    --workspace=packages/vue3 \
    --workspace=playgrounds/vue2 \
    --workspace=playgrounds/vue3
