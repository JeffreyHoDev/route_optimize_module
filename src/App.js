import './App.css'


import UserManagementPage from './pages/UserManagement/UserManagement.page'
import AddUserComponent from './components/user/addUser.component'
import PassengerManagementPage from './pages/PassengerManagement/passengermanagement.page'
import AddPassengerComponent from './components/passenger/addPassenger.component'
import AddVehicleComponent from './components/vehicle/addVehicle.component'
import VehicleManagementPage from './pages/VehicleManagement/vehiclemanagement.page'
import FleetManagementPage from './pages/Fleet/fleetmanagement.page'
import AddFleetComponent from './components/fleet/addFleet.component'

import SetRoutePage from './pages/SetRoute/SetRoutePage.page'

import NavigationBarComponent from './components/navigation-bar/Navigation-bar.component'

const App = () => {

  return (
    <div className="App">
      <NavigationBarComponent />
      {/* <UserManagementPage />
      <AddUserComponent /> */}
      {/* <PassengerManagementPage />
      <AddPassengerComponent /> */}
      {/* <VehicleManagementPage />
      <AddVehicleComponent /> */}
      {/* <FleetManagementPage />
      <AddFleetComponent /> */}
      <SetRoutePage />
    </div>
  )
}

export default App