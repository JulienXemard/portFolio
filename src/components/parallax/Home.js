import React from 'react'
import About from '../About'
import Technologies from '../Technologies'
import Project from '../Projects'
import Contact from '../Contact'
import Motion from '../parallax/Motion'

import {Parallax, ParallaxLayer} from 'react-spring/renderprops-addons'


import { makeStyles } from '@material-ui/core/styles'
import { IconButton } from '@material-ui/core'

let parallax = null

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1)
  }
}))

function Home() {
  const classes = useStyles()

    return (
      <>
        <Parallax pages={2} ref={ref => (parallax = ref)}>

        <ParallaxLayer offset={0.8} speed={1} style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }} />

          <ParallaxLayer offset={0} speed={2}>
            <About />
          </ParallaxLayer>

          <ParallaxLayer offset={0.89} speed={1} style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
            <Technologies />
          </ParallaxLayer>

          <ParallaxLayer offset={1} speed={4}>
            <Motion />
          </ParallaxLayer>

          <ParallaxLayer offset={1.26} speed={2} style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}>
            <Project />
          </ParallaxLayer>

          <ParallaxLayer offset={1.4} speed={2} style={{ backgroundColor: 'rgba(255, 255, 255, 1)' }}>
            <Contact />
          </ParallaxLayer>

          <ParallaxLayer offset={1.6} speed={3}>
            <span onClick={() => parallax.scrollTo(0)}>Click back Home</span>
          </ParallaxLayer>

          {/* <ParallaxLayer offset={0.3} speed={-0.3} style={{ pointerEvents: 'none' }}>
            <img src='https://i.ibb.co/qJ32QpS/GALogo.png' style={{ width: '10%', marginLeft: '70%' }} />
          </ParallaxLayer> */}

          <ParallaxLayer offset={0.05} speed={3} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-github-plain" style={{ display: 'block', marginLeft: '35%' }}></i>
            <i className="icons devicon-npm-original-wordmark" style={{ display: 'block', marginLeft: '85%' }}></i>
            <i className="icons devicon-javascript-plain" style={{ display: 'block', marginLeft: '10%' }}></i>
            <i className="icons devicon-heroku-original" style={{ display: 'block', marginLeft: '55%' }}></i>
            <i className="icons devicon-django-plain" style={{ display: 'block', marginLeft: '35%' }}></i>
            <i className="icons devicon-chrome-plain" style={{ display: 'block', marginLeft: '80%' }}></i>
            <i className="icons devicon-react-original" style={{ display: 'block', marginLeft: '60%' }}></i>
            <i className="icons devicon-html5-plain" style={{ display: 'block', marginLeft: '5%' }}></i>
            <i className="icons devicon-sass-original" style={{ display: 'block', marginLeft: '21%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.05} speed={1} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-nodejs-plain" style={{ display: 'block', marginLeft: '70%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.35} speed={2.1} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-git-plain" style={{ display: 'block', marginLeft: '40%' }}></i>
            <i className="icons devicon-mongodb-plain" style={{ display: 'block', marginLeft: '65%' }}></i>
            <i className="icons devicon-visualstudio-plain" style={{ display: 'block', marginLeft: '90%' }}></i>
            <i className="icons devicon-javascript-plain" style={{ display: 'block', marginLeft: '50%' }}></i>
            <i className="icons devicon-python-plain" style={{ display: 'block', marginLeft: '76%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.64} speed={2.5} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-visualstudio-plain" style={{ display: 'block', marginLeft: '65%' }}></i>
            <i className="icons devicon-trello-plain" style={{ display: 'block', marginLeft: '50%' }}></i>
            <i className="icons devicon-typescript-plain" style={{ display: 'block', marginLeft: '32%' }}></i>
          </ParallaxLayer>

          <ParallaxLayer offset={0.72} speed={2.8} style={{ pointerEvents: 'none' }}>
            <i className="icons devicon-github-plain" style={{ display: 'block', marginLeft: '80%' }}></i>
            <i className="icons devicon-css3-plain" style={{ display: 'block', marginLeft: '5%' }}></i>
            <i className="icons devicon-nodejs-plain" style={{ display: 'block', marginLeft: '60%' }}></i>
            <i className="icons devicon-postgresql-plain" style={{ display: 'block', marginLeft: '90%' }}></i>
            <i className="icons devicon-slack-plain" style={{ display: 'block', marginLeft: '20%' }}></i>
            <i className="icons devicon-visualstudio-plain" style={{ display: 'block', marginLeft: '50%' }}></i>
            <i className="icons devicon-mongodb-plain" style={{ display: 'block', marginLeft: '75%' }}></i>
            <i className="icons devicon-github-plain" style={{ display: 'block', marginLeft: '35%' }}></i>
            <i className="icons devicon-git-plain" style={{ display: 'block', marginLeft: '8%' }}></i>
          </ParallaxLayer>
        </Parallax>
      </>
    )
}

export default Home
