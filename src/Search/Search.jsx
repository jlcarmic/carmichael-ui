import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import FontAwesome from 'react-fontawesome'

export const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin: ${(props) => props.theme.search.margin};
`

export const SearchInput = styled.input`
  border-color: ${(props) => props.theme.search.color};
  border-radius: ${(props) => props.theme.search.borderRadius} 0 0 ${(props) => props.theme.search.borderRadius};
  border-style: ${(props) => props.theme.search.borderStyle};
  border-width: ${(props) => props.theme.search.borderWidth} 0 ${(props) => props.theme.search.borderWidth} ${(props) => props.theme.search.borderWidth};
  box-shadow: 0 2px 10px 1px ${(props) => props.theme.search.color};
  clip-path: inset(0 -1px -10px -5px);
  font-size: ${(props) => props.theme.search.fontSize};
  height: ${(props) => props.theme.search.height};
  text-align: ${(props) => props.theme.search.textAlign};
  width: ${(props) => props.theme.search.width};

  &:focus {
    outline-color: transparent;
    outline-style: none;
  }
`

export const SearchIcon = styled(FontAwesome)`
  border-color: ${(props) => props.theme.search.color};
  border-radius: 0 ${(props) => props.theme.search.borderRadius} ${(props) => props.theme.search.borderRadius} 0;
  border-style: ${(props) => props.theme.search.borderStyle};
  border-width: ${(props) => props.theme.search.borderWidth};
  box-shadow: 0 2px 10px 1px ${(props) => props.theme.search.color};
  clip-path: inset(0 -5px -10px 0 );
  color: ${(props) => props.theme.search.color};
  font-size: ${(props) => props.theme.search.fontSize};
  padding: ${(props) => props.theme.search.iconPadding};
`

const Search = ({ searchTerm, updateSearchTerm }) => (
  <SearchBar>
    <SearchInput
      type="text"
      id="searchTerm"
      name="searchTerm"
      value={searchTerm}
      placeholder="Search"
      onChange={updateSearchTerm}
    />
    <SearchIcon name="search" />
  </SearchBar>
)

Search.defaultProps = {
  searchTerm: '',
}

Search.propTypes = {
  /**
   * The value to set in the search field
   */
  searchTerm: PropTypes.string,
  /**
   * The function to call when the user changes the value in the search field
   */
  updateSearchTerm: PropTypes.func.isRequired,
}

export default Search
