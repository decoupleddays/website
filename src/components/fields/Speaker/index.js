import React from 'react'

const Speaker = speaker => {
  return (
    <div className="session--speaker">
      <div className="session--speaker-info">
        <h3>{speaker.title}</h3>
        {speaker.relationships.field_company && (
          <div className="speaker-company">
            {speaker.relationships.field_company.title}
          </div>
        )}
      </div>
    </div>
  )
}

export default Speaker
