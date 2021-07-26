import React from 'react';

export default function Trips(props) {
  const getTimetable = props => {
    let timetableData = {};

    for (var i = 0; i < railwayTimetableDatabase.length; i++) {
      if (
        railwayTimetableDatabase[i].from === props.from &&
        railwayTimetableDatabase[i].to === props.to &&
        railwayTimetableDatabase[i].timeStamp === props.time
      ) {
        timetableData = railwayTimetableDatabase[i];
      }
    }

    return timetableData;
  };

  const railwayTimetableDatabase = () => {
    [
      { from: 't1', to: 't2', timeStamp: '11:00' },
      { from: 't3', to: 't4', timeStamp: '11:10' },
      { from: '1', to: '2', timeStamp: '11:20' }
    ];
  };

  return (
    <>
      <div>
        <h2>Trips</h2>
        {getTimetable()}
      </div>
    </>
  );
}
