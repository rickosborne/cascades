#!/usr/bin/env sh
set -e
set -u

pandoc md/??-*.md -f gfm -t docx -s --self-contained --reference-doc bin/pandoc/template.docx -o target/linear.docx
