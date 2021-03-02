import React from 'react'

import FormsComposition from '../../components/Form/FormsComposition/FormsComposition'

import './AuthPage.scss'

export default function AuthPage(props) {
  console.log(props)
  return (
    <section class="section-auth">
      <h2 class="section-title section-title--text-primary">Login / Register</h2>
      <div class="container">
        <FormsComposition />
      </div>
    </section>
  )
}
