import React from "react";

function PrivateInformation() {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Private Contact Section */}
        <div className="col-md-6">
          <h6 className="text-uppercase fw-bold">Private Contact</h6>
          <hr className="mt-0" />
          <div className="d-flex">
            <div className="mb-2">Address </div>
            <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
            <div className="mb-2">Email</div>
            <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
            <div className="mb-2">Phone</div>
            <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
            <div className="mb-2">Language </div>
            <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
            <div className="mb-2">Home-Work Distance </div>
            <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
            <div className="mb-2">Private Car Plate </div>
            <input type="text" className="no-border mx-3" />
          </div>
        </div>

        {/* Family Status and Emergency Section */}
        <div className="col-md-6">
          <div>
            <h6 className="text-uppercase fw-bold">Family Status</h6>
            <hr className="mt-0" />
            <div className="d-flex">
            <div className="mb-2">Marital Status: Single</div>
            <input type="text" className="no-border mx-3" />
            </div>
            <div className="d-flex">
            <div className="mb-2">Number of Dependent Children: </div>
            <input type="text" className="no-border mx-3" />
            </div>
          </div>

          <div>
            <h6 className="text-uppercase fw-bold">Emergency</h6>
            <hr className="mt-0" />
            <div className="d-flex">
            <div className="mb-2">Contact Name</div>
            <input type="text" className="no-border mx-3" />
            </div>
            <div className="d-flex">
            <div className="mb-2">Contact Phone</div>
            <input type="text" className="no-border mx-3" />
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Education Section */}
        <div className="col-md-6">
          <h6 className="text-uppercase fw-bold">Education</h6>
          <hr className="mt-0" />
          <div className="d-flex">
            <div className="mb-2">Certificate Level: </div>
            <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
            <div className="mb-2">Field of Study</div>
            <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
            <div className="mb-2">School</div>
            <input type="text" className="no-border mx-3" />
          </div>
        </div>

        {/* Citizenship Section */}
        <div className="col-md-6">
          <h6 className="text-uppercase fw-bold">Citizenship</h6>
          <hr className="mt-0" />
          <div className="d-flex">
            <div className="mb-2">Nationality (Country)</div>
            <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
            <div className="mb-2">Identification: </div>
            <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
            <div className="mb-2">Passport: </div>
            <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
            <div className="mb-2">Gender</div>
            <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
            <div className="mb-2">Date of Birth</div>
            <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
            <div className="mb-2">Place of Birth</div>
            <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
            <div className="mb-2">Country of Birth</div>
            <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
            <div className="mb-2">
              Non-resident ? <input type="checkbox" />
            </div>
            <input type="text" className="no-border mx-3" />
          </div>
        </div>
      </div>

      <div className="row">
        {/* Work Permit Section */}
        <div className="col-md-6">
          <h6 className="text-uppercase fw-bold">Work Permit</h6>
          <hr className="mt-0" />
          <div className="d-flex">
          <div className="mb-2">Visa: </div>
          <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
          <div className="mb-2">Work Permit: </div>
          <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
          <div className="mb-2">Visa Expire Date</div>
          <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
          <div className="mb-2">Work Permit Expiration Date</div>
          <input type="text" className="no-border mx-3" />
          </div>
          <div className="d-flex">
          <div className="mb-2">
          <input type="text" className="no-border mx-3" />
          </div>
            Work Permit{" "}
            <button className="btn btn-light border">Upload your file</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivateInformation;
