import React from 'react';

const Speaker = (speaker) => {
  const f = 1;
  return (
    <div className="session--speaker">
      {speaker.r.field_photo && (
        <div className="session--speaker-image">
          <img alt={speaker.title} />
        </div>
      )}

      <div className="session--speaker-info">
        <h3>{speaker.title}</h3>
        {speaker.r.field_company && (
          <div className="speaker-company">{speaker.r.field_company.title}</div>
        )}
      </div>
    </div>
  );
};

export default Speaker;
