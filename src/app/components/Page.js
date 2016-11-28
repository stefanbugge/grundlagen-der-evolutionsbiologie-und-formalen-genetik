import React, { Component } from 'react';
import moment from 'moment'

export default function Page (props) {

  return (
    <div className="page">
      <h4>s. { props.number }</h4>
      { props.entries.map(e =>
        <PageEntry key={e.id} entry={e} />
      ) }
    </div>
  )
}

const PageEntry = (props) => {
  const entry = props.entry
  return (
    <div>
      <div>{entry.line}</div>
      <div>{moment(entry.reportedOn).format()}</div>
      <div>{entry.reportedBy}</div>
      <div dangerouslySetInnerHTML={{__html: entry.description}} />
    </div>
  )
}
