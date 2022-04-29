import React, { lazy, Suspense, useState, useEffect } from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter as Router, Switch, Route, Redirect, withRouter, useLocation } from 'react-router-dom'

import {
  Loading,
  BasicPanel,
  Header,
  AcademicTerms,
  Scholarship,
  GradesPrograms,
  FeeBooks,
  ProgramClasses,
  Dashboard,
  FeebookEdit,
  AddmissionsOverview,
  Application,
  AddEnquiry,
  Tasks,
  Login,
  Institutions,
  Company,
  GiikiWorld,
  CompanySettings,
  CampusDetail,
  AdmissionsWorld,
  CampusList,
  CampusInformation,
  UserList,
  Stages,
  Managment,
  NotifcationsPage,
  TasksSettings,
  UserSettings,
  EditTemplate,
  AdmissionApprovals,
  Communication
} from '@pages'
import {
  BloomLogin,
  BloomWelcome,
  BloomCabinet,
  BloomForm,
  BloomDashboard,
  BloomDetails,
  BloomReview,
  BloomPayment,
  BloomFormMore,
  BloomChildAssessment
} from '@pages/bloomingdale'

// PLOP IMPORTS

const NotFound = () => <div className='flex w-screen h-screen justify-center items-center'>Sorry, nothing here.</div>

function App(props) {
  const location = useLocation()

  const [burger, setBurger] = useState(false)
  const [bloom, setBloom] = useState(false)

  const isOpen = () => {
    setBurger(!burger)
  }

  useEffect(() => {
    location.pathname.search('bloomingdale') !== -1 ? setBloom(true) : setBloom(false)
  }, [location])

  return (
    <div className='app'>
      <Router>
        {!bloom && <BasicPanel burger={burger} isOpen={isOpen} />}
        <div>
          {!bloom && <Header isOpen={isOpen} burger={burger} />}
          <Suspense fallback={<Loading />}>
            <Switch>
              {/* Bloomingdale */}
              <Route exact path='/bloomingdale'>
                <Redirect to='/bloomingdale-login' />
              </Route>
              <Route exact path='/bloomingdale-login' render={() => <BloomLogin />} />
              <Route exact path='/bloomingdale-welcome' render={() => <BloomWelcome />} />
              <Route exact path='/bloomingdale-cabinet' render={() => <BloomCabinet />} />
              <Route exact path='/bloomingdale-form' render={() => <BloomForm />} />
              <Route exact path='/bloomingdale-dashboard' render={() => <BloomDashboard />} />
              <Route exact path='/bloomingdale-details' render={() => <BloomDetails />} />
              <Route exact path='/bloomingdale-review' render={() => <BloomReview />} />
              <Route exact path='/bloomingdale-payment' render={() => <BloomPayment />} />
              <Route exact path='/bloomingdale-form-more' render={() => <BloomFormMore />} />
              <Route exact path='/bloomingdale-child-assessment' render={() => <BloomChildAssessment />} />

              {/* App */}
              <Route exact path='/campus/'>
                <Redirect to='/campus/academic/middle' />
              </Route>
              <Route exact path='/campus/academic'>
                <Redirect to='/campus/academic/middle' />
              </Route>
              <Route exact path='/finance/'>
                <Redirect to='/finance/feebooks' />
              </Route>
              <Route exact path='/'>
                <Redirect to='/dashboard' />
              </Route>
              <Route exact path='/login'>
                <Redirect to='/login/type' />
              </Route>
              <Route exact path='/institutions'>
                <Redirect to='/institutions/getting-start' />
              </Route>
              <Route exact path='/giiki'>
                <Redirect to='/giiki/company' />
              </Route>
              <Route exact path='/worlds'>
                <Redirect to='/worlds/giiki' />
              </Route>
              <Route exact path='/detail'>
                <Redirect to='/detail/company' />
              </Route>
              <Route exact path='/settings'>
                <Redirect to='/settings/user-settings' />
              </Route>
              <Route exact path='/campus/academic/:id' render={() => <AcademicTerms burger={burger} />} />
              <Route exact path='/campus/grades' render={() => <GradesPrograms burger={burger} />} />
              <Route exact path='/giiki/company' render={() => <Company burger={burger} />} />
              <Route exact path='/detail/approvals' render={() => <AdmissionApprovals burger={burger} />} />
              <Route exact path='/templates' render={() => <Communication burger={burger} />} />
              <Route exact path='/worlds/giiki' render={() => <GiikiWorld burger={burger} />} />
              <Route exact path='/worlds/admissions' render={() => <AdmissionsWorld burger={burger} />} />
              <Route exact path='/giiki/settings' render={() => <CompanySettings burger={burger} />} />
              <Route exact path='/campus/classes' render={() => <ProgramClasses burger={burger} />} />
              <Route exact path='/finance/scholarship' render={() => <Scholarship burger={burger} />} />
              <Route exact path='/finance/feebooks' render={() => <FeeBooks burger={burger} />} />
              <Route exact path='/finance/feebooks/edit' render={() => <FeebookEdit burger={burger} />} />
              <Route exact path='/managment' render={() => <Managment burger={burger} />} />
              <Route exact path='/settings/tasks-settings' render={() => <TasksSettings burger={burger} />} />
              <Route exact path='/settings/user-settings' render={() => <UserSettings burger={burger} />} />
              <Route exact path='/templates/edit-template' render={() => <EditTemplate burger={burger} />} />
              <Route exact path='/dashboard' render={() => <Dashboard burger={burger} />} />
              <Route exact path='/notification' render={() => <NotifcationsPage burger={burger} />} />
              <Route exact path='/login/:id' render={() => <Login burger={burger} />} />
              <Route exact path='/overview/' render={() => <AddmissionsOverview burger={burger} />} />
              <Route exact path='/detail/campus-list' render={() => <CampusList burger={burger} />} />
              <Route exact path='/detail/campus-information' render={() => <CampusInformation burger={burger} />} />
              <Route exact path='/detail/user-list' render={() => <UserList burger={burger} />} />
              <Route exact path='/stages' render={() => <Stages burger={burger} />} />
              <Route path='/detail/:id' render={() => <CampusDetail burger={burger} />} />
              <Route path='/application/:id' render={() => <Application burger={burger} />} />
              <Route path='/institutions/:id' render={() => <Institutions burger={burger} />} />
              <Route path='/enquiry' render={() => <AddEnquiry burger={burger} />} />
              <Route path='/tasks' render={() => <Tasks burger={burger} />} />
              <Route component={NotFound} />
            </Switch>
          </Suspense>
        </div>
      </Router>
    </div>
  )
}

export default hot(module)(withRouter((props) => <App {...props} />))
