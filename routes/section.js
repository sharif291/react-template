import React, { Fragment } from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import About from '../pages/about'
import Projects from '../pages/projects'

function section() {
    return (
        <Fragment>
            <BrowserRouter>
            <Route path="/about" component={About}></Route>
            <Route path="/projects" component={Projects}></Route>
            </BrowserRouter>
        </Fragment>
    )
}

export default section
