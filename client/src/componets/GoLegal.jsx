import React from 'react'

const GoLegal = () => {
  return (
    <div className='flex.flex-col.gap-4'>
        

        {/* client message */}
        <div className='border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]'>
            <pre className='whitespace-pre-wrap'>
               <span>hello my name is pratibha </span>
            </pre>
        </div>

        {/* AI message */}
        <div className={'border-[#999999] break-words border-2 rounded-xl self-end px-3 py-3 max-w-[80%]'}>
            <pre>
               <span>hello my name is sunita </span>
            </pre>
        </div>
    </div>

  )
}

export default GoLegal
