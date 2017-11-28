const token = '7f5bf6809e9ffc02e64baeaf72ac925b81f8b4da';
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

function getIssues() {
  fetch( `https:/api.github.com/repos/aduranil/javascript-fetch-lab/issues/`, {
  method: 'post',
  title: document.getElementById('title').value,
  body: document.getElementById('body').value,
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(res => showIssues(res))

}

function showIssues(json) {
  JSON.stringify(json)
}

function createIssue() {
   // Use the title and body values from the provided form. After the issue is created, fetch and display a list of all issues associated with your repository on the page. Append them to a div with an id of "issues".
  fetch( `https:/api.github.com/repos/aduranil/javascript-fetch-lab/issues`, {
  method: 'post',
  body: JSON.stringify({title: document.getElementById('title').value, body: document.getElementById('body').value}),
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(res => showIssues(res))

}

function showResults(json) {
  console.log(json)
  const html = ` owner:
  <a href = "link">${json.owner.login}</a>,
  <a href = "${json.html_url}"> ${json.html_url}</a>`
  document.getElementById('results').innerHTML = html
}

function forkRepo() {


  fetch( `https:/api.github.com/repos/${repo}/forks`, {
  method: 'post',
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(res => showResults(res))

  //use fetch to fork it! Fork this repository in the forkRepo function. Display the JSON result in the results div by calling showResults. Read more about forking in the GitHub Forks API documentation. You should only be raising issues on your forked copy of the repository — not on the repo owned by learn-co-curriculum.
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // const token = '2b1480c820402c0cfdb288e5475d5340fe3de45c'
  // return token
  return ''
}
