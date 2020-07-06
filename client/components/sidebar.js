import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addChanell, setStatus } from '../redux/reducers/infobase'

const Sidebar = () => {
  const dispatch = useDispatch()
  const chanells = useSelector((s) => s.infobase.chanells)
  const [value, setValue] = useState()

  return (
    <div className="sidebar">
      <div className="sidebar-conteiner flex w-full border shadow">
        <div className="bg-purple-900 text-purple-400 w-full pb-6 md:block">
          <h1 className="text-white text-xl font-bold mb-2 px-2 mt-3 font-sans flex items-center justify-between">
            <span>Slack</span>
            <svg
              className="small-bell-icon h-6 w-6 text-purple-lightest fill-current"
              viewBox="0 0 32 32"
            >
              <g id="surface1">
                <path d="M 16 3 C 14.894531 3 14 3.894531 14 5 C 14 5.085938 14.019531 5.167969 14.03125 5.25 C 10.574219 6.132813 8 9.273438 8 13 L 8 22 C 8 22.566406 7.566406 23 7 23 L 6 23 L 6 25 L 13.1875 25 C 13.074219 25.316406 13 25.648438 13 26 C 13 27.644531 14.355469 29 16 29 C 17.644531 29 19 27.644531 19 26 C 19 25.648438 18.925781 25.316406 18.8125 25 L 26 25 L 26 23 L 25 23 C 24.433594 23 24 22.566406 24 22 L 24 13.28125 C 24 9.523438 21.488281 6.171875 17.96875 5.25 C 17.980469 5.167969 18 5.085938 18 5 C 18 3.894531 17.105469 3 16 3 Z M 15.5625 7 C 15.707031 6.988281 15.851563 7 16 7 C 16.0625 7 16.125 7 16.1875 7 C 19.453125 7.097656 22 9.960938 22 13.28125 L 22 22 C 22 22.351563 22.074219 22.683594 22.1875 23 L 9.8125 23 C 9.925781 22.683594 10 22.351563 10 22 L 10 13 C 10 9.824219 12.445313 7.226563 15.5625 7 Z M 16 25 C 16.5625 25 17 25.4375 17 26 C 17 26.5625 16.5625 27 16 27 C 15.4375 27 15 26.5625 15 26 C 15 25.4375 15.4375 25 16 25 Z " />
              </g>
            </svg>
          </h1>
          <div className="flex items-center mb-4 px-4">
            <span className="rounded-full block w-2 h-2 mr-2 bg-green-400" />
            <span className="text-purple-300">Olivia</span>
          </div>

          <div className="mb-2 px-2 font-sans">Channels:</div>
          {Object.keys(chanells).map((it) => {
            return (
              <div
                className="bg-teal-500 py-1px px-4 text-white font-semibold text-md mb-px"
                key={it}
              >
                <button
                  type="button"
                  onClick={() => {
                    dispatch(setStatus(it))
                  }}
                >
                  <span className="pr-1 text-gray-300">#</span>
                  {it}
                </button>
              </div>
            )
          })}

          <div className="input-container flex items-center mt-1 mb-4">
            <input
              className="px-2 text-black border border-gray-800 w-full"
              type="text"
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button
              className="border border-gray-800 px-2 py-1px bg-purple-700 hover:border-purple-700 text-purple-300 hover:bg-purple-500 hover:text-white"
              type="button"
              onClick={() => {
                dispatch(addChanell(value))
                setValue('')
              }}
            >
              add
            </button>
          </div>
          <div className="mb-2 px-2 font-sans ">Direct Messages:</div>

          <div className="flex items-center mb-3 px-4">
            <span className="rounded-full block w-2 h-2 mr-2 bg-green-400" />
            <span className="text-purple-100">
              Olivia Dunham <i className="text-grey text-sm">(me)</i>
            </span>
          </div>

          <div className="flex items-center mb-3 px-4">
            <span className="rounded-full block w-2 h-2 mr-2 bg-green-400" />
            <span className="text-purple-100">Adam Bishop</span>
          </div>

          <div className="flex items-center px-4 mb-3">
            <span className="border rounded-full block w-2 h-2 mr-2" />
            <span className="text-purple-100">killgt</span>
          </div>
        </div>
      </div>
    </div>
  )
}

Sidebar.propTypes = {}

export default Sidebar
