#!/usr/bin/env sh
set -e
set -u

pandoc md/??-*.md \
  -f markdown+smart \
  -t docx \
  -s --embed-resources --standalone \
  --reference-doc bin/pandoc/template.docx \
  --indented-code-classes=fatecode \
  --no-highlight \
  --listings \
  -o target/linear.docx
#pandoc -t epub \
#  -s  --embed-resources --standalone \
#  --reference-doc bin/pandoc/template.docx \
#  -o target/linear.epub \
#  --css md/epub.css \
#  --epub-embed-font font/GentiumPlus-R.ttf \
#  --epub-embed-font font/GentiumPlus-I.ttf \
#  --epub-embed-font font/RobotoMono-Regular.ttf \
#  --epub-embed-font font/Roboto-Medium.ttf \
#  --epub-embed-font font/Roboto-MediumItalic.ttf \
#  --epub-cover-image cover/Cascades-1600x2400.jpg \
#  md/title.txt \
#  md/??-*.md
