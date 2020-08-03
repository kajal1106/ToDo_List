import React from 'react'

function About() {
    return (
        <React.Fragment>
            <h1>About</h1>
            <p>This is the TodoList app v1.0.0. 
                This app is made using reate JS and react router by &nbsp;
                 <a style={linkStyle} href="https://www.linkedin.com/in/kajal-singh-aa644588/" 
            >Kajal</a> to showcase her webdevelopment skills.</p>
        </React.Fragment>
    )
}

const linkStyle = {
    color: 'blue',
    textDecoration: 'none',
    textTransform: 'uppercase'
}

export default About;