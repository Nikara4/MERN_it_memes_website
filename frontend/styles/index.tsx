import { variables } from './variables';

interface Home {
  container: object;
}

export const styles: Home = {
  container: {
    // borderRadius: `${variables.borderRadius}`,
    margin: `${variables.margin}`,
    flex: `${variables.flex}`,
    padding: '0.3rem 1rem',
    // backgroundColor: `${variables.backgroundColor}`,
    // backdropFilter: `${variables.backdropFilter}`,
    // boxShadow: `${variables.boxShadow}`,
  },
};
