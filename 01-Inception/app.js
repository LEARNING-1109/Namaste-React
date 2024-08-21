/* 
This function createReactElement takes three arguments:

type: The type of the React element (e.g., "h1" for heading level 1).
props: An object containing the attributes and their values for the element.
children: The content or children of the element.

📝 React.createElement(type, props, children) {    */
// const heading1 = React.createElement("h1", {
//     className: "heading-1",
//     id: 'first-heading',
//     xyz: 'abc'
// }, "Hello World from React app");

// console.log(heading1);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading1);

// ------------- 2. Add NESTED Element to React -------------
/*
<div id='parent'>
<div id="child">
<h1>I a Heading Level 1</h1>
</div>
</div>
*/

// ----- STEP 2.1 -----
// const parent = React.createElement('div', {}, "I am inner Text.");
// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(parent);


// STEP 2.2
// const parent = React.createElement('div', { id: 'parent' },
//     React.createElement('div', { id: 'children' },
//         React.createElement('h1', {}, "I am Heading Level 1")
//     )
// );
// const root = ReactDOM.createRoot(document.querySelector('#root'));
// root.render(parent);

// ------------- 3. Add SIBLINGS Element to React -------------
/*
<div id='parent'>
    <div id="child-1">
        <h1>I a Heading Level 1</h1>
    </div>
    <div id="child-2">
        <h1>I a Heading Level 2</h1>
    </div>
</div>
*/
const parent = React.createElement('div', { id: 'parent' },
    [
        React.createElement('div', { id: 'children-1' },
            React.createElement('h1', {}, 'I am Heading 1')
        ),
        React.createElement('div', { id: 'children-2' },
            React.createElement('h1', {}, 'I am Heading 2')
        )
    ]
);

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(parent)

