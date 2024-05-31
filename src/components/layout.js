/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/how-to/querying-data/use-static-query/
 */

import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <div
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
        }}
      >
        <main>{children}</main>
        <footer
          style={{
            marginTop: `var(--space-5)`,
            fontSize: `var(--font-sm)`,
          }}
        >
          <div class="flex-col justify-center items-center gap-[7px] inline-flex">
            <div class="text-center text-white text-xs font-normal font-['League Spartan'] leading-[14.40px]">
              Follow our journey
              <br />
              <br />
            </div>
            <div class="justify-center items-center gap-2.5 inline-flex">
              <div class="text-center">
                <span class="text-white text-xs font-normal font-['League Spartan'] leading-[17.52px]">
                  {" "}
                </span>
                <span class="text-white text-[10px] font-normal font-['Content'] leading-[14.60px]">
                  @
                </span>
                <span class="text-white text-xs font-normal font-['League Spartan'] leading-[17.52px]">
                  rootsstudio
                  <br />
                  www.rootsstudio.com
                  <br />
                  <br />
                </span>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

export default Layout
