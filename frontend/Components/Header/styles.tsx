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
  heading: {
    color: '#f5f6fa',
    textDecoration: 'none',
    fontSize: '2.4rem',
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
