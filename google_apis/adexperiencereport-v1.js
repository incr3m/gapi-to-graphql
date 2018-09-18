module.exports={"parameters":{"access_token":{"description":"OAuth access token.","type":"string","location":"query"},"key":{"description":"API key. Your API key identifies your project and provides you with API access, quota, and reports. Required unless you provide an OAuth 2.0 token.","type":"string","location":"query"},"upload_protocol":{"description":"Upload protocol for media (e.g. \"raw\", \"multipart\").","type":"string","location":"query"},"prettyPrint":{"location":"query","description":"Returns response with indentations and line breaks.","type":"boolean","default":"true"},"quotaUser":{"description":"Available to use for quota purposes for server-side applications. Can be any arbitrary string assigned to a user, but should not exceed 40 characters.","type":"string","location":"query"},"fields":{"description":"Selector specifying which fields to include in a partial response.","type":"string","location":"query"},"uploadType":{"location":"query","description":"Legacy upload protocol for media (e.g. \"media\", \"multipart\").","type":"string"},"callback":{"description":"JSONP","type":"string","location":"query"},"oauth_token":{"description":"OAuth 2.0 token for the current user.","type":"string","location":"query"},"$.xgafv":{"description":"V1 error format.","type":"string","enumDescriptions":["v1 error format","v2 error format"],"location":"query","enum":["1","2"]},"alt":{"type":"string","enumDescriptions":["Responses with Content-Type of application/json","Media download with context-dependent Content-Type","Responses with Content-Type of application/x-protobuf"],"location":"query","description":"Data format for response.","default":"json","enum":["json","media","proto"]}},"version":"v1","baseUrl":"https://adexperiencereport.googleapis.com/","kind":"discovery#restDescription","description":"View Ad Experience Report data, and get a list of sites that have a significant number of annoying ads.","servicePath":"","basePath":"","revision":"20180911","documentationLink":"https://developers.google.com/ad-experience-report/","id":"adexperiencereport:v1","discoveryVersion":"v1","version_module":true,"schemas":{"PlatformSummary":{"id":"PlatformSummary","description":"Summary of the ad experience rating of a site for a specific platform.","type":"object","properties":{"lastChangeTime":{"description":"The last time that the site changed status.","format":"google-datetime","type":"string"},"betterAdsStatus":{"enumDescriptions":["Not reviewed.","Passing.","Warning.","Failing."],"enum":["UNKNOWN","PASSING","WARNING","FAILING"],"description":"The status of the site reviewed for the Better Ads Standards.","type":"string"},"region":{"description":"The assigned regions for the site and platform.","type":"array","items":{"enum":["REGION_UNKNOWN","REGION_A","REGION_B","REGION_C"],"type":"string"},"enumDescriptions":["Ad standard not yet defined for your region.","Region A.","Region B.","Region C."]},"enforcementTime":{"description":"The date on which ad filtering begins.","format":"google-datetime","type":"string"},"filterStatus":{"description":"The ad filtering status of the site.","type":"string","enumDescriptions":["N/A.","Ad filtering is on.","Ad filtering is off.","Ad filtering is paused.","Ad filtering is pending."],"enum":["UNKNOWN","ON","OFF","PAUSED","PENDING"]},"underReview":{"description":"Whether the site is currently under review.","type":"boolean"},"reportUrl":{"description":"A link that leads to a full ad experience report.","type":"string"}}},"ViolatingSitesResponse":{"description":"Response message for ListViolatingSites.","type":"object","properties":{"violatingSites":{"description":"A list of summaries of violating sites.","type":"array","items":{"$ref":"SiteSummaryResponse"}}},"id":"ViolatingSitesResponse"},"SiteSummaryResponse":{"id":"SiteSummaryResponse","description":"Response message for GetSiteSummary.","type":"object","properties":{"mobileSummary":{"description":"Summary for the mobile review of the site.","$ref":"PlatformSummary"},"reviewedSite":{"description":"The name of the site reviewed.","type":"string"},"desktopSummary":{"$ref":"PlatformSummary","description":"Summary for the desktop review of the site."}}}},"icons":{"x32":"http://www.google.com/images/icons/product/search-32.gif","x16":"http://www.google.com/images/icons/product/search-16.gif"},"protocol":"rest","canonicalName":"Ad Experience Report","auth":{"oauth2":{"scopes":{"https://www.googleapis.com/auth/xapi.zoo":{"description":"Test scope for access to the Zoo service"}}}},"rootUrl":"https://adexperiencereport.googleapis.com/","ownerDomain":"google.com","name":"adexperiencereport","batchPath":"batch","title":"Ad Experience Report API","ownerName":"Google","resources":{"violatingSites":{"methods":{"list":{"scopes":["https://www.googleapis.com/auth/xapi.zoo"],"parameters":{},"flatPath":"v1/violatingSites","path":"v1/violatingSites","id":"adexperiencereport.violatingSites.list","description":"Lists sites with Ad Experience Report statuses of \"Failing\" or \"Warning\".","response":{"$ref":"ViolatingSitesResponse"},"parameterOrder":[],"httpMethod":"GET"}}},"sites":{"methods":{"get":{"response":{"$ref":"SiteSummaryResponse"},"parameterOrder":["name"],"httpMethod":"GET","scopes":["https://www.googleapis.com/auth/xapi.zoo"],"parameters":{"name":{"pattern":"^sites/[^/]+$","location":"path","description":"The required site name. It should be the site property whose ad experiences\nmay have been reviewed, and it should be URL-encoded. For example,\nsites/https%3A%2F%2Fwww.google.com. The server will return an error of\nBAD_REQUEST if this field is not filled in. Note that if the site property\nis not yet verified in Search Console, the reportUrl field returned by the\nAPI will lead to the verification page, prompting the user to go through\nthat process before they can gain access to the Ad Experience Report.","required":true,"type":"string"}},"flatPath":"v1/sites/{sitesId}","path":"v1/{+name}","id":"adexperiencereport.sites.get","description":"Gets a summary of the ad experience rating of a site."}}}}};