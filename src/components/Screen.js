import React from 'react'
import {marked} from  "marked"

export const Screen = ({content}) => {

const renderer = new marked.Renderer();
        renderer.link = function (href, text) {
        return `<a target="_blank" href="${href}">${text}</a>`;
        };
    
  return (
    <div id="preview" 
    dangerouslySetInnerHTML={{
      __html: marked(content, { renderer: renderer })
    }}
  />
  
  )
}
