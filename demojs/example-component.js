// 
//  example-component.js
//  closure_jq
//  一个简单的 closure 组件示例——全局对话框, 简化生命周期。
//  Created by filod on 2012-05-15.
//  Copyright 2012 filod. All rights reserved.
// 

goog.provide('example.Dialog');
goog.require('goog.ui.Component');
example.Dialog = function(msg){
    this.msg = msg || 'this is msg'; 
    this.dialogTpl = '<div><span>'+this.msg+'</span></div>';
    this.$el = $(this.dialogTpl).css({
        'width' : '100px',
        'height' : '60px',
        'border' : '1px solid #000'
        //'display':'none'
    }).css({
        'position': 'absolute',
        'top': '50%',
        'left': '50%',
        'margin-left' :  '-50px',
        'margin-top' :  '-30px'
    });
}
goog.inherits(example.Dialog, goog.ui.Component);

example.Dialog.prototype.show = function(callback){
    this.$el.appendTo('body');//.show('slow',callback);
}
example.Dialog.prototype.hide = function(){
    this.$el.remove();
}


