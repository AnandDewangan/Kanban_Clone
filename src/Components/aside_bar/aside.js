import React from 'react'
import {MdKeyboardDoubleArrowLeft} from 'react-icons/md'
import {HiOutlineSquares2X2} from 'react-icons/hi2'
import {BiMessageAlt} from 'react-icons/bi'
import {FaTasks} from 'react-icons/fa'
import {LuUsers} from 'react-icons/lu'
import {IoSettingsOutline} from 'react-icons/io5'
import {CgAddR} from 'react-icons/cg'

export default function aside() {
  return (
    <>
        <div className="sidebarContainer abs">
            <div className="asideHeader">
                <div className="logo">
                    <div className="logo1 c abs"></div>
                    <div className="logo2 c abs"></div>
                    <div className="logo3 c abs"></div>
                </div>
                <div className="logoName">
                    <p>Project M.</p>
                </div>
                <div className="closeMenu">
                    <MdKeyboardDoubleArrowLeft/>
                </div>
            </div>
            <hr />
            <div className="asideMenuSection">
                <div className="menu">
                    <HiOutlineSquares2X2 />
                    <label className='menuName'>Home</label>
                </div>
                <div className="menu">
                    <BiMessageAlt />
                    <label className='menuName'>Message</label>
                </div>
                <div className="menu">
                    <FaTasks />
                    <label className='menuName'>Tasks</label>
                </div>
                <div className="menu">
                    <LuUsers />
                    <label className='menuName'>Members</label>
                </div>
                <div className="menu">
                    <IoSettingsOutline />
                    <label className='menuName'>Settings</label>
                </div>
            </div>
            <hr />
            <div className="myProject">
                <div className="myProjectName">
                    <label className='name'>My Projects</label>
                    <CgAddR />
                </div>
                <div className="design">
                    <div className="circle green"></div>
                    <label>Mobile App</label>
                </div>
                <div className="design">
                    <div className="circle orange"></div>
                    <label>Website Redesign</label>
                </div>
                <div className="design">
                    <div className="circle pink"></div>
                    <label>Design System</label>
                </div>
                <div className="design">
                    <div className="circle lightblue"></div>
                    <label>Wireframes</label>
                </div>
            </div>
        </div>
    </>
  )
}
