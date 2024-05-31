import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const Natgeo = () => (
  <Layout>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="NatGeo" />

export default Natgeo
