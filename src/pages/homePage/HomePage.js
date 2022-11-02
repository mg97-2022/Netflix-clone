import React, { Fragment } from 'react'
import Landing from './Landing/Landing'
import TvSection from './TV/TvSection'
import Download from './Download/Download'
import WatchEverywhere from './WatchEverywhere/WatchEverywhere'
import Kids from './Kids/Kids'
import Questions from './Questions/Questions'
import HomeNav from './HomeNav/HomeNav'
import BigFooter from '../../components/layout/BigFooter/BigFooter'

function HomePage() {
  return (
    <Fragment>
      <HomeNav />
      <Landing />
      <TvSection />
      <Download />
      <WatchEverywhere />
      <Kids />
      <Questions />
      <BigFooter />
    </Fragment>
  )
}

export default HomePage
