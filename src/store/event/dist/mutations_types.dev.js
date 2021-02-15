"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EDITEVENT = exports.DELEVENT = exports.CLEAREVENT = exports.EVENTCANCEL = exports.EVENTTODO = exports.EVENTDONE = exports.ADDEVENT = void 0;

/**
 * Created by linxin on 2017/3/10.
 */
// 添加事件
var ADDEVENT = 'ADDEVENT'; // 移至已完成

exports.ADDEVENT = ADDEVENT;
var EVENTDONE = 'EVENTDONE'; // 移至未完成

exports.EVENTDONE = EVENTDONE;
var EVENTTODO = 'EVENTTODO'; // 移至已取消

exports.EVENTTODO = EVENTTODO;
var EVENTCANCEL = 'EVENTCANCEL'; // 清除所有事件

exports.EVENTCANCEL = EVENTCANCEL;
var CLEAREVENT = 'CLEAREVENT'; // 删除单个事件

exports.CLEAREVENT = CLEAREVENT;
var DELEVENT = 'DELEVENT'; // 编辑事件

exports.DELEVENT = DELEVENT;
var EDITEVENT = 'EDITEVENT';
exports.EDITEVENT = EDITEVENT;