#!/bin/sh

set -e

cd docs-website

yarn redoc-cli bundle \
    --options.theme.colors.primary.main='#3b84f8' \
    --options.hideHostname=true \
    --options.pathInMiddlePanel=true \
    --options.nativeScrollbars=true \
    --options.hideDownloadButton=true \
    ../api/doc/swagger.json \
    -o static/docs/api/v1/reference.html
