import React from 'react'

import "./styles/Admin.css"

import { Navbar } from './components/Navbar'
import { WorkersList } from './components/WorkersList'
import { SignedInWorkers } from './components/SignedInWorkers'
import { AddWorkers } from './components/AddWorkers'
import { RemoveWorkers } from './components/RemoveWorkers'
import { ProfileUpdate } from './components/ProfileUpdate'
import { GetWorkersData } from './components/GetWorkersData'

export const Admin = () => {
    return (
        <div>
            <Navbar linkPage="/" link="Sign in as worker" />
            <div className="workersSection">
                <WorkersList />
                <SignedInWorkers />
            </div>
            <div className="workerSetting">
                <AddWorkers />
                <RemoveWorkers />
            </div>
            <div className="workersProfile">
               <ProfileUpdate />
               <GetWorkersData/>
            </div>
            
            

           <button className='reset'>Reset Sign in</button>
            
        </div>
    )
}
