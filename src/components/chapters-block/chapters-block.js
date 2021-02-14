import React, { Component } from 'react';
import LessonList from '../lessons-list/lessons-list';

import chaptersData from './chapters-arr';
console.log(chaptersData);

// const ChapterBlock = () => {

    // chaptersList = () => {

    // }
class ChapterBlock extends Component { 
    state = {
        visibility: true
    }

    elements() {
        return chaptersData.map(chapter => {
            return (
                <div key={chapter.id_chapter}
                    className="card">
                    <div className="card-header">
                        <h2 className="mb-0">
                            <button 
                            className="btn btn-link btn-block text-left" 
                            type="button" 
                            data-toggle="collapse" 
                            data-target={`#collapse${chapter.id_chapter}`} 
                            aria-expanded="false" 
                            aria-controls={`collapse${chapter.id_chapter}`}>
                            Глава {chapter.id_chapter}. {chapter.title_chapter}
                            </button>
                        </h2>
                    </div>

                    <div 
                        id={`collapse${chapter.id_chapter}`}
                        className="collapse" 
                        aria-labelledby={chapter.id_chapter}
                        data-parent="#accordion">

                        <LessonList lessons={chapter.lessons}
                            onToggleVis={ this.toggleChaptersVisibility }/>

                    </div>
                </div>
            )
        })
    }

    toggleChaptersVisibility = () => {
        console.log('hide');
        this.setState(({visibility}) => {
            return {
                visibility: !visibility
            }
        })
    }
    render() {
        let classNames = 'accordion';
        if (!this.state.visibility) {
            classNames += ' d-none';
        }
        return (
            <div className={classNames} id="accordion">
                {this.elements()}
            </div>
        )
    }

};

export default ChapterBlock;