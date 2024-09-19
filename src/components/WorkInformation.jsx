import React from 'react'

function WorkInformation() {
  return (
    <div className="container">
      <form className='my-4'>
        {/* New Section from the Second Image */}
        <div className="row">
          <div className="col-md-12">
            <h5>LOCATION</h5>
            <hr />
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label">Work Address</label>
              <input type='text' className='no-border mx-3' placeholder='anwarb.com'/> {/* Hidden input box */}
              <input type='text' className='no-border mx-3' placeholder='India'/> {/* Hidden input box */}
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label">Work Location</label>
              <input type='text' className='no-border mx-3'/> {/* Hidden input box */}
            </div>
          </div>

          <div className="col-md-12">
            <h5>APPROVERS</h5>
            <hr />
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label">Expense</label>
              <input type='text' className='no-border mx-3'/> {/* Hidden input box */}
            </div>
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label">Time Off</label>
              <input type='text' className='no-border mx-3'/> {/* Hidden input box */}
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <h5>SCHEDULE</h5>
            <hr />
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label">Working Hours</label>
              <input type='text' className='no-border mx-3'placeholder='Standard 40 hours/week'/> {/* Hidden input box */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label">Timezone</label>
              <input type='text' className='no-border mx-3'placeholder='Asia/Calcutta'/> {/* Hidden input box */}
            </div>
          </div>
          
        </div>
        <div className="row">
          <div className="col-md-12">
            <h5>PLANNING</h5>
            <hr />
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label">Roles</label>
              <input type='text' className='no-border mx-3'/> {/* Hidden input box */}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-3 d-flex align-items-center">
              <label className="form-label">Default Role</label>
              <input type='text' className='no-border mx-3'/> {/* Hidden input box */}
            </div>
          </div>
          
        </div>

      </form>
    </div>
  )
}

export default WorkInformation