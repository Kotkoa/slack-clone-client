import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMessage } from '../redux/reducers/infobase'

const Chat = () => {

  const dispatch = useDispatch()
  const status = useSelector((s) => s.infobase.status)
  const [value, setValue] = useState()


  return (
    <div className="w-full border shadow">
      <div className="flex">
        <div className="w-full flex flex-col">
          <div className="border-b flex px-6 py-2 items-center">
            <div className="flex flex-col">
              <h3 className="text-grey-darkest text-md mb-1 font-extrabold">#{status}</h3>
              <div className="text-grey font-thin text-sm">
                Chit-chattin about ugly HTML and mixing of concerns.
              </div>
            </div>
            <div className="ml-auto hidden md:block">
              <input type="search" placeholder="Search" className="border border-grey rounded-lg p-2" />
            </div>
          </div>
          <div className="px-6 py-4 flex-1 overflow-scroll-x">
            <div className="flex items-start mb-4">
              <div className="flex flex-col">
                <div className="flex items-end">
                  <span className="font-bold text-md mr-2 font-sans">killgt</span>
                  <span className="text-grey text-xs font-light">11:46</span>
                </div>
                <p className="font-light text-md text-grey-darkest pt-1">The slack from the other side.</p>
              </div>
            </div>
          </div>
          <div className="flex m-6 rounded-lg border-2 border-grey overflow-hidden">
            <span className="text-3xl text-grey px-3 border-r-2 border-grey">+</span>
            <input
              type="text"
              className="w-full px-4"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={`Message to #${status}`}
            />
            <button
              type="button"
              onClick={(() => dispatch(addMessage(status, 'username', value, +new Date)))}>
              ok
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

Chat.propTypes = {}

export default Chat
