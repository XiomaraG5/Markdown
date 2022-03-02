import React from 'react'

export const Markdown = ({content,handleChange}) => {
  return (
    <div className='Markdown'>
        <textarea value={content} onChange={handleChange} id="editor" />
    </div>
  )
}
