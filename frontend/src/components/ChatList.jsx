import React from 'react'
import { RiChatNewFill } from "react-icons/ri";
import { CiMenuKebab } from "react-icons/ci";
import { userData, messageData } from '../assets/assets';
import { BiSearchAlt2 } from "react-icons/bi";

function ChatSearch() {
    return <div>
        <div className='flex justify-between p-4 items-center'>
            <h2 className='font-bold text-xl'>Chats</h2>
            <div className='flex space-x-2'>
                <RiChatNewFill className='text-2xl text-slate-600' />
                <CiMenuKebab className='text-2xl text-slate-600' />
            </div>
        </div>
        <form className="relative">
      <input
        type="text"
        placeholder="Search"
        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none"
      />
      <BiSearchAlt2 className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
    </form>
    </div>
}

function UserList({ data }) {
    console.log(data);

    return <div>
        <ol >
            {
                data.map((item, index) => {
                    return <li key={index} className=' px-4 py-2 flex justify-between place-items-center ' >
                        <img src={item.profile_picture} alt="" className='w-18 rounded-full' />
                        <div >
                            <p>{item.username}</p>
                            <p>{item.online_status}</p>
                        </div>
                    </li>
                })
            }
        </ol>
    </div>
}

const ChatList = () => {
    return (
        <div className='basis-[30%] bg-white' >
            <ChatSearch />
            <UserList data={userData} />
        </div>
    )
}

export default ChatList


