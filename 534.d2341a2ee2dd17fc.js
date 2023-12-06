"use strict";(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[534],{15534:n=>{n.exports='<h3>\n    Value from\n    <code>STORAGE_EVENT</code>\n    : {{ value$ | async }}\n</h3>\n<p tuiGroup>\n    <tui-input\n        [ngModel]="native"\n        (ngModelChange)="withStorage($event)"\n    >\n        Native update\n    </tui-input>\n    <tui-input\n        [ngModel]="service"\n        (ngModelChange)="withService($event)"\n    >\n        With service\n    </tui-input>\n</p>\n<tui-notification>\n    Native event is only triggered with update happens in another tab. Try opening this page in another tab and type\n    into the first input. Use\n    <code>StorageService</code>\n    if you need to know about changes in the same tab too.\n</tui-notification>\n'}}]);