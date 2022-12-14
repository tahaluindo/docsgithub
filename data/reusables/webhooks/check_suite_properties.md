Key | Type | Description
----|------|-------------
`action`|`string` | The action performed. Can be:<ul><li>`completed` - All check runs in a check suite have completed.</li><li>`requested` - Occurs when new code is pushed to the app's repository. When you receive the `requested` action events, you'll need to [create a new check run](/rest/reference/checks#create-a-check-run).</li><li>`rerequested` - Occurs when someone requests to re-run the entire check suite from the pull request UI. When you receive the `rerequested` action events, you'll need to [create a new check run](/rest/reference/checks#create-a-check-run). See "[About status checks](/articles/about-status-checks#checks)" for more details about the GitHub UI.</li></ul>
`check_suite`|`object` | The [check_suite](/rest/reference/checks#suites).
`check_suite[head_branch]`|`string` | The head branch name the changes are on.
`check_suite[head_sha]`|`string` | The SHA of the most recent commit for this check suite.
`check_suite[status]`|`string` | The summary status for all check runs that are part of the check suite. Can be `queued`, `requested`, `in_progress`, or `completed`.
`check_suite[conclusion]`|`string`| The summary conclusion for all check runs that are part of the check suite. Can be one of `success`, `failure`, `neutral`, `cancelled`, `timed_out`,  `action_required` or `stale`. This value will be `null` until the check run has `completed`.
`check_suite[url]`|`string` | URL that points to the check suite API resource.
`check_suite[pull_requests]`|`array`| An array of pull requests that match this check suite. A pull request matches a check suite if they have the same `head_branch`.<br/><br/>**Note:**<ul><li>The `head_sha` of the check suite can differ from the `sha` of the pull request if subsequent pushes are made into the PR.</li><li>When the check suite's `head_branch` is in a forked repository it will be `null` and the `pull_requests` array will be empty.</li></ul>
