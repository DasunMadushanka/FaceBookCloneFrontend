import React from "react";
import "./Widgets.css";

function Widgets() {
  // include facebook plugin iframe here
  return (
    <div className="widget">
      <iframe
        title="facebook-page"
       src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FDasunzMind%2F&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=616582192518420"
        width="100%"
        height="100%"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        frameborder="0"
        allowfullscreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        // style = {{ boder : "none" , overflow:"hidden"}}
      ></iframe>
    
    </div>
  );
}

export default Widgets;
