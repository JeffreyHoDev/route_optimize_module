import './App.css'


import UserManagementPage from './pages/UserManagement/UserManagement.page'
import AddUserComponent from './components/user/addUser.component'
import PassengerManagementPage from './pages/PassengerManagement/passengermanagement.page'
import AddPassengerComponent from './components/passenger/addPassenger.component'
import AddVehicleComponent from './components/vehicle/addVehicle.component'
import VehicleManagementPage from './pages/VehicleManagement/vehiclemanagement.page'
import FleetManagementPage from './pages/Fleet/fleetmanagement.page'
import AddFleetComponent from './components/fleet/addFleet.component'

const App = () => {

  return (
    <div className="App">
      <UserManagementPage />
      <AddUserComponent />
      {/* <PassengerManagementPage />
      <AddPassengerComponent /> */}
      {/* <VehicleManagementPage />
      <AddVehicleComponent /> */}
      {/* <FleetManagementPage />
      <AddFleetComponent /> */}
    </div>
  )
}

export default App