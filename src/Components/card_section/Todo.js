import React from "react";
import { GrFormAdd } from "react-icons/gr";
import { BiMessageAlt } from "react-icons/bi";
import { GoFileDirectory } from "react-icons/go";

export default function Todo() {
  return (
    <>
      <div className="todo_section">
        <div className="todoHeader d-flex">
          <div className="logoTodo d-flex">
            <div className="circle purple"></div>
            <div className="todoName">To Do</div>
            <div className="img7 img d-flex">4</div>
          </div>
          <div className="grForm d-flex">
            <GrFormAdd />
          </div>
        </div>
        <div className="boldLine purple"></div>
        <div className="brainstroming">
          <div className="lowHead d-flex">
            <div className="low d-flex">Low</div>
            <div className="dots d-flex">...</div>
          </div>
          <p className="brainHead">Brainstroming</p>
          <p>
            Brainstorming brings team members' diverse experience into play.{" "}
          </p>
          <div className="commentSection d-flex">
            <div className="images d-flex ml-1">
              <div className="img1 img sm"></div>
              <div className="img2 img sm"></div>
              <div className="img3 img sm"></div>
            </div>
            <div className="files d-flex">
              <BiMessageAlt />
              <div className="comments">12 comments</div>
            </div>
            <div className="files d-flex">
              <GoFileDirectory />
              <div className="comments">0 files</div>
            </div>
          </div>
        </div>
        <div className="researchSection">
          <div className="brainstroming research">
            <div className="lowHead d-flex">
              <div className="high extra d-flex">High</div>
              <div className="dots d-flex">...</div>
            </div>
            <p className="brainHead">Research</p>
            <p>
              User research helps you to create an optimal product for users.
            </p>
            <div className="commentSection d-flex">
              <div className="images d-flex ml-1">
                <div className="img4 img sm"></div>
                <div className="img1 img sm"></div>
              </div>
              <div className="files d-flex">
                <BiMessageAlt />
                <div className="comments">10 comments</div>
              </div>
              <div className="files d-flex">
                <GoFileDirectory />
                <div className="comments">3 files</div>
              </div>
            </div>
          </div>
        </div>
        <div className="brainstroming wireFrames">
          <div className="lowHead d-flex">
            <div className="high d-flex">High</div>
            <div className="dots d-flex">...</div>
          </div>
          <p className="brainHead">Wireframes</p>
          <p>
          Low fidelity wireframes include the most basic content and visuals.
          </p>
          <div className="commentSection d-flex">
            <div className="images d-flex ml-1">
              <div className="img5 img sm"></div>
              <div className="img2 img sm"></div>
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
      </div>
    </>
  );
}
