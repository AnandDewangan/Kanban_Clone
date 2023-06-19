import React from 'react'
import { BiMessageAlt } from "react-icons/bi";
import { GoFileDirectory } from "react-icons/go";

export default function Done() {
  return (
    <div className="todo_section">
        <div className="todoHeader">
          <div className="logoTodo d-flex">
            <div className="circle green"></div>
            <div className="todoName">Done</div>
            <div className="img7 img d-flex">2</div>
          </div>
        </div>
        <div className="boldLine green"></div>
        <div className="brainstroming onProgress done">
          <div className="lowHead d-flex">
            <div className="completed d-flex">Completed</div>
            <div className="dots d-flex">...</div>
          </div>
          <p className="brainHead">Mobile App Design</p>
          <div className="mobileDesign d-flex">
            <div className="mb1 mbDesign"></div>
            <div className="mb2 mbDesign"></div>
            <div className="mb3 mbDesign"></div>
          </div>
          <div className="commentSection d-flex">
            <div className="images d-flex ml-1">
              <div className="img1 img sm"></div>
              <div className="img5 img sm"></div>
            </div>
            <div className="files d-flex">
              <BiMessageAlt />
              <div className="comments">12 comments</div>
            </div>
            <div className="files d-flex">
              <GoFileDirectory />
              <div className="comments">15 files</div>
            </div>
          </div>
        </div>
        <div className="brainstroming moodboard designSystem">
        <div className="lowHead d-flex">
            <div className="completed d-flex">Completed</div>
            <div className="dots d-flex">...</div>
          </div>
          <p className="brainHead">Design System</p>
          <p>It just needs to adapt the UI from what you did before </p>
          <div className="commentSection d-flex">
            <div className="images d-flex ml-1">
              <div className="img2 img sm"></div>
              <div className="img1 img sm"></div>
              <div className="img3 img sm"></div>
            </div>
            <div className="files d-flex">
              <BiMessageAlt/>
              <div className="comments">12 comments</div>
            </div>
            <div className="files d-flex">
              <GoFileDirectory />
              <div className="comments">15 files</div>
            </div>
          </div>
        </div>
        <div className="brainstroming otherCompleted">
          <div className="lowHead d-flex">
            <div className="completed d-flex">Completed</div>
            <div className="dots d-flex">...</div>
          </div>
          </div>
    </div>
  )
}