import React from 'react'
import WindowWrapper from '../hoc/WindowWrapper';

const Resume = () => {
  return (
    <div>Resume</div>
  )
};

const ResuemWindow = WindowWrapper(Resume, 'resume');

export default ResuemWindow