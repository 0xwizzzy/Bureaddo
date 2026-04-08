import './style.css'
import { headerHTML, footerHTML, setupLayout } from './layout.js'
import heroImg from './assets/hero.png'

const pageContent = `
<main>
  <section class="relative bg-white overflow-hidden">
    
  </section>
</main>
`

document.querySelector('#app').innerHTML = `
  ${headerHTML}
  ${pageContent}
  ${footerHTML}
`

setupLayout()



