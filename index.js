function getIssues() {
  const repo = "repos/slin12/javascript-fetch-lab/issues"
  fetch(`https://api.github.com/${repo}`)
    .then(req => req.json()).then(json => showIssues(json))
}

function showIssues(json) {
  let issuesDiv = document.querySelector('#issues')
  let issuesUl = document.createElement('ul')
  json.map(function(issue) {
    issuesUl.innerHTML += `<li>${issue.title} - ${issue.body}</li>`
  })
  issuesDiv.append(issuesUl);
}

function createIssue() {
  const repo = "/repos/slin12/javascript-fetch-lab/issues"
  let issueTitle = document.querySelector('#title').value
  let issueText = document.querySelector('#body').value
  const postData = {
  title: issueTitle,
  body: issueText
  };

  fetch(`https://api.github.com${repo}`, {
    headers: {Authorization: `token ${getToken()}`
    },
    body: JSON.stringify(postData),
    method: 'post'
  })
  getIssues()

}

function showResults(json) {
  let resultsDiv = document.querySelector('#results');
  console.log(json);
  let p = document.createElement('p');
  p.innerHTML = `<p>${json.name}<p> <br> <a href="https://github.com/slin12/javascript-fetch-lab">click me</a>`;
  resultsDiv.append(p);
}

function forkRepo() {
    const repo = 'learn-co-curriculum/javascript-fetch-lab'
    //use fetch to fork it!
    fetch(`https://api.github.com/repos/${repo}/forks`, {
      headers: {
        Authorization: `token ${getToken()}`
      },
      method: "post"
    })
    .then (res => res.json())
    .then (json => showResults(json));

}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return ''
}
