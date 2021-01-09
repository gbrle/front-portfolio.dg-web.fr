import React from 'react';

export default React.createContext({
  sideBarStatus: false,
  sideBarToggle: () => {},
  sideBarToggleExperiences: () => {},
  selectExperience: () => {},
});