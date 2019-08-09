import React from 'react'

import Table from '../components/Table'
import data from '../data.json'

export default () => (
  <>
    <h3>
      Hi! My name is Dalton Craven &amp; I’m a student at the University of
      South Carolina.
    </h3>
    <p>
      I’ve been working with computer science for my entire high school career,
      and I am excited to continue to pursue it at the University of South
      Carolina. My passion for computer science was sparked by Mason Hack Club,
      a programming club dedicated to teaching students how to code. This
      passion has also lead me to run a multitude of projects!
    </p>
    <Table title="Current Projects" data={data.current} />
    <Table title="Previous Projects" data={data.previous} />
  </>
)
