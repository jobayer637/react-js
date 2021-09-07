import React from 'react'

import Nav from './nav'
import Content from './content'
import Footer from './footer'

class Person extends React.Component {
    render(){
        return (
            <div className="container my-3">
                <Nav/>
                <Content/>
                <Footer/>
            </div>
          )
    }
}

export default Person;