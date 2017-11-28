function getIssues() {
  const repo = 'dakotalillie/javascript-fetch-lab';
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  const issues = document.getElementById('issues');
  json.forEach(issue => {
    item.innerHTML = `<li>Title: ${issue.title}</li><li>Body: ${issue.body}</li>`;
    issues.appendChild(item);
  });
}

function createIssue() {
  const title = document.getElementById('title');
  const body = document.getElementById('body');
  const repo = 'dakotalillie/javascript-fetch-lab';
  const postData = {
    title: title.value,
    body: body.value,
    assignees: ["dakotalillie"]
  };
  fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData)
  }).then(res => res.json())
  .then(json => getIssues());
}

function showResults(json) {
  const resultsList = `
  <ul>
    <li>Name: ${json.name}</li>
    <li>Has Issues: ${json.has_issues}</li>
    <li><a href=${json.html_url}>Link</a></li>
  </ul>
  `
  const result = document.getElementById('results');
  result.innerHTML = resultsList;
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: "post",
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json())
  .then(json => showResults(json));
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
