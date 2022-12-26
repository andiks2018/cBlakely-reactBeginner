import React, { useEffect, useState } from "react";
import "./App.css";
import ContactCard from "./ContactCard";

const App = () => {

  // const contacts = [
  //   {
  //     avatarUrl : "https://via.placeholder.com/150",
  //     name : "andi",
  //     email : "andi@andi.com",
  //     age : 36
  //   },
  //   {
  //     avatarUrl : "https://via.placeholder.com/150",
  //     name : "kakak",
  //     email : "kakak@kakak.com",
  //     age : 10
  //   }, 
  //   {
  //     avatarUrl : "https://via.placeholder.com/150",
  //     name : "aan",
  //     email : "aan@aan.com",
  //     age : 8
  //   }
  // ]

  const [results, setResults]=useState([])
  
  useEffect(()=>{
    fetch("https://randomuser.me/api/?results=3")
    .then(response=>response.json())
    .then(data=>{
      console.log(data)
      setResults(data.results)
    })
  }, [])

  return (
    <div>

        {results.map((result, index)=>{
        return(
          <ContactCard key={index}
          avatarUrl = {result.picture.large}
          name = {result.name.first}
          email = {result.email}
          age = {result.dob.age}
        />
        )
      })}


      {/* {contacts.map((contact, index)=>{
        return(
          <ContactCard key={index}
          avatarUrl = {contact.avatarUrl}
          name = {contact.name}
          email = {contact.email}
          age = {contact.age}
        />
        )
      })} */}


      {/* <ContactCard 
        avatarUrl = "https://via.placeholder.com/150"
        name = "andi"
        email = "andi@andi.com"
        age = {36}
      />
      <ContactCard 
      avatarUrl = "https://via.placeholder.com/150"
      name = "kakak"
      email = "kakak@kakak.com"
      age = {10}
      />
      <ContactCard 
      avatarUrl = "https://via.placeholder.com/150"
      name = "aan"
      email = "aan@aan.com"
      age = {8}
      /> */}
    </div>
  );
};
export default App;
