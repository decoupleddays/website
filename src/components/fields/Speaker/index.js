import React from 'react'

const Speaker = (speaker) => (
  <div className="session--speaker">
    {speaker.relationships.field_photo && (
      <div className="session--speaker-image">
        <img
          src={speaker.relationships.field_photo.localFile.childImageSharp.sizes.src}
          alt={speaker.title}
        />
      </div>
    )}
    <div className="session--speaker-info">
      <h3>{speaker.title}</h3>
      {(speaker.relationships.field_company) ?
        (<div className="speaker-company">{speaker.relationships.field_company.title}</div>
        ) : ''}
    </div>
  </div>
);

export default Speaker
