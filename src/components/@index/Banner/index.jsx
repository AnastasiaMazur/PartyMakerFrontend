import React from 'react'
import Grid from '@material-ui/core/es/Grid/Grid'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/es/Button/Button'
import Background from './Background'
import Container from '../../Container'

const Banner = () =>
  <Background>
    <Container>
      <Grid container style={{ paddingTop: '550px' }} alignItems="center" spacing={24} justify="center">
        <Grid item>
          <Link to="/cargo"><Button variant="raised">Найти пати</Button></Link>
        </Grid>
        <Grid item>
          <Link to="/cargo/create"><Button variant="raised">Добавить пати</Button></Link>
        </Grid>
      </Grid>
    </Container>
  </Background>

Banner.propTypes = {}

export default Banner
