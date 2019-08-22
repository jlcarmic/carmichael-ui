import React from 'react'
import { ThemeProvider } from 'styled-components'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { describe, it } from 'mocha'
import Scrollable, { Container, ScrollToTop } from '../../src/Scrollable/Scrollable'
import Theme from '../../src/Theme'

describe('Scrollable', () => {
  it('displays the container div, scrollbutton, and children', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Scrollable><p>CHILD</p></Scrollable>
      </ThemeProvider>,
    )

    expect(wrapper.find(Container)).to.have.length(1)
    expect(wrapper.find(ScrollToTop)).to.have.length(1)
    expect(wrapper.find('p').text()).to.equal('CHILD')
  })

  it('clicking scroll to top button updates container scrollTop to be 0', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Scrollable><p>CHILD</p></Scrollable>
      </ThemeProvider>,
    )

    const container = {
      scrollTop: 200,
    }

    const stubbedEvent = {
      target: {
        parentNode: {
          previousSibling: container,
        },
      },
    }

    wrapper.find(ScrollToTop).simulate('click', stubbedEvent)
    expect(container.scrollTop).to.equal(0)
  })

  it('scrolling down passed 151 pixels sets scrollButton opacity to 1', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Scrollable><p>CHILD</p></Scrollable>
      </ThemeProvider>,
    )

    const scrollButton = { style: { opacity: 0 } }
    const container = { nextSibling: scrollButton, scrollTop: 151 }
    const stubbedEvent = { target: container }

    wrapper.find(Container).simulate('scroll', stubbedEvent)

    expect(scrollButton.style.opacity).to.equal(1)
  })

  it('scrolling up passed 150 pixels sets scrollButton opacity to 0', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Scrollable><p>CHILD</p></Scrollable>
      </ThemeProvider>,
    )

    const scrollButton = { style: { opacity: 1 } }
    const container = { nextSibling: scrollButton, scrollTop: 150 }
    const stubbedEvent = { target: container }

    wrapper.find(Container).simulate('scroll', stubbedEvent)

    expect(scrollButton.style.opacity).to.equal(0)
  })
})
