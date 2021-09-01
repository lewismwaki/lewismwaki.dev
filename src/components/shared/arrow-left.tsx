import * as React from "react"
import styled from "styled-components"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Arrows = styled.svg`
  &.slick-arrow {
    &.slick-prev {
      &:before {
      }
    }
  }
`

function ArrowLeft(props) {
  const { className } = props

  return (
    <Arrows>
      <svg
        width={46.239}
        height={16.033}
        viewBox="0 0 46.239 16.033"
        {...props}
      >
        <defs>
          <style>{".a{fill:none;stroke:#4d00ff;stroke-width:2px}"}</style>
        </defs>
        <g transform="rotate(180 23.12 7.315)">
          <path className="a" transform="translate(0 6.614)" d="M0 0L44 0" />
          <path className="a" d="M35.652-.624l8.991 7.249-9 7.226" />
        </g>
      </svg>
    </Arrows>
  )
}

export default ArrowLeft
