import React, {useState} from 'react'
import Resume from './Resume'
import WorkInformation from './WorkInformation'
import PrivateInformaton from './PrivateInformation'
import HRSettings from './HRSettings'

function Navigation() {
  const [tab, setTab] = useState("resume")
  return (
    <div>
      <div className="container">
      <ul className="nav nav-tabs mt-4 " >
        <li className="nav-item">
          <a className="nav-link active" data-bs-toggle="tab" onClick={()=>setTab("resume")}>Resume</a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" data-bs-toggle="tab" onClick={()=>setTab("work-info")}>Work Information</a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" onClick={()=>setTab("private-info")} data-bs-toggle="tab">Private Information</a>
        </li>
        <li className="nav-item" >
          <a className="nav-link" data-bs-toggle="tab" onClick={()=>setTab("hr-settings")}>HR Settings</a>
        </li>
      </ul>
      </div>
      <div className="container">
          {tab == 'resume' && <Resume/>}
          {tab == 'work-info' && <WorkInformation/>}
          {tab == 'private-info' && <PrivateInformaton/>}
          {tab == 'hr-settings' && <HRSettings/>}
      </div>
    </div>
  )
}

export default Navigation