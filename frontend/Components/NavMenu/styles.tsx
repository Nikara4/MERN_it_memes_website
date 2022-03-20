interface MenuStyles {
  box: object;
  nav: object;
  list: object;
}

export const styles: MenuStyles = {
  box: {
    borderRadius: '17px',
    margin: '1rem 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.3rem 2rem',
    backgroundColor: 'rgba(255, 255, 255, .25)',
    backdropFilter: 'blur(5px)',
  },
  nav: {
    borderRadius: '17px',
    margin: '1rem 0px',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0.3rem 2rem',
    backgroundColor: 'rgba(255, 255, 255, .25)',
    backdropFilter: 'blur(5px)',
  },
  list: {
    marginLeft: '15px',
  },
};
