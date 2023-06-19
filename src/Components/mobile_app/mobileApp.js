import React from "react";
import { GrFormEdit } from "react-icons/gr";
import { IoLink } from "react-icons/io5";
import { GrFormAdd, GrFilter } from "react-icons/gr";
import { AiOutlineDown } from "react-icons/ai";
import { SlCalender } from "react-icons/sl";
import { LuUsers } from "react-icons/lu";
import { MdSplitscreen } from "react-icons/md";
import { HiOutlineSquares2X2 } from "react-icons/hi2";
import Todo from "../card_section/Todo";
import Progress from "../card_section/Progress";
import Done from "../card_section/Done";

export default function mobileApp() {
  return (
    <>
      <div className="container d-flex mobileSection wrap_sm">
        <div className="mobileHeading d-flex">
          <div className="mobileName">Mobile App</div>
          <div className="mobileIcons d-flex absright">
            <div className="d-flex">
              <GrFormEdit />
            </div>
            <div className="d-flex">
              <IoLink />
            </div>
          </div>
        </div>
        <div className="inviteSection d-flex">
          <div className="add d-flex absleft">
            <GrFormAdd />
          </div>
          <div className="invite absleft">Invite</div>
          <div className="images d-flex wrap_md absright">
            <div className="img1 img"></div>
            <div className="img2 img"></div>
            <div className="img3 img"></div>
            <div className="img4 img"></div>
            <div className="img5 img"></div>
            <div className="img6 img d-flex">+2</div>
          </div>
        </div>
      </div>
      <div className="container d-flex sortingSection">
        <div className="leftSection d-flex wrap_sm">
          <div className="filter sqr d-flex">
            <GrFilter />
            <div>Filter</div>
            <AiOutlineDown />
          </div>
          <div className="today sqr d-flex">
            <SlCalender />
            <div>Today</div>
            <AiOutlineDown />
          </div>
        </div>
        <div className="rightSection d-flex ">
          <div className="share sqr d-flex">
            <LuUsers />
            <div>Share</div>
          </div>
          <div className="sort d-flex">
            <div className="horizonatalLine">|</div>
            <div className="twoSection icon d-flex">
              <MdSplitscreen />
            </div>
            <div className="fourSection">
              <HiOutlineSquares2X2 />
            </div>
          </div>
        </div>
      </div>
      <div className="container d-flex gap-3 center wrap_md">
        <Todo />
        <Progress />
        <Done />
      </div>
    </>
  );
}
