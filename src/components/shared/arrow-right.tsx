import * as React from "react"
import styled from "styled-components"

const Arrows = styled.svg`
  &.slick-arrow {
    right: 32px;
    bottom: 32px;
    font-size: 0px;
    line-height: 0;
    position: absolute;
    display: block;
    width: 20px;
    height: 20px;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
    &.slick-next {
      &:before {
      }
    }
  }
`
function ArrowRight(props) {
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
        <g transform="translate(0 1.402)">
          <path className="a" transform="translate(0 6.614)" d="M0 0L44 0" />
          <path className="a" d="M35.652-.624l8.991 7.249-9 7.226" />
        </g>
      </svg>
    </Arrows>
  )
}

export default ArrowRight
