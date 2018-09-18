module.exports={"baseUrl":"https://firestore.googleapis.com/","kind":"discovery#restDescription","description":"Accesses the NoSQL document database built for automatic scaling, high performance, and ease of application development.\n","servicePath":"","basePath":"","id":"firestore:v1beta2","documentationLink":"https://cloud.google.com/firestore","revision":"20180910","discoveryVersion":"v1","version_module":true,"schemas":{"GoogleFirestoreAdminV1beta2FieldOperationMetadata":{"description":"Metadata for google.longrunning.Operation results from\nFirestoreAdmin.UpdateField.","type":"object","properties":{"field":{"description":"The field resource that this operation is acting on. For example:\n`projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`","type":"string"},"bytesProgress":{"description":"The progress, in bytes, of this operation.","$ref":"GoogleFirestoreAdminV1beta2Progress"},"endTime":{"description":"The time this operation completed. Will be unset if operation still in\nprogress.","format":"google-datetime","type":"string"},"startTime":{"description":"The time this operation started.","format":"google-datetime","type":"string"},"indexConfigDeltas":{"description":"A list of IndexConfigDelta, which describe the intent of this\noperation.","type":"array","items":{"$ref":"GoogleFirestoreAdminV1beta2IndexConfigDelta"}},"state":{"enumDescriptions":["Unspecified.","Request is being prepared for processing.","Request is actively being processed.","Request is in the process of being cancelled after user called\ngoogle.longrunning.Operations.CancelOperation on the operation.","Request has been processed and is in its finalization stage.","Request has completed successfully.","Request has finished being processed, but encountered an error.","Request has finished being cancelled after user called\ngoogle.longrunning.Operations.CancelOperation."],"enum":["OPERATION_STATE_UNSPECIFIED","INITIALIZING","PROCESSING","CANCELLING","FINALIZING","SUCCESSFUL","FAILED","CANCELLED"],"description":"The state of the operation.","type":"string"},"documentProgress":{"description":"The progress, in documents, of this operation.","$ref":"GoogleFirestoreAdminV1beta2Progress"}},"id":"GoogleFirestoreAdminV1beta2FieldOperationMetadata"},"GoogleLongrunningOperation":{"description":"This resource represents a long-running operation that is the result of a\nnetwork API call.","type":"object","properties":{"response":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"description":"The normal response of the operation in case of success.  If the original\nmethod returns no data on success, such as `Delete`, the response is\n`google.protobuf.Empty`.  If the original method is standard\n`Get`/`Create`/`Update`, the response should be the resource.  For other\nmethods, the response should have the type `XxxResponse`, where `Xxx`\nis the original method name.  For example, if the original method name\nis `TakeSnapshot()`, the inferred response type is\n`TakeSnapshotResponse`.","type":"object"},"name":{"description":"The server-assigned name, which is only unique within the same service that\noriginally returns it. If you use the default HTTP mapping, the\n`name` should have the format of `operations/some/unique/name`.","type":"string"},"error":{"description":"The error result of the operation in case of failure or cancellation.","$ref":"Status"},"metadata":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"description":"Service-specific metadata associated with the operation.  It typically\ncontains progress information and common metadata such as create time.\nSome services might not provide such metadata.  Any method that returns a\nlong-running operation should document the metadata type, if any.","type":"object"},"done":{"description":"If the value is `false`, it means the operation is still in progress.\nIf `true`, the operation is completed, and either `error` or `response` is\navailable.","type":"boolean"}},"id":"GoogleLongrunningOperation"},"GoogleFirestoreAdminV1beta2IndexOperationMetadata":{"description":"Metadata for google.longrunning.Operation results from\nFirestoreAdmin.CreateIndex.","type":"object","properties":{"progressDocuments":{"$ref":"GoogleFirestoreAdminV1beta2Progress","description":"The progress, in documents, of this operation."},"endTime":{"description":"The time this operation completed. Will be unset if operation still in\nprogress.","format":"google-datetime","type":"string"},"index":{"description":"The index resource that this operation is acting on. For example:\n`projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`","type":"string"},"startTime":{"description":"The time this operation started.","format":"google-datetime","type":"string"},"progressBytes":{"$ref":"GoogleFirestoreAdminV1beta2Progress","description":"The progress, in bytes, of this operation."},"state":{"enumDescriptions":["Unspecified.","Request is being prepared for processing.","Request is actively being processed.","Request is in the process of being cancelled after user called\ngoogle.longrunning.Operations.CancelOperation on the operation.","Request has been processed and is in its finalization stage.","Request has completed successfully.","Request has finished being processed, but encountered an error.","Request has finished being cancelled after user called\ngoogle.longrunning.Operations.CancelOperation."],"enum":["OPERATION_STATE_UNSPECIFIED","INITIALIZING","PROCESSING","CANCELLING","FINALIZING","SUCCESSFUL","FAILED","CANCELLED"],"description":"The state of the operation.","type":"string"}},"id":"GoogleFirestoreAdminV1beta2IndexOperationMetadata"},"GoogleFirestoreAdminV1beta2ListFieldsResponse":{"properties":{"fields":{"description":"The requested fields.","type":"array","items":{"$ref":"GoogleFirestoreAdminV1beta2Field"}},"nextPageToken":{"description":"A page token that may be used to request another page of results. If blank,\nthis is the last page.","type":"string"}},"id":"GoogleFirestoreAdminV1beta2ListFieldsResponse","description":"The response for FirestoreAdmin.ListFields.","type":"object"},"GoogleFirestoreAdminV1beta2IndexField":{"description":"A field in an index.\nThe field_path describes which field is indexed, the value_mode describes\nhow the field value is indexed.","type":"object","properties":{"fieldPath":{"description":"Can be __name__.\nFor single field indexes, this must match the name of the field or may\nbe omitted.","type":"string"},"order":{"enum":["ORDER_UNSPECIFIED","ASCENDING","DESCENDING"],"description":"Indicates that this field supports ordering by the specified order or\ncomparing using =, <, <=, >, >=.","type":"string","enumDescriptions":["The ordering is unspecified. Not a valid option.","The field is ordered by ascending field value.","The field is ordered by descending field value."]},"arrayConfig":{"enum":["ARRAY_CONFIG_UNSPECIFIED","CONTAINS"],"description":"Indicates that this field supports operations on `array_value`s.","type":"string","enumDescriptions":["The index does not support additional array queries.","The index supports array containment queries."]}},"id":"GoogleFirestoreAdminV1beta2IndexField"},"GoogleFirestoreAdminV1beta2Progress":{"description":"Describes the progress of the operation.\nUnit of work is generic and must be interpreted based on where Progress\nis used.","type":"object","properties":{"estimatedWork":{"description":"The amount of work estimated.","format":"int64","type":"string"},"completedWork":{"description":"The amount of work completed.","format":"int64","type":"string"}},"id":"GoogleFirestoreAdminV1beta2Progress"},"GoogleFirestoreAdminV1beta2ListIndexesResponse":{"description":"The response for FirestoreAdmin.ListIndexes.","type":"object","properties":{"nextPageToken":{"description":"A page token that may be used to request another page of results. If blank,\nthis is the last page.","type":"string"},"indexes":{"description":"The requested indexes.","type":"array","items":{"$ref":"GoogleFirestoreAdminV1beta2Index"}}},"id":"GoogleFirestoreAdminV1beta2ListIndexesResponse"},"GoogleFirestoreAdminV1beta2IndexConfig":{"description":"The index configuration for this field.","type":"object","properties":{"ancestorField":{"description":"Output only.\nSpecifies the resource name of the `Field` from which this field's\nindex configuration is set (when `uses_ancestor_config` is true),\nor from which it *would* be set if this field had no index configuration\n(when `uses_ancestor_config` is false).","type":"string"},"indexes":{"description":"The indexes supported for this field.","type":"array","items":{"$ref":"GoogleFirestoreAdminV1beta2Index"}},"usesAncestorConfig":{"description":"Output only.\nWhen true, the `Field`'s index configuration is set from the\nconfiguration specified by the `ancestor_field`.\nWhen false, the `Field`'s index configuration is defined explicitly.","type":"boolean"},"reverting":{"description":"Output only\nWhen true, the `Field`'s index configuration is in the process of being\nreverted. Once complete, the index config will transition to the same\nstate as the field specified by `ancestor_field`, at which point\n`uses_ancestor_config` will be `true` and `reverting` will be `false`.","type":"boolean"}},"id":"GoogleFirestoreAdminV1beta2IndexConfig"},"GoogleFirestoreAdminV1beta2Field":{"properties":{"indexConfig":{"description":"The index configuration for this field. If unset, field indexing will\nrevert to the configuration defined by the `ancestor_field`. To\nexplicitly remove all indexes for this field, specify an index config\nwith an empty list of indexes.","$ref":"GoogleFirestoreAdminV1beta2IndexConfig"},"name":{"description":"A field name of the form\n`projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`\n\nA field path may be a simple field name, e.g. `address` or a path to fields\nwithin map_value , e.g. `address.city`,\nor a special field path. The only valid special field is `*`, which\nrepresents any field.\n\nField paths may be quoted using ` (backtick). The only character that needs\nto be escaped within a quoted field path is the backtick character itself,\nescaped using a backslash. Special characters in field paths that\nmust be quoted include: `*`, `.`,\n``` (backtick), `[`, `]`, as well as any ascii symbolic characters.\n\nExamples:\n(Note: Comments here are written in markdown syntax, so there is an\n additional layer of backticks to represent a code block)\n`\\`address.city\\`` represents a field named `address.city`, not the map key\n`city` in the field `address`.\n`\\`*\\`` represents a field named `*`, not any field.\n\nA special `Field` contains the default indexing settings for all fields.\nThis field's resource name is:\n`projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`\nIndexes defined on this `Field` will be applied to all fields which do not\nhave their own `Field` index configuration.","type":"string"}},"id":"GoogleFirestoreAdminV1beta2Field","description":"Represents a single field in the database.\n\nFields are grouped by their \"Collection Group\", which represent all\ncollections in the database with the same id.","type":"object"},"GoogleFirestoreAdminV1beta2Index":{"description":"Cloud Firestore indexes enable simple and complex queries against\ndocuments in a database.","type":"object","properties":{"queryScope":{"description":"Indexes with a collection query scope specified allow queries\nagainst a collection that is the child of a specific document, specified at\nquery time, and that has the same collection id.\n\nIndexes with a collection group query scope specified allow queries against\nall collections descended from a specific document, specified at query\ntime, and that have the same collection id as this index.","type":"string","enumDescriptions":["The query scope is unspecified. Not a valid option.","Indexes with a collection query scope specified allow queries\nagainst a collection that is the child of a specific document, specified\nat query time, and that has the collection id specified by the index."],"enum":["QUERY_SCOPE_UNSPECIFIED","COLLECTION"]},"fields":{"description":"The fields supported by this index.\n\nFor composite indexes, this is always 2 or more fields.\nThe last field entry is always for the field path `__name__`. If, on\ncreation, `__name__` was not specified as the last field, it will be added\nautomatically with the same direction as that of the last field defined. If\nthe final field in a composite index is not directional, the `__name__`\nwill be ordered ASCENDING (unless explicitly specified).\n\nFor single field indexes, this will always be exactly one entry with a\nfield path equal to the field path of the associated field.","type":"array","items":{"$ref":"GoogleFirestoreAdminV1beta2IndexField"}},"state":{"enum":["STATE_UNSPECIFIED","CREATING","READY","NEEDS_REPAIR"],"description":"Output only.\nThe serving state of the index.","type":"string","enumDescriptions":["The state is unspecified.","The index is being created.\nThere is an active long-running operation for the index.\nThe index is updated when writing a document.\nSome index data may exist.","The index is ready to be used.\nThe index is updated when writing a document.\nThe index is fully populated from all stored documents it applies to.","The index was being created, but something went wrong.\nThere is no active long-running operation for the index,\nand the most recently finished long-running operation failed.\nThe index is not updated when writing a document.\nSome index data may exist.\nUse the google.longrunning.Operations API to determine why the operation\nthat last attempted to create this index failed, then re-create the\nindex."]},"name":{"description":"Output only.\nA server defined name for this index.\nThe form of this name for composite indexes will be:\n`projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{composite_index_id}`\nFor single field indexes, this field will be empty.","type":"string"}},"id":"GoogleFirestoreAdminV1beta2Index"},"GoogleFirestoreAdminV1beta2IndexConfigDelta":{"properties":{"changeType":{"description":"Specifies how the index is changing.","type":"string","enumDescriptions":["The type of change is not specified or known.","The single field index is being added.","The single field index is being removed."],"enum":["CHANGE_TYPE_UNSPECIFIED","ADD","REMOVE"]},"index":{"$ref":"GoogleFirestoreAdminV1beta2Index","description":"The index being changed."}},"id":"GoogleFirestoreAdminV1beta2IndexConfigDelta","description":"Information about an index configuration change.","type":"object"},"Status":{"description":"The `Status` type defines a logical error model that is suitable for different\nprogramming environments, including REST APIs and RPC APIs. It is used by\n[gRPC](https://github.com/grpc). The error model is designed to be:\n\n- Simple to use and understand for most users\n- Flexible enough to meet unexpected needs\n\n# Overview\n\nThe `Status` message contains three pieces of data: error code, error message,\nand error details. The error code should be an enum value of\ngoogle.rpc.Code, but it may accept additional error codes if needed.  The\nerror message should be a developer-facing English message that helps\ndevelopers *understand* and *resolve* the error. If a localized user-facing\nerror message is needed, put the localized message in the error details or\nlocalize it in the client. The optional error details may contain arbitrary\ninformation about the error. There is a predefined set of error detail types\nin the package `google.rpc` that can be used for common error conditions.\n\n# Language mapping\n\nThe `Status` message is the logical representation of the error model, but it\nis not necessarily the actual wire format. When the `Status` message is\nexposed in different client libraries and different wire protocols, it can be\nmapped differently. For example, it will likely be mapped to some exceptions\nin Java, but more likely mapped to some error codes in C.\n\n# Other uses\n\nThe error model and the `Status` message can be used in a variety of\nenvironments, either with or without APIs, to provide a\nconsistent developer experience across different environments.\n\nExample uses of this error model include:\n\n- Partial errors. If a service needs to return partial errors to the client,\n    it may embed the `Status` in the normal response to indicate the partial\n    errors.\n\n- Workflow errors. A typical workflow has multiple steps. Each step may\n    have a `Status` message for error reporting.\n\n- Batch operations. If a client uses batch request and batch response, the\n    `Status` message should be used directly inside batch response, one for\n    each error sub-response.\n\n- Asynchronous operations. If an API call embeds asynchronous operation\n    results in its response, the status of those operations should be\n    represented directly using the `Status` message.\n\n- Logging. If some API errors are stored in logs, the message `Status` could\n    be used directly after any stripping needed for security/privacy reasons.","type":"object","properties":{"details":{"description":"A list of messages that carry the error details.  There is a common set of\nmessage types for APIs to use.","type":"array","items":{"additionalProperties":{"description":"Properties of the object. Contains field @type with type URL.","type":"any"},"type":"object"}},"code":{"description":"The status code, which should be an enum value of google.rpc.Code.","format":"int32","type":"integer"},"message":{"description":"A developer-facing error message, which should be in English. Any\nuser-facing error message should be localized and sent in the\ngoogle.rpc.Status.details field, or localized by the client.","type":"string"}},"id":"Status"},"Empty":{"description":"A generic empty message that you can re-use to avoid defining duplicated\nempty messages in your APIs. A typical example is to use it as the request\nor the response type of an API method. For instance:\n\n    service Foo {\n      rpc Bar(google.protobuf.Empty) returns (google.protobuf.Empty);\n    }\n\nThe JSON representation for `Empty` is empty JSON object `{}`.","type":"object","properties":{},"id":"Empty"}},"icons":{"x16":"http://www.google.com/images/icons/product/search-16.gif","x32":"http://www.google.com/images/icons/product/search-32.gif"},"protocol":"rest","canonicalName":"Firestore","auth":{"oauth2":{"scopes":{"https://www.googleapis.com/auth/datastore":{"description":"View and manage your Google Cloud Datastore data"},"https://www.googleapis.com/auth/cloud-platform":{"description":"View and manage your data across Google Cloud Platform services"}}}},"rootUrl":"https://firestore.googleapis.com/","ownerDomain":"google.com","name":"firestore","batchPath":"batch","fullyEncodeReservedExpansion":true,"title":"Cloud Firestore API","ownerName":"Google","resources":{"projects":{"resources":{"databases":{"resources":{"collectionGroups":{"resources":{"fields":{"methods":{"get":{"description":"Gets the metadata and configuration for a Field.","httpMethod":"GET","parameterOrder":["name"],"response":{"$ref":"GoogleFirestoreAdminV1beta2Field"},"parameters":{"name":{"location":"path","description":"A name of the form\n`projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_id}`","required":true,"type":"string","pattern":"^projects/[^/]+/databases/[^/]+/collectionGroups/[^/]+/fields/[^/]+$"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/datastore"],"flatPath":"v1beta2/projects/{projectsId}/databases/{databasesId}/collectionGroups/{collectionGroupsId}/fields/{fieldsId}","id":"firestore.projects.databases.collectionGroups.fields.get","path":"v1beta2/{+name}"},"patch":{"description":"Updates a field configuration. Currently, field updates apply only to\nsingle field index configuration. However, calls to\nFirestoreAdmin.UpdateField should provide a field mask to avoid\nchanging any configuration that the caller isn't aware of. The field mask\nshould be specified as: `{ paths: \"index_config\" }`.\n\nThis call returns a google.longrunning.Operation which may be used to\ntrack the status of the field update. The metadata for\nthe operation will be the type FieldOperationMetadata.\n\nTo configure the default field settings for the database, use\nthe special `Field` with resource name:\n`projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`.","request":{"$ref":"GoogleFirestoreAdminV1beta2Field"},"response":{"$ref":"GoogleLongrunningOperation"},"parameterOrder":["name"],"httpMethod":"PATCH","parameters":{"updateMask":{"description":"A mask, relative to the field. If specified, only configuration specified\nby this field_mask will be updated in the field.","format":"google-fieldmask","type":"string","location":"query"},"name":{"description":"A field name of the form\n`projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/fields/{field_path}`\n\nA field path may be a simple field name, e.g. `address` or a path to fields\nwithin map_value , e.g. `address.city`,\nor a special field path. The only valid special field is `*`, which\nrepresents any field.\n\nField paths may be quoted using ` (backtick). The only character that needs\nto be escaped within a quoted field path is the backtick character itself,\nescaped using a backslash. Special characters in field paths that\nmust be quoted include: `*`, `.`,\n``` (backtick), `[`, `]`, as well as any ascii symbolic characters.\n\nExamples:\n(Note: Comments here are written in markdown syntax, so there is an\n additional layer of backticks to represent a code block)\n`\\`address.city\\`` represents a field named `address.city`, not the map key\n`city` in the field `address`.\n`\\`*\\`` represents a field named `*`, not any field.\n\nA special `Field` contains the default indexing settings for all fields.\nThis field's resource name is:\n`projects/{project_id}/databases/{database_id}/collectionGroups/__default__/fields/*`\nIndexes defined on this `Field` will be applied to all fields which do not\nhave their own `Field` index configuration.","required":true,"type":"string","pattern":"^projects/[^/]+/databases/[^/]+/collectionGroups/[^/]+/fields/[^/]+$","location":"path"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/datastore"],"flatPath":"v1beta2/projects/{projectsId}/databases/{databasesId}/collectionGroups/{collectionGroupsId}/fields/{fieldsId}","path":"v1beta2/{+name}","id":"firestore.projects.databases.collectionGroups.fields.patch"},"list":{"flatPath":"v1beta2/projects/{projectsId}/databases/{databasesId}/collectionGroups/{collectionGroupsId}/fields","id":"firestore.projects.databases.collectionGroups.fields.list","path":"v1beta2/{+parent}/fields","description":"Lists the field configuration and metadata for this database.\n\nCurrently, FirestoreAdmin.ListFields only supports listing fields\nthat have been explicitly overridden. To issue this query, call\nFirestoreAdmin.ListFields with the filter set to\n`indexConfig.usesAncestorConfig:false`.","httpMethod":"GET","response":{"$ref":"GoogleFirestoreAdminV1beta2ListFieldsResponse"},"parameterOrder":["parent"],"parameters":{"pageToken":{"location":"query","description":"A page token, returned from a previous call to\nFirestoreAdmin.ListFields, that may be used to get the next\npage of results.","type":"string"},"pageSize":{"location":"query","description":"The number of results to return.","format":"int32","type":"integer"},"parent":{"description":"A parent name of the form\n`projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`","required":true,"type":"string","pattern":"^projects/[^/]+/databases/[^/]+/collectionGroups/[^/]+$","location":"path"},"filter":{"location":"query","description":"The filter to apply to list results. Currently,\nFirestoreAdmin.ListFields only supports listing fields\nthat have been explicitly overridden. To issue this query, call\nFirestoreAdmin.ListFields with the filter set to\n`indexConfig.usesAncestorConfig:false`.","type":"string"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/datastore"]}}},"indexes":{"methods":{"delete":{"flatPath":"v1beta2/projects/{projectsId}/databases/{databasesId}/collectionGroups/{collectionGroupsId}/indexes/{indexesId}","path":"v1beta2/{+name}","id":"firestore.projects.databases.collectionGroups.indexes.delete","description":"Deletes a composite index.","response":{"$ref":"Empty"},"parameterOrder":["name"],"httpMethod":"DELETE","parameters":{"name":{"pattern":"^projects/[^/]+/databases/[^/]+/collectionGroups/[^/]+/indexes/[^/]+$","location":"path","description":"A name of the form\n`projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`","required":true,"type":"string"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/datastore"]},"get":{"description":"Gets a composite index.","response":{"$ref":"GoogleFirestoreAdminV1beta2Index"},"parameterOrder":["name"],"httpMethod":"GET","parameters":{"name":{"description":"A name of the form\n`projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}/indexes/{index_id}`","required":true,"type":"string","pattern":"^projects/[^/]+/databases/[^/]+/collectionGroups/[^/]+/indexes/[^/]+$","location":"path"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/datastore"],"flatPath":"v1beta2/projects/{projectsId}/databases/{databasesId}/collectionGroups/{collectionGroupsId}/indexes/{indexesId}","path":"v1beta2/{+name}","id":"firestore.projects.databases.collectionGroups.indexes.get"}}}}},"collectionGroup":{"resources":{"indexes":{"methods":{"list":{"path":"v1beta2/{+parent}/indexes","id":"firestore.projects.databases.collectionGroup.indexes.list","description":"Lists composite indexes.","response":{"$ref":"GoogleFirestoreAdminV1beta2ListIndexesResponse"},"parameterOrder":["parent"],"httpMethod":"GET","scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/datastore"],"parameters":{"pageSize":{"description":"The number of results to return.","format":"int32","type":"integer","location":"query"},"parent":{"description":"A parent name of the form\n`projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`","required":true,"type":"string","pattern":"^projects/[^/]+/databases/[^/]+/collectionGroup/[^/]+$","location":"path"},"filter":{"description":"The filter to apply to list results.","type":"string","location":"query"},"pageToken":{"location":"query","description":"A page token, returned from a previous call to\nFirestoreAdmin.ListIndexes, that may be used to get the next\npage of results.","type":"string"}},"flatPath":"v1beta2/projects/{projectsId}/databases/{databasesId}/collectionGroup/{collectionGroupId}/indexes"},"create":{"description":"Creates a composite index. This returns a google.longrunning.Operation\nwhich may be used to track the status of the creation. The metadata for\nthe operation will be the type IndexOperationMetadata.","request":{"$ref":"GoogleFirestoreAdminV1beta2Index"},"response":{"$ref":"GoogleLongrunningOperation"},"parameterOrder":["parent"],"httpMethod":"POST","parameters":{"parent":{"pattern":"^projects/[^/]+/databases/[^/]+/collectionGroup/[^/]+$","location":"path","description":"A parent name of the form\n`projects/{project_id}/databases/{database_id}/collectionGroups/{collection_id}`","required":true,"type":"string"}},"scopes":["https://www.googleapis.com/auth/cloud-platform","https://www.googleapis.com/auth/datastore"],"flatPath":"v1beta2/projects/{projectsId}/databases/{databasesId}/collectionGroup/{collectionGroupId}/indexes","path":"v1beta2/{+parent}/indexes","id":"firestore.projects.databases.collectionGroup.indexes.create"}}}}}}}}}},"parameters":{"upload_protocol":{"location":"query","description":"Upload protocol for media (e.g. \"raw\", \"multipart\").","type":"string"},"quotaUser":{"location":"query","description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.","type":"string"},"prettyPrint":{"location":"query","description":"Returns response with indentations and line breaks.","type":"boolean","default":"true"},"uploadType":{"location":"query","description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\").","type":"string"},"fields":{"description":"Selector specifying which fields to include in a partial response.","type":"string","location":"query"},"callback":{"description":"JSONP","type":"string","location":"query"},"oauth_token":{"description":"OAuth 2.0 token for the current user.","type":"string","location":"query"},"$.xgafv":{"description":"V1 error format.","type":"string","enumDescriptions":["v1 error format","v2 error format"],"location":"query","enum":["1","2"]},"alt":{"enum":["json","media","proto"],"type":"string","enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query","description":"Data format for response.","default":"json"},"key":{"description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string","location":"query"},"access_token":{"location":"query","description":"OAuth access token.","type":"string"}},"version":"v1beta2"};