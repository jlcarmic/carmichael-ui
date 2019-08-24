import React from 'react'
import { ThemeProvider } from 'styled-components'
import sinon from 'sinon'
import { expect } from 'chai'
import { mount } from 'enzyme'
import { describe, it } from 'mocha'
import Search, { SearchBar, SearchInput, SearchIcon } from '../../src/Search/Search'
import Theme from '../../src/Theme'

describe('Search', () => {
  it('loads the search bar', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Search updateSearchTerm={sinon.stub()} />
      </ThemeProvider>,
    )

    expect(wrapper.find(SearchBar)).to.have.length(1)
    expect(wrapper.find(SearchInput).prop('value')).to.equal('')
    expect(wrapper.find(SearchIcon)).to.have.length(1)
  })

  it('defaults the input to searchTerm when provided', () => {
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Search searchTerm="shrug" updateSearchTerm={sinon.stub()} />
      </ThemeProvider>,
    )

    expect(wrapper.find(SearchBar)).to.have.length(1)
    expect(wrapper.find(SearchInput).prop('value')).to.equal('shrug')
    expect(wrapper.find(SearchIcon)).to.have.length(1)
  })

  it('calls the function provided when the input changes', () => {
    const updateSpy = sinon.stub()
    const wrapper = mount(
      <ThemeProvider theme={Theme}>
        <Search updateSearchTerm={updateSpy} />
      </ThemeProvider>,
    )

    expect(wrapper.find(SearchBar)).to.have.length(1)
    expect(wrapper.find(SearchInput).prop('value')).to.equal('')
    expect(wrapper.find(SearchIcon)).to.have.length(1)

    wrapper.find(SearchInput).simulate('change')
    expect(updateSpy.callCount).to.equal(1)
  })
})
