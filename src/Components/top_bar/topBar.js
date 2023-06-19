import React from 'react'
import {FaSearch} from 'react-icons/fa'
import {SlCalender} from 'react-icons/sl'
import {RiQuestionnaireFill} from 'react-icons/ri'
import {HiOutlineBellAlert} from 'react-icons/hi2'
import {AiOutlineDown} from 'react-icons/ai'
import {MdKeyboardDoubleArrowRight} from 'react-icons/md'

export default function topBar() {
  return (
    <>
        <div className="container d-flex topbarMenu wrap_md">
            <div className="searchBox d-flex center">
              <div className="abs rightarrow">
              <MdKeyboardDoubleArrowRight />
              </div>
                <FaSearch/>
                <input type="text" placeholder='Search for anything...' />
            </div>
            <div className="authorSection d-flex">
              <div className="iconsSection d-flex">
                <SlCalender />
                <RiQuestionnaireFill />
                <HiOutlineBellAlert />
              </div>
              <div className="profileSection d-flex">
                <div className="nameSection">
                  <div className="name">
                    Anand Dewangan
                  </div>
                  <div className="address">
                    C.G. India
                  </div>
                </div>
                <div className="imageSection"> 
                </div>
                <div className="arrowDown">
                <AiOutlineDown />
              </div>
              </div>
            </div>
        </div>
        <hr />
    </>
  )
}
