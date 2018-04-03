import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { Litter } from '../atoms'
import { Close } from '../outlines'


export const ModalWrapper = styled.div`
  display: flex;
  align-items: center;
`.extend.withConfig({ componentId: 'ModalContent' })``

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100vw;
`

export const ModalButton = styled.div`
  position: absolute;
  top: 0.4rem;
  right: 0.4rem;
  cursor: pointer;
`

const stopPropagation = (event) => {
  event.stopPropagation()
}

export const Modal = ({ onClose, children, opened }) => opened ? (
  <Litter onClick={onClose}>
    <ModalWrapper onClick={stopPropagation}>
      <ModalContent>{children}</ModalContent>
      <ModalButton onClick={onClose}>
        <Close />
      </ModalButton>
    </ModalWrapper>
  </Litter>
) : null

Modal.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func,
  opened: PropTypes.bool,
}

Modal.defaultProps = {
  children: null,
  onClose: undefined,
  opened: false,
}
