function Hero() {
  return (
    <div>
      <div className="container mt-4">
        <h1 className="text-body-tertiary">Employee's Name</h1>
        <h6 className="text-body-tertiary">Job Position</h6>
        <p className="text-body-tertiary fs-6">Tags</p>
      </div>


      {/* Form Fields */}
      <div className="row container mx-auto">
        <div className="col-md-6">
          <form>
            <div className="mb-3 d-flex">
              <label htmlFor="formWorkMobile" className="form-label fw-bold w-50">Work Mobile</label>
              <input type="text" className="form-control no-border" id="formWorkMobile"/>
            </div>

            <div className="mb-3 d-flex">
              <label htmlFor="formWorkPhone" className="form-label fw-bold w-50">Work Phone</label>
              <input type="text" className="form-control no-border" id="formWorkPhone" />
            </div>

            <div className="mb-3 d-flex">
              <label htmlFor="formWorkEmail" className="form-label fw-bold w-50">Work Email</label>
              <input type="email" className="form-control no-border" id="formWorkEmail"/>
            </div>
          </form>
        </div>

        <div className="col-md-6">
          <form>
            <div className="mb-3 d-flex">
              <label htmlFor="formDepartment" className="form-label fw-bold w-50">Department</label>
              <input type="text" className="form-control no-border" id="formDepartment" />
            </div>

            <div className="mb-3 d-flex">
              <label htmlFor="formJobPosition" className="form-label fw-bold w-50">Job Position</label>
              <input type="text" className="form-control no-border" id="formJobPosition" />
            </div>

            <div className="mb-3 d-flex">
              <label htmlFor="formManager" className="form-label fw-bold w-50">Manager</label>
              <input type="text" className="form-control no-border" id="formManager" />
            </div>
          </form>
        </div>
      </div>



    </div>
  );
}

export default Hero;
