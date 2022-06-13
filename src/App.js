import './App.css'


import UserManagementPage from './pages/UserManagement/UserManagement.page'
import AddUserComponent from './components/user/addUser.component'
import PassengerManagementPage from './pages/PassengerManagement/passengermanagement.page'
import AddPassengerComponent from './components/passenger/addPassenger.component'

const App = () => {




  return (
    <div className="App">
      {/* <UserManagementPage />
      <AddUserComponent /> */}
      <PassengerManagementPage />
      <AddPassengerComponent />
    </div>
  )
}

export default App