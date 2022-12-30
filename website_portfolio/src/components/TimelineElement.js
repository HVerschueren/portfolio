import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import WorkIcon from '@mui/icons-material/Work';
import { borderTop, color } from '@mui/system';
function TimelineElement(id) {
  return (
    <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#fff', color: '#000', borderTop: '7px solid '+id.color }}
          contentArrowStyle={{ borderRight: '7px solid '+id.color }}
          date={id.date}
          iconStyle={{ background: id.color, color: '#fff'}}
          icon={id.icon}
        >
          <h3 className="vertical-timeline-element-title">{id.title}</h3>
          <h4 className="vertical-timeline-element-subtitle">{id.place}</h4>
          <p>
            {id.explanation}
          </p>
        </VerticalTimelineElement>
  )
}

export default TimelineElement