import React from "react";
import Card from "../Card";

const Home = () => {
  return (
    <div>
      Home
      <div className="flex flex-wrap justify-center gap-4 p-4">
        <Card
          image="https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dW5pdmVyc2V8ZW58MHx8MHx8fDA%3D"
          title="Sample Card"
          description="This is a simple description."
        />
      </div>
    </div>
  );
};

export default Home;
