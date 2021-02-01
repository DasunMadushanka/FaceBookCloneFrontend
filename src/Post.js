import { Avatar } from "@material-ui/core";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import NearMeIcon from "@material-ui/icons/NearMe";
import { ExpandMoreOutlined } from "@material-ui/icons";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import React from "react";
import "./Post.css";

function Post() {
  return (
    <div className="post">
      <div className="post_top">
        <Avatar src="" className="post_avatar" />
      
      <div className="post_topInfo">
        <h3>Username</h3>
        <p>TimeStamp</p>
      </div>
      </div>
      <div className="post_bottom">
        <p>Message</p>
        <div className="post_image">
          <img
            src="https://scontent.fcmb1-1.fna.fbcdn.net/v/t1.0-9/84587986_1404899753011078_5552313607489847296_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=hIyFvKL70wMAX9uQfbV&_nc_ht=scontent.fcmb1-1.fna&oh=24fe83e329c367c18be3f8a2456bf97b&oe=603B1F89"
            alt=""
          />
        
        </div>
        <div className="post_options">
          <div className="post_option">
            <ThumbUpIcon />
            <p>Like</p>
          </div>
          <div className="post_option">
            <ChatBubbleOutlineIcon />
            <p>Comment</p>
          </div>
          <div className="post_option">
            <NearMeIcon />
            <p>Share</p>
          </div>
          <div className="post_option">
            <AccountCircleIcon />
            <ExpandMoreOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
