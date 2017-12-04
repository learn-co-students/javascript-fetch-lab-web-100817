
const userName = ''
const baseApi = 'https://api.github.com/'
const fork = `gveve/javascript-fetch-lab`

function getIssues() {
  fetch(`https://api.github.com/repos/${fork}/issues`).then(res => res.json()).then (json => json.forEach(post => {`<ul> <a target="blank_" href=${json.url}>Title:${json.title} Body:${json.body}</a></ul>`}))
}

function showIssues(json) {
  document.getElementById("issues").innerHTML = (json.forEach(post => {`<ul> <a target="blank_" href=${json.url}>Title:${json.title} Body:${json.body}</a></ul>`}))
}

function createIssue() {
  let title = document.getElementById('title').value
  let body = document.getElementById('body').value

  fetch(`https://api.github.com/repos/${fork}/issues`, {
    method: 'post',
    body: JSON.stringify({title: title, body: body}),
    headers: {
      Authorization: `token ${getToken()}`
    }
  }).then(res => res.json()).then (json => showIssues(json));
  getIssues();
}

function showResults(json) {
  console.log(json);
  document.getElementById("results").innerHTML = (`<a href="${json.html_url}">${json.name}</a>`)
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'
  //use fetch to fork it!
  fetch(`${baseApi}repos/${repo}/forks`, {
    method: 'post',
    headers: {Authorization: `token ${getToken()}`}
  }).then(res => res.json()).then(json => showResults(json))
}

function getToken() {

  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  return '';
}
