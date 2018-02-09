import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'


const marginDir = (p) => p.flow === 'column'
  ? 'top'
  : 'left'

export const Layout = styled.div`
  display: flex;
  flex-direction: ${(p) => p.flow};
  flex-wrap: ${(p) => p.wrap};
  padding: ${(p) => `${p.padding}rem`};

  ${(p) => p.gap && css`
    & > * + * {
      margin-${marginDir}: ${p.gap}rem;
    }
  `}
`

Layout.propTypes = {
  flow: PropTypes.oneOf(['column', 'row']).isRequired,
  wrap: PropTypes.oneOf(['wrap', 'nowrap']),
  padding: PropTypes.number,
  gap: PropTypes.number,
}

Layout.defaultProps = {
  wrap: 'nowrap',
  padding: 0,
  gap: 0,
}
