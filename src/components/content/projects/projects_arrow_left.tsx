import React from "react";

const ProjectsArrowLeft = (props) => {
  return (
    <svg width={46.239} height={16.033} viewBox='0 0 46.239 16.033' {...props}>
      <defs>
        <style>
          {".projectsArrowLeft{fill:none;stroke:#4d00ff;stroke-width:2px}"}
        </style>
      </defs>
      <g transform='rotate(180 23.12 7.315)'>
        <path
          className='projectsArrowLeft'
          transform='translate(0 6.614)'
          d='M0 0L44 0'
        />
        <path
          className='projectsArrowLeft'
          d='M35.652-.624l8.991 7.249-9 7.226'
        />
      </g>
    </svg>
  );
};

export default ProjectsArrowLeft;
