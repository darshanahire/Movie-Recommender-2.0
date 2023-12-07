import React from 'react'

function Footer() {
  return (
    <footer className="d-flex flex-wrap justify-content-center align-items-center pt-3 mt-4 border-top footer">
    <div className="col-md-4 d-flex align-items-center justify-content-center">
      <span className="text-body-secondary">&copy; {new Date().getFullYear()} Darshan Ahire - All rights reserved.</span>
    </div>
  </footer>
  )
}

export default Footer