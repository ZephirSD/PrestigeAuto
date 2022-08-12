import React from 'react'
import { Button, Input } from './Formulaire'

function Connexion() {
  return (
    <>
        <form style={{padding: '0px'}}>
          <div className='case_filter'>
              <div className='case_connexion'>
                  <Input type={'email'} label={'Email / Pseudo'}/>
                  <Input type={'password'} label={'Mot de passe'}/>
                  <Button type={'button'} value={'Connecter'}/>
              </div>
          </div>
        </form>
    </>
  )
}

export default Connexion