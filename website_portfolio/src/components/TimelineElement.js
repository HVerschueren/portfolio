import React from 'react'
import {VerticalTimelineElement }  from 'react-vertical-timeline-component';

function TimelineElement(id) {
  return (
    <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000', borderTop: '7px solid '+id.color, boxShadow:'5px 5px 10px grey' }}
          contentArrowStyle={{ borderRight: '7px solid '+id.color }}
          date={id.date}
          iconStyle={{ background: id.color, color: '#fff'}}
          icon={id.icon}
        >
          <div className='timelineTextDiv'>
            <h3 className="vertical-timeline-element-title">{id.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">{id.place}</h4>
            <p>
              {id.explanation}
            </p>
          </div>
          
        </VerticalTimelineElement>
  )
}

export default TimelineElement