import React, { Component } from 'react';

import Icon from '../icon';
import Arrow from '../arrow';

class LibraryCourse extends Component {
    render() {
        return (
            <div className="library-course">
               <div className="library-course__title-arrow">
                   <label className="library-course__title">Problem Solving</label>
                   { Icon('fas fa-check', 'library-course__icon') }
               </div>
                <Arrow className="library-course__arrow"/>
                {/* action button component*/}
                <div className="library-course__description">
                    <label>Course Description</label>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                </div>
            </div>
        )
    }
}

export default LibraryCourse;