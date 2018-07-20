// Use tape
var test = require("tape");
//Link to both data.js and logic.js:
var logic = require("./logic.js");
var data = require("./data.js");

// test that tape is working:
test("Testing Tape is working", function(t) {
  t.equal(1, 1, "One should equal one");
  t.end();
});

var example = [
  {
    id: 111249152,
    node_id: "MDEwOlJlcG9zaXRvcnkxMTEyNDkxNTI=",
    name: "calculator",
    full_name: "developess/calculator",
    owner: {
      login: "developess",
      id: 31890915,
      node_id: "MDQ6VXNlcjMxODkwOTE1",
      avatar_url: "https://avatars1.githubusercontent.com/u/31890915?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/developess",
      html_url: "https://github.com/developess",
      followers_url: "https://api.github.com/users/developess/followers",
      following_url:
        "https://api.github.com/users/developess/following{/other_user}",
      gists_url: "https://api.github.com/users/developess/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/developess/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/developess/subscriptions",
      organizations_url: "https://api.github.com/users/developess/orgs",
      repos_url: "https://api.github.com/users/developess/repos",
      events_url: "https://api.github.com/users/developess/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/developess/received_events",
      type: "User",
      site_admin: false
    },
    private: false,
    html_url: "https://github.com/developess/calculator",
    description: "JavaScript project - building functioning calculator",
    fork: false,
    url: "https://api.github.com/repos/developess/calculator",
    forks_url: "https://api.github.com/repos/developess/calculator/forks",
    keys_url:
      "https://api.github.com/repos/developess/calculator/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/developess/calculator/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/developess/calculator/teams",
    hooks_url: "https://api.github.com/repos/developess/calculator/hooks",
    issue_events_url:
      "https://api.github.com/repos/developess/calculator/issues/events{/number}",
    events_url: "https://api.github.com/repos/developess/calculator/events",
    assignees_url:
      "https://api.github.com/repos/developess/calculator/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/developess/calculator/branches{/branch}",
    tags_url: "https://api.github.com/repos/developess/calculator/tags",
    blobs_url:
      "https://api.github.com/repos/developess/calculator/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/developess/calculator/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/developess/calculator/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/developess/calculator/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/developess/calculator/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/developess/calculator/languages",
    stargazers_url:
      "https://api.github.com/repos/developess/calculator/stargazers",
    contributors_url:
      "https://api.github.com/repos/developess/calculator/contributors",
    subscribers_url:
      "https://api.github.com/repos/developess/calculator/subscribers",
    subscription_url:
      "https://api.github.com/repos/developess/calculator/subscription",
    commits_url:
      "https://api.github.com/repos/developess/calculator/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/developess/calculator/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/developess/calculator/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/developess/calculator/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/developess/calculator/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/developess/calculator/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/developess/calculator/merges",
    archive_url:
      "https://api.github.com/repos/developess/calculator/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/developess/calculator/downloads",
    issues_url:
      "https://api.github.com/repos/developess/calculator/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/developess/calculator/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/developess/calculator/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/developess/calculator/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/developess/calculator/labels{/name}",
    releases_url:
      "https://api.github.com/repos/developess/calculator/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/developess/calculator/deployments",
    created_at: "2017-11-18T23:48:58Z",
    updated_at: "2018-06-11T15:49:35Z",
    pushed_at: "2018-06-11T15:49:33Z",
    git_url: "git://github.com/developess/calculator.git",
    ssh_url: "git@github.com:developess/calculator.git",
    clone_url: "https://github.com/developess/calculator.git",
    svn_url: "https://github.com/developess/calculator",
    homepage: "",
    size: 7,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 125772640,
    node_id: "MDEwOlJlcG9zaXRvcnkxMjU3NzI2NDA=",
    name: "developess.github.io",
    full_name: "developess/developess.github.io",
    owner: {
      login: "developess",
      id: 31890915,
      node_id: "MDQ6VXNlcjMxODkwOTE1",
      avatar_url: "https://avatars1.githubusercontent.com/u/31890915?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/developess",
      html_url: "https://github.com/developess",
      followers_url: "https://api.github.com/users/developess/followers",
      following_url:
        "https://api.github.com/users/developess/following{/other_user}",
      gists_url: "https://api.github.com/users/developess/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/developess/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/developess/subscriptions",
      organizations_url: "https://api.github.com/users/developess/orgs",
      repos_url: "https://api.github.com/users/developess/repos",
      events_url: "https://api.github.com/users/developess/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/developess/received_events",
      type: "User",
      site_admin: false
    },
    private: false,
    html_url: "https://github.com/developess/developess.github.io",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/developess/developess.github.io",
    forks_url:
      "https://api.github.com/repos/developess/developess.github.io/forks",
    keys_url:
      "https://api.github.com/repos/developess/developess.github.io/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/developess/developess.github.io/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/developess/developess.github.io/teams",
    hooks_url:
      "https://api.github.com/repos/developess/developess.github.io/hooks",
    issue_events_url:
      "https://api.github.com/repos/developess/developess.github.io/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/developess/developess.github.io/events",
    assignees_url:
      "https://api.github.com/repos/developess/developess.github.io/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/developess/developess.github.io/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/developess/developess.github.io/tags",
    blobs_url:
      "https://api.github.com/repos/developess/developess.github.io/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/developess/developess.github.io/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/developess/developess.github.io/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/developess/developess.github.io/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/developess/developess.github.io/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/developess/developess.github.io/languages",
    stargazers_url:
      "https://api.github.com/repos/developess/developess.github.io/stargazers",
    contributors_url:
      "https://api.github.com/repos/developess/developess.github.io/contributors",
    subscribers_url:
      "https://api.github.com/repos/developess/developess.github.io/subscribers",
    subscription_url:
      "https://api.github.com/repos/developess/developess.github.io/subscription",
    commits_url:
      "https://api.github.com/repos/developess/developess.github.io/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/developess/developess.github.io/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/developess/developess.github.io/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/developess/developess.github.io/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/developess/developess.github.io/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/developess/developess.github.io/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/developess/developess.github.io/merges",
    archive_url:
      "https://api.github.com/repos/developess/developess.github.io/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/developess/developess.github.io/downloads",
    issues_url:
      "https://api.github.com/repos/developess/developess.github.io/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/developess/developess.github.io/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/developess/developess.github.io/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/developess/developess.github.io/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/developess/developess.github.io/labels{/name}",
    releases_url:
      "https://api.github.com/repos/developess/developess.github.io/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/developess/developess.github.io/deployments",
    created_at: "2018-03-18T22:16:26Z",
    updated_at: "2018-07-02T14:48:26Z",
    pushed_at: "2018-07-03T15:57:43Z",
    git_url: "git://github.com/developess/developess.github.io.git",
    ssh_url: "git@github.com:developess/developess.github.io.git",
    clone_url: "https://github.com/developess/developess.github.io.git",
    svn_url: "https://github.com/developess/developess.github.io",
    homepage: null,
    size: 1959,
    stargazers_count: 0,
    watchers_count: 0,
    language: "CSS",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: true,
    forks_count: 2,
    mirror_url: null,
    archived: false,
    open_issues_count: 2,
    license: null,
    forks: 2,
    open_issues: 2,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 104238355,
    node_id: "MDEwOlJlcG9zaXRvcnkxMDQyMzgzNTU=",
    name: "First-Website",
    full_name: "developess/First-Website",
    owner: {
      login: "developess",
      id: 31890915,
      node_id: "MDQ6VXNlcjMxODkwOTE1",
      avatar_url: "https://avatars1.githubusercontent.com/u/31890915?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/developess",
      html_url: "https://github.com/developess",
      followers_url: "https://api.github.com/users/developess/followers",
      following_url:
        "https://api.github.com/users/developess/following{/other_user}",
      gists_url: "https://api.github.com/users/developess/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/developess/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/developess/subscriptions",
      organizations_url: "https://api.github.com/users/developess/orgs",
      repos_url: "https://api.github.com/users/developess/repos",
      events_url: "https://api.github.com/users/developess/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/developess/received_events",
      type: "User",
      site_admin: false
    },
    private: false,
    html_url: "https://github.com/developess/First-Website",
    description: "First Website - FAC",
    fork: false,
    url: "https://api.github.com/repos/developess/First-Website",
    forks_url: "https://api.github.com/repos/developess/First-Website/forks",
    keys_url:
      "https://api.github.com/repos/developess/First-Website/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/developess/First-Website/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/developess/First-Website/teams",
    hooks_url: "https://api.github.com/repos/developess/First-Website/hooks",
    issue_events_url:
      "https://api.github.com/repos/developess/First-Website/issues/events{/number}",
    events_url: "https://api.github.com/repos/developess/First-Website/events",
    assignees_url:
      "https://api.github.com/repos/developess/First-Website/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/developess/First-Website/branches{/branch}",
    tags_url: "https://api.github.com/repos/developess/First-Website/tags",
    blobs_url:
      "https://api.github.com/repos/developess/First-Website/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/developess/First-Website/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/developess/First-Website/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/developess/First-Website/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/developess/First-Website/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/developess/First-Website/languages",
    stargazers_url:
      "https://api.github.com/repos/developess/First-Website/stargazers",
    contributors_url:
      "https://api.github.com/repos/developess/First-Website/contributors",
    subscribers_url:
      "https://api.github.com/repos/developess/First-Website/subscribers",
    subscription_url:
      "https://api.github.com/repos/developess/First-Website/subscription",
    commits_url:
      "https://api.github.com/repos/developess/First-Website/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/developess/First-Website/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/developess/First-Website/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/developess/First-Website/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/developess/First-Website/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/developess/First-Website/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/developess/First-Website/merges",
    archive_url:
      "https://api.github.com/repos/developess/First-Website/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/developess/First-Website/downloads",
    issues_url:
      "https://api.github.com/repos/developess/First-Website/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/developess/First-Website/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/developess/First-Website/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/developess/First-Website/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/developess/First-Website/labels{/name}",
    releases_url:
      "https://api.github.com/repos/developess/First-Website/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/developess/First-Website/deployments",
    created_at: "2017-09-20T16:08:58Z",
    updated_at: "2018-03-25T19:59:08Z",
    pushed_at: "2017-11-28T22:49:33Z",
    git_url: "git://github.com/developess/First-Website.git",
    ssh_url: "git@github.com:developess/First-Website.git",
    clone_url: "https://github.com/developess/First-Website.git",
    svn_url: "https://github.com/developess/First-Website",
    homepage: "",
    size: 3844,
    stargazers_count: 0,
    watchers_count: 0,
    language: "HTML",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 103272753,
    node_id: "MDEwOlJlcG9zaXRvcnkxMDMyNzI3NTM=",
    name: "hello-world",
    full_name: "developess/hello-world",
    owner: {
      login: "developess",
      id: 31890915,
      node_id: "MDQ6VXNlcjMxODkwOTE1",
      avatar_url: "https://avatars1.githubusercontent.com/u/31890915?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/developess",
      html_url: "https://github.com/developess",
      followers_url: "https://api.github.com/users/developess/followers",
      following_url:
        "https://api.github.com/users/developess/following{/other_user}",
      gists_url: "https://api.github.com/users/developess/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/developess/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/developess/subscriptions",
      organizations_url: "https://api.github.com/users/developess/orgs",
      repos_url: "https://api.github.com/users/developess/repos",
      events_url: "https://api.github.com/users/developess/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/developess/received_events",
      type: "User",
      site_admin: false
    },
    private: false,
    html_url: "https://github.com/developess/hello-world",
    description: "Just another repository",
    fork: false,
    url: "https://api.github.com/repos/developess/hello-world",
    forks_url: "https://api.github.com/repos/developess/hello-world/forks",
    keys_url:
      "https://api.github.com/repos/developess/hello-world/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/developess/hello-world/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/developess/hello-world/teams",
    hooks_url: "https://api.github.com/repos/developess/hello-world/hooks",
    issue_events_url:
      "https://api.github.com/repos/developess/hello-world/issues/events{/number}",
    events_url: "https://api.github.com/repos/developess/hello-world/events",
    assignees_url:
      "https://api.github.com/repos/developess/hello-world/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/developess/hello-world/branches{/branch}",
    tags_url: "https://api.github.com/repos/developess/hello-world/tags",
    blobs_url:
      "https://api.github.com/repos/developess/hello-world/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/developess/hello-world/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/developess/hello-world/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/developess/hello-world/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/developess/hello-world/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/developess/hello-world/languages",
    stargazers_url:
      "https://api.github.com/repos/developess/hello-world/stargazers",
    contributors_url:
      "https://api.github.com/repos/developess/hello-world/contributors",
    subscribers_url:
      "https://api.github.com/repos/developess/hello-world/subscribers",
    subscription_url:
      "https://api.github.com/repos/developess/hello-world/subscription",
    commits_url:
      "https://api.github.com/repos/developess/hello-world/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/developess/hello-world/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/developess/hello-world/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/developess/hello-world/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/developess/hello-world/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/developess/hello-world/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/developess/hello-world/merges",
    archive_url:
      "https://api.github.com/repos/developess/hello-world/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/developess/hello-world/downloads",
    issues_url:
      "https://api.github.com/repos/developess/hello-world/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/developess/hello-world/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/developess/hello-world/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/developess/hello-world/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/developess/hello-world/labels{/name}",
    releases_url:
      "https://api.github.com/repos/developess/hello-world/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/developess/hello-world/deployments",
    created_at: "2017-09-12T13:15:24Z",
    updated_at: "2017-09-12T13:15:24Z",
    pushed_at: "2017-09-12T13:22:58Z",
    git_url: "git://github.com/developess/hello-world.git",
    ssh_url: "git@github.com:developess/hello-world.git",
    clone_url: "https://github.com/developess/hello-world.git",
    svn_url: "https://github.com/developess/hello-world",
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 136494035,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzY0OTQwMzU=",
    name: "Noughts-and-Crosses",
    full_name: "developess/Noughts-and-Crosses",
    owner: {
      login: "developess",
      id: 31890915,
      node_id: "MDQ6VXNlcjMxODkwOTE1",
      avatar_url: "https://avatars1.githubusercontent.com/u/31890915?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/developess",
      html_url: "https://github.com/developess",
      followers_url: "https://api.github.com/users/developess/followers",
      following_url:
        "https://api.github.com/users/developess/following{/other_user}",
      gists_url: "https://api.github.com/users/developess/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/developess/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/developess/subscriptions",
      organizations_url: "https://api.github.com/users/developess/orgs",
      repos_url: "https://api.github.com/users/developess/repos",
      events_url: "https://api.github.com/users/developess/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/developess/received_events",
      type: "User",
      site_admin: false
    },
    private: false,
    html_url: "https://github.com/developess/Noughts-and-Crosses",
    description: "A simple tic-tac-toe game in JavaScript",
    fork: false,
    url: "https://api.github.com/repos/developess/Noughts-and-Crosses",
    forks_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/forks",
    keys_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/teams",
    hooks_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/hooks",
    issue_events_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/events",
    assignees_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/tags",
    blobs_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/languages",
    stargazers_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/stargazers",
    contributors_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/contributors",
    subscribers_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/subscribers",
    subscription_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/subscription",
    commits_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/merges",
    archive_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/downloads",
    issues_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/labels{/name}",
    releases_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/developess/Noughts-and-Crosses/deployments",
    created_at: "2018-06-07T15:06:42Z",
    updated_at: "2018-06-11T10:51:28Z",
    pushed_at: "2018-06-07T15:15:30Z",
    git_url: "git://github.com/developess/Noughts-and-Crosses.git",
    ssh_url: "git@github.com:developess/Noughts-and-Crosses.git",
    clone_url: "https://github.com/developess/Noughts-and-Crosses.git",
    svn_url: "https://github.com/developess/Noughts-and-Crosses",
    homepage: "",
    size: 3,
    stargazers_count: 0,
    watchers_count: 0,
    language: "JavaScript",
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 137936883,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzc5MzY4ODM=",
    name: "pointers101",
    full_name: "developess/pointers101",
    owner: {
      login: "developess",
      id: 31890915,
      node_id: "MDQ6VXNlcjMxODkwOTE1",
      avatar_url: "https://avatars1.githubusercontent.com/u/31890915?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/developess",
      html_url: "https://github.com/developess",
      followers_url: "https://api.github.com/users/developess/followers",
      following_url:
        "https://api.github.com/users/developess/following{/other_user}",
      gists_url: "https://api.github.com/users/developess/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/developess/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/developess/subscriptions",
      organizations_url: "https://api.github.com/users/developess/orgs",
      repos_url: "https://api.github.com/users/developess/repos",
      events_url: "https://api.github.com/users/developess/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/developess/received_events",
      type: "User",
      site_admin: false
    },
    private: false,
    html_url: "https://github.com/developess/pointers101",
    description: null,
    fork: true,
    url: "https://api.github.com/repos/developess/pointers101",
    forks_url: "https://api.github.com/repos/developess/pointers101/forks",
    keys_url:
      "https://api.github.com/repos/developess/pointers101/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/developess/pointers101/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/developess/pointers101/teams",
    hooks_url: "https://api.github.com/repos/developess/pointers101/hooks",
    issue_events_url:
      "https://api.github.com/repos/developess/pointers101/issues/events{/number}",
    events_url: "https://api.github.com/repos/developess/pointers101/events",
    assignees_url:
      "https://api.github.com/repos/developess/pointers101/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/developess/pointers101/branches{/branch}",
    tags_url: "https://api.github.com/repos/developess/pointers101/tags",
    blobs_url:
      "https://api.github.com/repos/developess/pointers101/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/developess/pointers101/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/developess/pointers101/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/developess/pointers101/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/developess/pointers101/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/developess/pointers101/languages",
    stargazers_url:
      "https://api.github.com/repos/developess/pointers101/stargazers",
    contributors_url:
      "https://api.github.com/repos/developess/pointers101/contributors",
    subscribers_url:
      "https://api.github.com/repos/developess/pointers101/subscribers",
    subscription_url:
      "https://api.github.com/repos/developess/pointers101/subscription",
    commits_url:
      "https://api.github.com/repos/developess/pointers101/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/developess/pointers101/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/developess/pointers101/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/developess/pointers101/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/developess/pointers101/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/developess/pointers101/compare/{base}...{head}",
    merges_url: "https://api.github.com/repos/developess/pointers101/merges",
    archive_url:
      "https://api.github.com/repos/developess/pointers101/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/developess/pointers101/downloads",
    issues_url:
      "https://api.github.com/repos/developess/pointers101/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/developess/pointers101/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/developess/pointers101/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/developess/pointers101/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/developess/pointers101/labels{/name}",
    releases_url:
      "https://api.github.com/repos/developess/pointers101/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/developess/pointers101/deployments",
    created_at: "2018-06-19T19:35:20Z",
    updated_at: "2018-06-19T19:42:17Z",
    pushed_at: "2018-06-19T19:42:16Z",
    git_url: "git://github.com/developess/pointers101.git",
    ssh_url: "git@github.com:developess/pointers101.git",
    clone_url: "https://github.com/developess/pointers101.git",
    svn_url: "https://github.com/developess/pointers101",
    homepage: null,
    size: 80,
    stargazers_count: 0,
    watchers_count: 0,
    language: "C++",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 137927583,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzc5Mjc1ODM=",
    name: "practiceRepoCpp",
    full_name: "developess/practiceRepoCpp",
    owner: {
      login: "developess",
      id: 31890915,
      node_id: "MDQ6VXNlcjMxODkwOTE1",
      avatar_url: "https://avatars1.githubusercontent.com/u/31890915?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/developess",
      html_url: "https://github.com/developess",
      followers_url: "https://api.github.com/users/developess/followers",
      following_url:
        "https://api.github.com/users/developess/following{/other_user}",
      gists_url: "https://api.github.com/users/developess/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/developess/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/developess/subscriptions",
      organizations_url: "https://api.github.com/users/developess/orgs",
      repos_url: "https://api.github.com/users/developess/repos",
      events_url: "https://api.github.com/users/developess/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/developess/received_events",
      type: "User",
      site_admin: false
    },
    private: false,
    html_url: "https://github.com/developess/practiceRepoCpp",
    description: null,
    fork: false,
    url: "https://api.github.com/repos/developess/practiceRepoCpp",
    forks_url: "https://api.github.com/repos/developess/practiceRepoCpp/forks",
    keys_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/collaborators{/collaborator}",
    teams_url: "https://api.github.com/repos/developess/practiceRepoCpp/teams",
    hooks_url: "https://api.github.com/repos/developess/practiceRepoCpp/hooks",
    issue_events_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/events",
    assignees_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/branches{/branch}",
    tags_url: "https://api.github.com/repos/developess/practiceRepoCpp/tags",
    blobs_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/languages",
    stargazers_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/stargazers",
    contributors_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/contributors",
    subscribers_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/subscribers",
    subscription_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/subscription",
    commits_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/merges",
    archive_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/downloads",
    issues_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/labels{/name}",
    releases_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/developess/practiceRepoCpp/deployments",
    created_at: "2018-06-19T18:03:28Z",
    updated_at: "2018-06-19T18:30:00Z",
    pushed_at: "2018-06-19T18:29:59Z",
    git_url: "git://github.com/developess/practiceRepoCpp.git",
    ssh_url: "git@github.com:developess/practiceRepoCpp.git",
    clone_url: "https://github.com/developess/practiceRepoCpp.git",
    svn_url: "https://github.com/developess/practiceRepoCpp",
    homepage: null,
    size: 0,
    stargazers_count: 0,
    watchers_count: 0,
    language: null,
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  },
  {
    id: 139978551,
    node_id: "MDEwOlJlcG9zaXRvcnkxMzk5Nzg1NTE=",
    name: "SleepySheepy172.github.io",
    full_name: "developess/SleepySheepy172.github.io",
    owner: {
      login: "developess",
      id: 31890915,
      node_id: "MDQ6VXNlcjMxODkwOTE1",
      avatar_url: "https://avatars1.githubusercontent.com/u/31890915?v=4",
      gravatar_id: "",
      url: "https://api.github.com/users/developess",
      html_url: "https://github.com/developess",
      followers_url: "https://api.github.com/users/developess/followers",
      following_url:
        "https://api.github.com/users/developess/following{/other_user}",
      gists_url: "https://api.github.com/users/developess/gists{/gist_id}",
      starred_url:
        "https://api.github.com/users/developess/starred{/owner}{/repo}",
      subscriptions_url:
        "https://api.github.com/users/developess/subscriptions",
      organizations_url: "https://api.github.com/users/developess/orgs",
      repos_url: "https://api.github.com/users/developess/repos",
      events_url: "https://api.github.com/users/developess/events{/privacy}",
      received_events_url:
        "https://api.github.com/users/developess/received_events",
      type: "User",
      site_admin: false
    },
    private: false,
    html_url: "https://github.com/developess/SleepySheepy172.github.io",
    description: "Personal portfolio page",
    fork: true,
    url: "https://api.github.com/repos/developess/SleepySheepy172.github.io",
    forks_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/forks",
    keys_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/keys{/key_id}",
    collaborators_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/collaborators{/collaborator}",
    teams_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/teams",
    hooks_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/hooks",
    issue_events_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/issues/events{/number}",
    events_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/events",
    assignees_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/assignees{/user}",
    branches_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/branches{/branch}",
    tags_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/tags",
    blobs_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/git/blobs{/sha}",
    git_tags_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/git/tags{/sha}",
    git_refs_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/git/refs{/sha}",
    trees_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/git/trees{/sha}",
    statuses_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/statuses/{sha}",
    languages_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/languages",
    stargazers_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/stargazers",
    contributors_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/contributors",
    subscribers_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/subscribers",
    subscription_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/subscription",
    commits_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/commits{/sha}",
    git_commits_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/git/commits{/sha}",
    comments_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/comments{/number}",
    issue_comment_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/issues/comments{/number}",
    contents_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/contents/{+path}",
    compare_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/compare/{base}...{head}",
    merges_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/merges",
    archive_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/{archive_format}{/ref}",
    downloads_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/downloads",
    issues_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/issues{/number}",
    pulls_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/pulls{/number}",
    milestones_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/milestones{/number}",
    notifications_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/notifications{?since,all,participating}",
    labels_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/labels{/name}",
    releases_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/releases{/id}",
    deployments_url:
      "https://api.github.com/repos/developess/SleepySheepy172.github.io/deployments",
    created_at: "2018-07-06T11:53:08Z",
    updated_at: "2018-07-06T11:53:11Z",
    pushed_at: "2018-07-05T13:19:04Z",
    git_url: "git://github.com/developess/SleepySheepy172.github.io.git",
    ssh_url: "git@github.com:developess/SleepySheepy172.github.io.git",
    clone_url: "https://github.com/developess/SleepySheepy172.github.io.git",
    svn_url: "https://github.com/developess/SleepySheepy172.github.io",
    homepage: null,
    size: 16028,
    stargazers_count: 0,
    watchers_count: 0,
    language: "CSS",
    has_issues: false,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    open_issues_count: 0,
    license: null,
    forks: 0,
    open_issues: 0,
    watchers: 0,
    default_branch: "master"
  }
];

test("Tests for longest repo name", function(t) {
  t.equal(
    typeof logic.longestRepoName(example),
    "number",
    "should return a number"
  );
  t.equal(
    logic.longestRepoName(example),
    25,
    "longest repo of example should return 25"
  );
  t.end();
});

test("Test for oldest repo", function(t) {
  t.equal(typeof logic.oldestRepo(example), "number", "should return a number");
  t.equal(
    logic.oldestRepo(example),
    310,
    "longest repo of example should return 310"
  );
  t.end();
});

test("Test for fewest open issues", function(t) {
  t.equal(typeof logic.openIssues(example), "number", "should return a number");
  t.equal(logic.openIssues(example), 2, "function should return 2");
  t.end();
});

test("test for total number of languages", function(t) {
  t.equal(
    typeof logic.totalLanguages(example),
    "number",
    "should return a number"
  );
  t.equal(logic.totalLanguages(example), 4, "should return 4");
  t.end();
});

test("test for employability factor", function(t) {
  t.equal(typeof logic.emplFactor(example), "number", "should return a number");
  t.equal(
    logic.emplFactor(example) > 11340,
    true,
    "should return a number greater than 11340"
  );
  t.end();
});

//Write the following tests
// 1. test if each XHR request is returning an object (logic.js)
// write code here...

// 2. test if individual functions are returning the expected data from APIs (data.js)
// write code here...

// 3. test if expected winner (once parameters are set) (data.js)
// write code here...

//...feel free to add other tests that make sense along the way

var obj1 = {
  longestRepo: 35,
  oldestRepo: 189,
  totalIssuesOpen: 2,
  languages: 3,
  employabilityFactor: 9,
  name: "virtualDOMinic"
};

var obj2 = {
  longestRepo: 40,
  oldestRepo: 100,
  "Total open issues": 4,
  languages: 5,
  employabilityFactor: 5,
  name: "dupreesi"
};

var loserObj = {
  longestRepo: 1,
  oldestRepo: 1,
  "Total open issues": 224,
  languages: 0,
  employabilityFactor: -1,
  name: "developess"
};

test("Tests compare function", function(t) {
  t.equal(
    typeof logic.findWinner(obj1, obj2),
    "object",
    "should return an array or object"
  );
  t.equal(
    logic.findWinner(obj1, loserObj).winner,
    "virtualDOMinic",
    "loser should never win"
  );
  t.end();
});
