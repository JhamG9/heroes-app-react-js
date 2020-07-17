import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { Switch, Route, Redirect } from 'react-router-dom'
import MarvelScreen from '../components/marver/MarvelScreen'
import { HeroScreen } from '../components/heroes/HeroScreen'
import { DcScreeen } from '../components/dc/DcScreeen'
import SearchScreen from '../components/search/SearchScreen'

export const DashboardRoutes = () => {
    return (
        <>
            <Navbar />

            <div className="container mt-2">
                <Switch>
                    <Route exact path="/marvel" component={MarvelScreen} />
                    <Route exact path="/hero/:heroeId" component={HeroScreen} />
                    <Route exact path="/dc" component={DcScreeen} />
                    <Route exact path="/search" component={SearchScreen} />
                    <Redirect to="/marvel" />
                </Switch>
            </div>
        </>
    )
}
