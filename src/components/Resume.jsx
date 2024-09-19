import React from 'react'

function Resume() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Resume Section */}
        <div className="col-md-6">
          <h6 className="text-uppercase fw-bold">Resume</h6>
          <hr className="mt-0" style={{ borderTop: '1px solid #eaeaea' }} />
          <button className="btn btn-light border fw-bold">Create a new entry</button>
        </div>

        {/* Skills Section */}
        <div className="col-md-6">
          <h6 className="text-uppercase fw-bold">Skills</h6>
          <hr className="mt-0" style={{ borderTop: '1px solid #eaeaea' }} />
          <button className="btn btn-light border fw-bold no-border">Create a new entry</button>
        </div>
      </div>
    </div>
  )
}

export default Resume