// 
//  example-page.js
//  closure_jq
//  代表页面的js文件
//  Created by filod on 2012-05-15.
//  Copyright 2012 filod. All rights reserved.
// 

goog.require('example.Dialog');
//page code:
goog.provide('page.Demo')
page.Demo.init = function(){
    $(function(){
        $('#press-me').click(function() {
            var dialog = new example.Dialog('三秒后我会消失');
            dialog.show();
            setTimeout(dialog.hide.bind(dialog),3000);
        });
    });
};
goog.exportSymbol('page.Demo.init', page.Demo.init);
