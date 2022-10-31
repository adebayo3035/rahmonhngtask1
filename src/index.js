import React from 'react';
import ReactDOM from 'react-dom/client';
import MyImage from './profile_picture.jpg';

const Header = () => {
  const myStyle = {
    color: "black",
    backgroundColor: "#B2BEB5",
    padding: "10px",
    fontFamily: "Sans-Serif",
    textAlign: "center",
    // width: "100%",
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    margin: "10px"
  };
  const profile_picture = {
    display: "flex",
    justifyContent: "center",
    border: "2px solid red"
  }
  const myUrl =  {
    twitter: "https://twitter.com/hajji_rahmon",
    zuri_team: "https://training.zuri.team/",
    books: "http://books.zuri.team/",
    book_python: "https://books.zuri.team/python-for-beginners?ref_id=",
    pitch: "https://twitter.com/hajji_rahmon",
    book_design: "https://twitter.com/hajji_rahmon",
  
  };
  const my_id ={
    btn_zuri: "btn_zuri",
    twitter: "twitter",
    books: "books",
    book_python: "book_python",
    pitch: "pitch",
    book_design: "book_design"
  }
 
  return (
    <>
      <div style= {profile_picture}>
      <img 
        alt="Your Profie Pic"
        src ={MyImage} 
         
      />
      </div>
      <a style={myStyle} href ={myUrl.twitter} id ={my_id.twitter}>Twitter Link</a>
      <a style={myStyle} href ={myUrl.zuri_team} id ={my_id.btn_zuri}>Zuri Team</a>
      <a style={myStyle} href ={myUrl.books} id ={my_id.books} title="This is where you find Books about Design and Coding">Zuri Books</a>
      <a style={myStyle} href ={myUrl.book_python} id ={my_id.book_python}>Python Books</a>
      <a style={myStyle} href ={myUrl.pitch} id ={my_id.pitch}>Background Check for Coders</a>
      <a style={myStyle} href ={myUrl.book_design} id ={my_id.book_design}>Design Books</a>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);