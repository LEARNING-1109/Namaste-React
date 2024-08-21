Notes

npm i

npm i -D parcel

npm i react
npm i react-dom


npm parcel index.html

- Remove react cdn link now
- Add type="module" to fix bug, <script type="module" src="app.js" ></script>

npm parcel build index.html
-> must remove "main": "app.js", from package.json

"browserlists":[
    "last 2 versions"
]