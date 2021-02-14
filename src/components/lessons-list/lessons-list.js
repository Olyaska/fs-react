import React from 'react';

const LessonList = ({ lessons, onToggleVis }) => {

    const elements = lessons.map(lesson => {
        return (
            <tr key={lesson.id_lesson}>
                <td>
                    <span
                    onClick={onToggleVis}>
                    {lesson.title_lesson}</span>
                </td>
                <td>
                    {lesson.status_l}
                </td>
            </tr>
        )
    })

    return (
        <div className="card-body">
            <table className="table">
                <tbody>
                {elements}
                </tbody>
            </table>
        </div>
    )
}

export default LessonList;
