import { useState } from "react";
import "./styles.css";
import React from "react";

export default function App() {
  const topic = {
    Mahrashtrian: [
      {
        name: "Lavani",
        description: "A folk dance",
        ratings: "⭐⭐⭐⭐⭐"
      },
      {
        name: "Gondhal",
        description: "A religious dance",
        ratings: "⭐⭐⭐⭐"
      },
      {
        name: "Taarfa",
        description: "Aadivasi folk dance",
        ratings: "⭐⭐⭐"
      }
    ],
    Rajasthani: [
      {
        name: "Ghoomar",
        description: "A famous folk dance",
        ratings: "⭐⭐⭐⭐⭐"
      },
      {
        name: "Kalbeliya",
        description: "Famous folk dance for its energy",
        ratings: "⭐⭐⭐⭐"
      },
      {
        name: "Kathputli Dance",
        description: "Puppet dance",
        ratings: "⭐⭐⭐"
      }
    ],
    Freestyles: [
      {
        name: "Ganpati Dance",
        description: "All time favourite dance of everyone",
        ratings: "⭐⭐⭐⭐⭐"
      },
      {
        name: "Tollywood",
        description: "Enjoyable and Energetic dance",
        ratings: "⭐⭐⭐⭐"
      },
      {
        name: "Bollywood",
        description: "Full of expressions & drama dance",
        ratings: "⭐⭐⭐"
      }
    ]
  };

  var [topicName, setTopic] = useState("Mahrashtrian");

  function clickHandler(topicName) {
    setTopic(topicName);
  }

  console.log(Object.keys(topic));
  return (
    <div className="App">
      <h1> Nritya-List</h1>
      {Object.keys(topic).map(function (subtopic) {
        console.log(subtopic);
        return (
          <button onClick={() => clickHandler(subtopic)}>{subtopic}</button>
        );
      })}

      <hr />
      <div>
        {topic[topicName].map((itemName) => {
          return (
            <li>
              <h4>{itemName.name}</h4>
              <small>{itemName.description}</small>
              <br />
              <small>{itemName.ratings}</small>
            </li>
          );
        })}
      </div>
    </div>
  );
}
