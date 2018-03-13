import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'


const MenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const MenuItem = styled.button`
  margin: 0;
  padding: 0 1.6rem;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 5rem;
  color: #262626;
  background-color: #fff;
  border: none;
  cursor: pointer;
  outline: none;

  &:not(:last-child) {
    border-bottom: 1px solid #dbdbdb;
  }

  &:hover {
    background-color: #efefef;
  }
`

export const Menu = ({ items, onItemClick, onCancel }) => (
  <MenuWrapper>
    {items.map(({ id, title }) => (
      <MenuItem key={id} onClick={(event) => onItemClick(event, id)}>
        {title}
      </MenuItem>
    ))}
    <MenuItem onClick={onCancel}>Cancel</MenuItem>
  </MenuWrapper>
)

Menu.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    title: PropTypes.string,
  })),
  onItemClick: PropTypes.func.isRequired,
  onCancel: PropTypes.func,
}

Menu.defaultProps = {
  items: [],
  onCancel: null,
}
