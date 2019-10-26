SHELL = /bin/sh
PANDOC_IMAGE = pandoc/latex:2.6
.DEFAULT_GOAL := all

.PHONY : all

all : target target/linear.html

target :
	mkdir -p target

target/README.docx : target
	docker run --volume "`pwd`:/data" --user `id -u`:`id -g` $(PANDOC_IMAGE) md/README.md -o target/README.docx

target/README.html : target
	docker run --volume "`pwd`:/data" --user `id -u`:`id -g` $(PANDOC_IMAGE) md/README.md > target/README.html

target/linear.docx : target
	docker run --volume "`pwd`:/data" --user `id -u`:`id -g` --entrypoint "/data/bin/pandoc/linear.sh" $(PANDOC_IMAGE)

clean :
	find target -type f -and -not -name *.iml -delete
