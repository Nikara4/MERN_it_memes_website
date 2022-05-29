import styled from 'styled-components';

export const ProfileBox = styled.div`
  background-color: transparent !important;
  display: flex !important;
  align-items: center !important;
  flex-basis: 15% !important;
  margin: 0 !important;
  @media (max-width: 850px) {
    background-color: transparent !important;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  flex-basis: 17%;
  margin-left: 0;
  margin-right: 1%;
  border-radius: 7px;
  background-color: rgba(250, 249, 246, 0.4);
  z-index: 2;
  &:hover {
    background-color: rgba(250, 249, 246, 0.5);
  }
  & input::placeholder {
    color: #f9f6ee;
  }
  @media (max-width: 1023px) {
    display: none;
  }
`;

// [theme.breakpoints.down('lg')]: {
//   height: '10vh',
// },

//   [theme.breakpoints.down('md')]: {
//     display: 'none'
//   },
