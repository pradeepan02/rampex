import React from "react";

const Home = (props) => {
  return (
    <div>
      <h1>
        This is Home page {props.data} {props.hello}
      </h1>
      <h1>Task1</h1>
      <p>How camelcase css is converted into normal css?</p>
      <p>
        when the react component is rendered 2 times one in react rendering and
        other in dom,where it automatically converts into the vanilla
      </p>
      <h2>Task2</h2>
      <p>How the components are converted into html tags?</p>
      <p>
        when react is rendered it also renderd in dom so it converts the
        component into html tags
      </p>
    </div>
  );
};

export default Home;
