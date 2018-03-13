import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Litter } from '../atoms'
import { Close } from '../outlines'


export const ModalWrapper = styled.div`
  padding: 0 4rem;
  display: flex;
  align-items: center;
  min-height: 100%;
  z-index: 130;
`

export const ModalContent = styled.div`
  margin: auto;
  width: 100%;
  max-width: 935rem;
`

export const ModalButton = styled.div`
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  cursor: pointer;
`

export const Modal = ({ onClose, children }) => (
  <Litter onClick={onClose}>
    <ModalWrapper>
      <ModalContent>{children}</ModalContent>
      <ModalButton>
        <Close />
      </ModalButton>
    </ModalWrapper>
  </Litter>
)

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
}

Modal.defaultProps = {
  children: undefined,
  onClose: undefined,
}
