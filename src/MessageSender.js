import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import "./MessageSender.css";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

function MessageSender() {

    const [input, setInput] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault()
    }

  return (
    <div className="messageSender">
      <div className="messageSender_top">
        <Avatar src="" />
        <form action="">
          <input
            value= {input}
            onChange = {(e)=> setInput(e.target.value)}
            className="messageSender_input"
            placeholder="What's on your mind. Single Click info ?"
          />
          <input 
           value= {imageUrl}
           onChange = {(e)=> setImageUrl(e.target.value)}
          placeholder="image URL(optional)" />
          <button type="submit">Hidden submit</button>
        </form>
      </div>
      <div className="messageSender_bottom">
        <div className="messageSender_options">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live video</h3>
        </div>
        <div className="messageSender_options">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photo/Video</h3>
        </div>
        <div className="messageSender_options">
          <InsertEmoticonIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
}

export default MessageSender;
