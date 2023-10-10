"use strict";(self.webpackChunkng_web_apis=self.webpackChunkng_web_apis||[]).push([[380],{87179:n=>{n.exports="import {ChangeDetectionStrategy, Component} from '@angular/core';\nimport {NotificationService} from '@ng-web-apis/notification';\nimport {isDenied, isGranted, PermissionsService} from '@ng-web-apis/permissions';\nimport {timer} from 'rxjs';\nimport {filter, map, switchMap, takeUntil} from 'rxjs/operators';\n\n@Component({\n    selector: 'notification-page-example-3',\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class NotificationPageExample3 {\n    readonly denied$ = this.permissions.state('notifications').pipe(map(isDenied));\n\n    constructor(\n        private readonly notifications: NotificationService,\n        private readonly permissions: PermissionsService,\n    ) {}\n\n    sendNotification(): void {\n        this.notifications\n            .requestPermission()\n            .pipe(\n                filter(isGranted),\n                switchMap(() =>\n                    this.notifications.open('Close me, please!', {\n                        requireInteraction: true,\n                    }),\n                ),\n                takeUntil(timer(5_000)), // close stream after 5 seconds\n            )\n            .subscribe({\n                complete: () => console.info('Notification closed!'),\n            });\n    }\n}\n"}}]);