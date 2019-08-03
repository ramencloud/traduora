#!/bin/sh

set -e

cd docs-website

yarn redoc-cli serve \
    --options.theme.colors.primary.main='#3b84f8' \
    --options.hideHostname=true \
    --options.pathInMiddlePanel=true \
    --options.nativeScrollbars=true \
    --options.hideDownloadButton=true \
    --watch \
    ../api/doc/swagger.yaml
