"use strict";exports.id=954,exports.ids=[954],exports.modules={14954:module=>{module.exports="import {CommonModule} from '@angular/common';\nimport {ChangeDetectionStrategy, Component, inject} from '@angular/core';\nimport {NotificationService} from '@ng-web-apis/notification';\nimport {isDenied, isGranted, PermissionsService} from '@ng-web-apis/permissions';\nimport {filter, map, switchMap} from 'rxjs';\n\n@Component({\n    standalone: true,\n    selector: 'notification-page-example-2',\n    imports: [CommonModule],\n    templateUrl: './index.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class NotificationPageExample2 {\n    private readonly notifications: NotificationService = inject(NotificationService);\n\n    protected readonly denied$ = inject(PermissionsService)\n        .state('notifications')\n        .pipe(map(isDenied));\n\n    protected sendNotification(): void {\n        this.notifications\n            .requestPermission()\n            .pipe(\n                filter(isGranted),\n                switchMap(() =>\n                    this.notifications.open('Web APIs for Angular', {\n                        body: 'High quality lightweight wrappers for native Web APIs for idiomatic use with Angular',\n                        icon: 'assets/images/web-api.svg',\n                    }),\n                ),\n            )\n            .subscribe();\n    }\n}\n"}};