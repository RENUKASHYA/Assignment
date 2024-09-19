import React from 'react'

function HRSettings() {
  return (
    <div className="container">
      <form>
        <div className="row my-4">
          <div className="col-md-6">
            <h5>STATUS</h5>
            <div className="mb-3">
              <label className="form-label">Employee Type</label>
              <input type='text' className='no-border mx-3'/> {/* Hidden input box */}
            </div>
            <div className="mb-3">
              <label className="form-label">Related User</label>
              <input type='text' className='no-border mx-3'/> {/* Hidden input box */}
            </div>
          </div>

          <div className="col-md-6">
            <h5>ATTENDANCE/POINT OF SALE</h5>
            <div className="mb-3">
              <label className="form-label">PIN Code</label>
              <button className="btn btn-light border mx-4 fw-bold">Generate</button>
              {/* Hidden input box */}
            </div>
            <div className="mb-3">
              <label className="form-label">Badge ID</label>
              <input type='text' className='no-border mx-3'/> {/* Hidden input box */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h5>PAYROLL</h5>
            <div className="mb-3">
              <label className="form-label">Registration Number of the Employee</label>
              <input type='text' className='no-border mx-3'/> {/* Hidden input box */}
            </div>
          </div>

          <div className="col-md-6">
            <div className="mb-3">
              <label className="form-label">Job Position</label>
              <input type='text' className='no-border mx-3'/> {/* Hidden input box */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <h5>APPLICATION SETTINGS</h5>
            <div className="mb-3">
              <label className="form-label">Hourly Cost</label>
              <input type='text' className='no-border mx-3'/>{/* Hidden input box */}
            </div>
            <div className="mb-3">
              <label className="form-label">Fleet Mobility Card</label>
              <input type='text' className='no-border mx-3'/> {/* Hidden input box */}
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default HRSettings