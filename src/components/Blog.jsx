import React from "react";

const Blog = () => {
  return (
    <div>
      <h2>1. The differences between uncontrolled and controlled components.</h2>
      <p>Uncontrolled components in React do not rely on React state for their values, whereas controlled components are controlled by React state.</p>
     <br />



      <h2>2.How to validate React props using PropTypes</h2>
      <p>To validate React props using PropTypes, you define the expected prop types for a component using the PropTypes library, allowing you to catch type errors during development.</p>
      <br />

      <h2> 3.the difference between nodejs and express js.</h2>
      <p>Node.js is a runtime environment for executing JavaScript outside the browser, while Express.js is a web application framework for building web applications and APIs using Node js</p>
<br />
      <h2>4.What is a custom hook, and why will you create a custom hook?</h2>
      <p>A custom hook in React is a reusable function that encapsulates logic for a specific task, promoting code reusability and maintainability. You create one when you want to share stateful logic between multiple components.</p>
    </div>

  );
};

export default Blog;
