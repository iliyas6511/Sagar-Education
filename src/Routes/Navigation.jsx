
import React from 'react'
import { publicroutes } from './AllRoutes'
import Layout from '../Layouts/Layout'
import { Route, Routes } from 'react-router-dom'

const Navigation = () => {
    return (
        <>
            <Routes>
                <Route>
                    <Route>
                        {publicroutes.map((route, idx) => (
                            <Route path={route.path}
                                element={
                                    <Layout>
                                        {route.component}
                                    </Layout>
                                }
                                key={idx}
                                exact={true} />
                        ))}
                    </Route>
                </Route>
            </Routes>

        </>
    )
}

export default Navigation
