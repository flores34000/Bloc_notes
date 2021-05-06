import React from 'react'
export default function NoteDisplay(props) {
    
    var showdown  = require('showdown'),
    converter = new showdown.Converter(),
    title      = props.inputTitle,
    content      = props.inputContent,
    html      = converter.makeHtml(title,content);

    function createMarkupTitle(item) {
        return {__html: converter.makeHtml(item)};
      }
      
      function MyComponent1() {
        return <h1 className="text-danger" dangerouslySetInnerHTML={createMarkupTitle(title)} />  ;
      }
      function MyComponent2() {
          return <div dangerouslySetInnerHTML={createMarkupTitle(content)} />
      }


      return (
          <div className="m-4">
              
              {MyComponent1()}
              {MyComponent2()}
              
          </div>
      )
  }



