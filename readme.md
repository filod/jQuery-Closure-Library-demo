#集成jQuery到closure
本 repo 展示了 closure 与 jQuery 集成使用的一个简单例子。
## how to start
1. 下载 [closure-library r1376 版本](http://code.google.com/p/closure-library/downloads/detail?name=closure-library-20111110-r1376.zip&can=2&q=)  
将 closure-library 解压到repo目录当中,文件夹重命名为 `closure-library`
2. 下载 [closure compiler](http://code.google.com/p/closure-compiler/downloads/detail?name=compiler-latest.zip&can=2&q=), 
解压后 将 compiler.jar 拷贝到 repo 目录中
3. 直接打开 demo.html 和 demo.compiled.html 查看效果
## makefile
* 在开发阶段，当有新的js文件需要加入 dep tracker 时，运行 `make debug` 以计算依赖
* 发布阶段，运行 `make build` 编译最终代码。

## 文件说明
* demojs 目录下的 `example-component.js example-page.js` 为示例js代码
* jquery-1.7.extern.js 为 closure 在编译时需要参考的引用文件
* demo.html 为 调试阶段使用的html，demo.compiled.html则是编译后的。
---
## 如何使用 jQuery 
建议在closure中把 jQuery 作为**语言增强**库使用，代码组件结构建议保留closure的组件风格。
jQuery特有的插件开发模式请慎用 *（理解closure compiler 高级编译模式的特性很重要）* 