import React from 'react'

const Speaker = speaker => {
  return (
    <div className="session--speaker">
      {speaker.r.field_photo && (
        <div className="session--speaker-image">
          <img
            src={speaker.r.field_photo.localFile.childImageSharp.fixed.src}
            alt={speaker.title}
          />
        </div>
      )}

      <div className="session--speaker-info">
        <h3>{speaker.title}</h3>
        {speaker.r.field_company && (
          <div className="speaker-company">{speaker.r.field_company.title}</div>
        )}
      </div>
    </div>
  )
}

export default Speaker
