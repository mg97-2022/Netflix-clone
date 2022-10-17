import React from 'react'
import  Form  from '../Form/Form'
import QuesList from './QuesList/QuesList'
import classes from './Questions.module.css'

function Questions() {
  return (
    <section className={classes.questions}>
      <div className='container'>
        <h1>frequently asked questions</h1>
        <QuesList />
        <Form />
      </div>
    </section>
  )
}

export default Questions
