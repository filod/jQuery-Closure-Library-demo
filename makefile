NOW=$(shell date +%I:%M %p)
HR=\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#\#
CHECK=\033[32m ✔\033[39m
DATE=$(shell date +%p%I:%M)
# 本 makefile 文件用于编译 demo 的 js 文件

debug:
	@echo "\033[40;42;1m ---------debug build js ${DATE} ----------\033[0m"
	closure-library/closure/bin/build/depswriter.py  \
	    --root_with_prefix="demojs ../../../demojs" \
	    > demo-deps.js
	    
#--namespace="example.Dialog" \
	
build:
	@echo "\033[40;42;1m ---------compile js ${DATE} ----------\033[0m"
	closure-library/closure/bin/build/closurebuilder.py \
		--namespace=page.Demo \
		--root=closure-library/ \
		--root=demojs/ \
		--output_mode=compiled \
		--compiler_jar=compiler.jar \
		--compiler_flags='--compilation_level=ADVANCED_OPTIMIZATIONS' \
		--compiler_flags='--externs=jquery-1.7.extern.js' \
		> demojs/compiled-output.js
	@echo "${HR}\n"
