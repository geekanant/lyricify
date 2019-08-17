import React from 'react'

const Footer = () => {
  return (
      <footer className="container py-5">
          <div className="row">
              <div className="col-12 col-md">
                  <small className="d-block mb-3 text-muted">&copy; 2019 Anant Patni All rights reserved.</small>
              </div>
              <div className="col-6 col-md">
                  <h5><a target="_blank" className="text-muted" href="https://www.anantpatni.com">Anant Patni</a></h5>
                
                  
              </div>
              <div className="col-6 col-md">
                  <h5>Follow me</h5>
                  <ul className="list-unstyled text-small">
                      <li><a target="_blank" rel="noopener noreferrer" className="text-muted" href="https://www.linkedin.com/in/anantpatni1/">Linkedin</a></li>
                      <li><a target="_blank" className="text-muted" href="https://github.com/geekanant">GitHub</a></li>
                      <li><a target="_blank" className="text-muted" href="https://www.anantpatni.com">Anant Patni</a></li>
                  </ul>
              </div>
          </div>
      </footer>
  )
}
export default Footer