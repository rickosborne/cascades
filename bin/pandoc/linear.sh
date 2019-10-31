#!/usr/bin/env sh
set -e
set -u

pandoc md/??-*.md -f markdown+smart -t docx -s --self-contained --reference-doc bin/pandoc/template.docx -o target/linear.docx
pandoc -t epub \
  -s --self-contained \
  --reference-doc bin/pandoc/template.docx \
  -o target/linear.epub \
  --css md/epub.css \
  --epub-embed-font md/GentiumPlus-R.ttf \
  --epub-embed-font md/GentiumPlus-I.ttf \
  --epub-embed-font md/RobotoMono-Regular.ttf \
  --epub-embed-font md/Roboto-Medium.ttf \
  --epub-embed-font md/Roboto-MediumItalic.ttf \
  --epub-cover-image cover/cascades-1920x2880.png \
  md/title.txt \
  md/??-*.md
