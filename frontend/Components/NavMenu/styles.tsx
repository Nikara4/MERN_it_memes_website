import { variables } from '../../styles/variables';

interface MenuStyles {
  box: object;
  nav: object;
  list: object;
}

export const styles: MenuStyles = {
  box: {
    borderRadius: `${variables.borderRadius}`,
    margin: `${variables.margin}`,
    flex: `${variables.flex}`,
    padding: '0.3rem 0.7rem',
    backgroundColor: `${variables.backgroundColor}`,
    backdropFilter: `${variables.backdropFilter}`,
    boxShadow: `${variables.boxShadow}`,
  },
  nav: {},
  list: {},
};
