import React from 'react';
import ReactDOM from 'react-dom/client';

// react element
// TODO Steps: React.createElement => ReactElement(JS Object) => HTMLElement(render)
const heading = React.createElement('h2', { id: "heading-1", className: 'my-btn' }, "Learn React JS from the Best!");

// react functional component
// const heading2  = () => React.createElement('h2', { id: "heading-1", className: 'my-btn' }, "Learn React JS from the Best!");

/*
    JSX -> is not HTML in JS
    JSX -> is a HTML like or XML like syntax
    ! this RHS side code is not the pure javascript
    TODO: reason-> JSX(transpiled before it reaches the JS Engine) -> Parcel -> Babel
*/
// TODO Steps: JSX => React.createElement => ReactElement(JS Object) => HTMLElement(render
// const jsxHeading = <h1>Welcome to JSX(JavaScript XML)</h1>
// const jsxHeading = (<h1>Welcome to JSX(JavaScript XML)</h1>)
const jsxHeading = (<h1 className='my-txt'>
    Welcome to JSX(JavaScript XML)
</h1>)
console.log(jsxHeading)
console.log(heading);

// 2. React functional component
const SubHeadingComponent = () => {
    return <h2 className='my-txt'>SubHeading & You will learn Component Composition.</h2>
}
// TODO: OR
// function SubHeadingComponent() {
//     return (
//         <h2 className='my-txt'>SubHeading & You will learn Component Composition.</h2>
//     )
// }

// const HeadingComponent = () => <h1 className='my-txt'>Learn : React Funtional Componets</h1>;
// const HeadingComponent = () => {
//     return <h1 className='my-txt'>Learn : React Funtional Componets</h1>;
// }

let mySpan = <span>span React Element</span>

// Componet Composition
const HeadingComponent = () => {
    return (
        <div>
            <h1 className='my-txt'>Learn : React Funtional Componets</h1>
            <SubHeadingComponent />
            {45+90}
            {console.log("printing from jsx")}
        </div>
    )
}

const root = ReactDOM.createRoot(document.querySelector('#root'));
console.log(root);

// rendering
// root.render(heading);
// root.render(jsxHeading);

// 2.2 rendering react functional component
// ! root.render(HeadingComponent); ⚠️ Warning: Functions are not valid as a React child
// root.render(HeadingComponent())
// root.render(<HeadingComponent></HeadingComponent>)
root.render(<HeadingComponent />)
