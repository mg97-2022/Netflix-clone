import React from 'react'
import classes from './LoginFooter.module.css'

function LoginFooter() {
    return (
        <footer className={classes.footer}>
          <div className={` ${classes.content}`}>
            <a href="/">questions? contact us.</a>
            <ul className={classes.list}>
              <li>
                <a href="/">FAQ</a>
              </li>
              <li>
                <a href="/">heLP center</a>
              </li>
              <li>
                <a href="/">terms of use</a>
              </li>
              <li>
                <a href="/">privacy</a>
              </li>
              <li>
                <a href="/">cookie preferences</a>
              </li>
              <li>
                <a href="/">corporate information</a>
              </li>
            </ul>
          </div>
        </footer>
      );
}

export default LoginFooter
