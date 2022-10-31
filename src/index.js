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
    textDecoration: "none",
    display: "flex",
    justifyContent: "center",
    margin: "10px"
  };
  const profile_Container = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    border: "2px solid red"
  }
  const profile_name = {
    fontWeight: "900",
    textAlign: "center",
    fontSize: "26px"
  }
  const profile_pic = {
    width: "100px",
    alignSelf: "center"
  }
  const myUrl =  {
    twitter: "https://twitter.com/hajji_rahmon",
    zuri_team: "https://training.zuri.team/",
    books: "http://books.zuri.team/",
    book_python: "https://books.zuri.team/python-for-beginners?ref_id=abdul-rahmon",
    pitch: "https://background.zuri.team",
    book_design: "https://books.zuri.team/design-rules",
  
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
      <div style= {profile_Container}>
      <img 
        alt="Your Profie Pic"
        src ={MyImage}
        id = "profile_img"
        style = {profile_pic}
         
      />
      <p style = {profile_name}> Annette Black </p>
      </div>
      <a style={myStyle} href ={myUrl.twitter} id ={my_id.twitter}>Twitter Link</a>
      <a style={myStyle} href ={myUrl.zuri_team} id ={my_id.btn_zuri}>Zuri Team</a>
      <a style={myStyle} href ={myUrl.books} id ={my_id.books} title="This is where you find Books about Design and Coding">Zuri Books</a>
      <a style={myStyle} href ={myUrl.book_python} id ={my_id.book_python} title="Get your Python Books Here">Python Books</a>
      <a style={myStyle} href ={myUrl.pitch} id ={my_id.pitch} title="Sell your self out here to possible suitors and collaborators">Background Check for Coders</a>
      <a style={myStyle} href ={myUrl.book_design} id ={my_id.book_design} title="Get free Design Books compiled by Zuri">Design Books</a>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);