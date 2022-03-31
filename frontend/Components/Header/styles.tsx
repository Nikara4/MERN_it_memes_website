import '@fontsource/roboto/500.css';
import { variables } from '../../styles/variables';

interface HeaderStyles {
  appBar: object;
  heading: object;
  image: object;
  toolbar: object;
  profile: object;
  userName: object;
  brandContainer: object;
}

export const styles: HeaderStyles = {
  appBar: {
    borderRadius: `${variables.borderRadius}`,
    margin: '1rem 0px',
    flex: `${variables.flex}`,
    padding: '0.7rem 2rem',
    backgroundColor: '#7d5fff',
    backdropFilter: 'blur(5px)',
  },
  heading: {
    textDecoration: 'none',
    fontSize: '2.4rem',
    fontWeight: '500',
    color: '#ECECEC',
  },
  image: {
    marginLeft: '15px',
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '335px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '18px',
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
};
