import React from 'react'
import styled, { css } from 'styled-components'
import OutlineInstaclone from '../outlines/instaclone.svg'


export const Logo = styled(OutlineInstaclone)`
  ${(p) => p.fill && css`
    & path {
      fill: ${p.fill};
    }
  `}
`
