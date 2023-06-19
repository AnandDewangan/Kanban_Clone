import React from 'react'
import { BiMessageAlt } from "react-icons/bi";
import { GoFileDirectory } from "react-icons/go";

export default function Progress() {
  return (
    <div className="todo_section">
        <div className="todoHeader">
          <div className="logoTodo d-flex">
            <div className="circle orange"></div>
            <div className="todoName">On Progress</div>
            <div className="img7 img d-flex">3</div>
          </div>
        </div>
        <div className="boldLine orange"></div>
        <div className="brainstroming onProgress">
          <div className="lowHead d-flex">
            <div className="low d-flex">Low</div>
            <div className="dots d-flex">...</div>
          </div>
          <p className="brainHead">Onboarding Illustrations </p>
          <div className="onbording">
          </div>
          <div className="commentSection d-flex">
            <div className="images d-flex ml-1">
              <div className="img4 img sm"></div>
              <div className="img3 img sm"></div>
              <div className="img5 img sm"></div>
            </div>
            <div className="files d-flex">
              <BiMessageAlt />
              <div className="comments">14 comments</div>
            </div>
            <div className="files d-flex">
              <GoFileDirectory />
              <div className="comments">15 files</div>
            </div>
          </div>
        </div>
        <div className="brainstroming moodboard">
        <div className="lowHead d-flex">
            <div className="low d-flex">Low</div>
            <div className="dots d-flex">...</div>
          </div>
          <p className="brainHead">Moodboard</p>
          <div className="moodBoardImg d-flex">
            <div className="moodImg mood1"></div>
            <div className="moodImg mood2"></div>
          </div>
          <div className="commentSection d-flex">
            <div className="images d-flex ml-1">
              <div className="img2 img sm"></div>
              <div className="img1 img sm"></div>
              <div className="img3 img sm"></div>
            </div>
            <div className="files d-flex">
              <BiMessageAlt/>
              <div className="comments">7 comments</div>
            </div>
            <div className="files d-flex">
              <GoFileDirectory />
              <div className="comments">5 files</div>
            </div>
          </div>
        </div>
        <div className="brainstroming other">
          <div className="lowHead d-flex">
            <div className="high d-flex">High</div>
            <div className="dots d-flex">...</div>
          </div>
          </div>
    </div>
  )
}
