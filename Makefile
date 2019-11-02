.DEFAULT_GOAL := all
.PHONY : all

SHELL = /bin/sh
PANDOC_IMAGE = pandoc/latex:2.6
REMARK_VERSION = latest
DOCKER_RUN_WITH_DATA = docker run --volume "`pwd`:/data" --user `id -u`:`id -g`
PANDOC = $(DOCKER_RUN_WITH_DATA) $(PANDOC_IMAGE)

all : target target/linear.html

remark :
	$(eval REMARK_VERSION = $(shell cat bin/remark/package.json | sed -n -e 's/^.*"remark": "^\([.0-9]*\)".*/\1/p'))
	$(eval REMARK_IMAGE = $(shell docker build bin/remark/ -q -t remark:$(REMARK_VERSION)))

target :
	mkdir -p target

target/README.docx : target
	$(PANDOC) md/README.md -o target/README.docx

target/README.html : target
	$(PANDOC) md/README.md > target/README.html

target/linear.docx : remark
	@cp md/*.ttf target/
	@cp cover/*.png md/
	@cp cover/*.png target/
	@$(DOCKER_RUN_WITH_DATA) --entrypoint "/data/bin/pandoc/linear.sh" $(PANDOC_IMAGE)
#	@$(DOCKER_RUN_WITH_DATA) jagregory/kindlegen /data/target/linear.epub

clean :
	@find target -type f -and -not -name *.iml -delete
