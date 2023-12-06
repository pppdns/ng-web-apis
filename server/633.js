"use strict";exports.id=633,exports.ids=[633],exports.modules={95633:module=>{module.exports="import {ChangeDetectionStrategy, Component, Inject} from '@angular/core';\nimport {LOCAL_STORAGE} from '@ng-web-apis/common';\nimport {filterByKey, STORAGE_EVENT, StorageService, toValue} from '@ng-web-apis/storage';\nimport {Observable} from 'rxjs';\n\n@Component({\n    selector: 'example',\n    templateUrl: './example.template.html',\n    changeDetection: ChangeDetectionStrategy.OnPush,\n})\nexport class ExampleComponent {\n    readonly value$ = this.event$.pipe(filterByKey('value'), toValue());\n\n    native = '';\n\n    service = '';\n\n    index = 0;\n\n    constructor(\n        @Inject(STORAGE_EVENT) private readonly event$: Observable<StorageEvent>,\n        @Inject(LOCAL_STORAGE) private readonly storage: Storage,\n        @Inject(StorageService) private readonly storageService: Storage,\n    ) {}\n\n    withStorage(value: string): void {\n        this.storage.setItem('value', value);\n        this.native = value;\n    }\n\n    withService(value: string): void {\n        this.storageService.setItem('value', value);\n        this.service = value;\n    }\n}\n"}};