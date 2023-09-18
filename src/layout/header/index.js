import React from "react"
import { Link } from "gatsby"

import AddSearch from "../../components/addSearch"
import {
  Container,
  InputText,
  Navbar,
  NavMenu,
} from "@pantheon-systems/pds-toolkit-react"

import "./style.css"

// Links for NavMenu component.
const mainNavigationLinks = [
  {
    linkContent: (
      <Link id="home" to="/">
        Docs Home
      </Link>
    ),
  },
  {
    label: "Documentation",
    links: [
      {
        linkContent: (
          <Link id="get-started" to="/get-started">
            Get Started
          </Link>
        ),
      },
      {
        linkContent: (
          <Link id="develop" to="/develop">
            Develop
          </Link>
        ),
      },
      {
        linkContent: (
          <Link id="platform" to="/platform">
            Explore Platform Architecture
          </Link>
        ),
      },
      {
        linkContent: (
          <Link id="performance" to="/performance">
            Optimize Performance
          </Link>
        ),
      },
      {
        linkContent: (
          <Link id="manage" to="/manage">
            Manage Teams & Organizations
          </Link>
        ),
      },
      {
        linkContent: (
          <Link id="troubleshoot" to="/troubleshoot">
            Troubleshoot
          </Link>
        ),
      },
      {
        isSeparator: true,
      },
      {
        linkContent: (
          <Link id="changelogs" to="/changelog">
            Changelog
          </Link>
        ),
      },
      {
        linkContent: (
          <Link id="Glossary" to="/glossary">
            Glossary
          </Link>
        ),
      },
      {
        linkContent: (
          <Link id="terminus" to="/terminus">
            Terminus Guide
          </Link>
        ),
      },
    ],
  },
  {
    linkContent: (
      <a href="https://dashboard.pantheon.io/#support" target="_blank">
        Support
      </a>
    ),
  },
]

const mobileMenuBreakpoint = 900

const Header = ({ page }) => (
  <Navbar mobileMenuMaxWidth={mobileMenuBreakpoint}>
    <NavMenu
      slot="items-left"
      ariaLabel="Main Navigation"
      menuItems={mainNavigationLinks}
      mobileMenuMaxWidth={mobileMenuBreakpoint}
    />
    <div slot="items-right" className="pds-button-group">
      <a
        className="pds-button pds-button--brand-secondary"
        href="https://dashboard.pantheon.io"
        target="_blank"
      >
        Log in
      </a>
      <a
        className="pds-button pds-button--brand"
        href="https://pantheon.io/register"
        target="_blank"
      >
        Get free account
      </a>
    </div>
    <Container
      slot="items-below"
      id="search-bar"
      className="pds-spacing-mar-block-start-2xl pds-spacing-mar-block-end-m"
      width="wide"
    >
      <form
        id="searchform"
        action="/search"
        role="search"
        acceptCharset="UTF-8"
        encType="application/x-www-form-urlencoded"
        title="Search Pantheon Documentation"
      >
        <InputText
          id="search-field"
          aria-label="Search Pantheon Documentation"
          placeholder="Search Pantheon Documentation"
          type="search"
          data-addsearch-id="search_widget"
          label=" "
        />
        {page == "default" ? <AddSearch /> : null}
      </form>
    </Container>
  </Navbar>
)

export default Header
