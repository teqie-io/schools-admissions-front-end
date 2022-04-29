export const selectStyle = {
  control: (styles) => ({
    ...styles,
    width: '9.063rem',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer'
  }),
  indicatorSeparator: () => null,
  input: (styles) => ({ ...styles, width: '6.25rem' }),
  indicatorsContainer: () => null,
  option: (styles, state) => ({
    ...styles,
    height: '2.188rem',
    padding: '0.438rem',
    backgroundColor: state.isSelected ? '#404eed' : 'white',
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#e2e2e2', color: 'black' }
  }),
  menu: (styles) => ({ ...styles, width: '8.313rem', marginLeft: '0.313rem' })
}

export const selectStyleWindow = {
  control: (styles) => ({
    ...styles,
    width: '7.813rem',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer'
  }),
  indicatorSeparator: () => null,
  input: (styles) => ({ ...styles, width: '6.25rem' }),
  indicatorsContainer: () => null,
  option: (styles, state) => ({
    ...styles,
    height: '2.188rem',
    padding: '0.438rem',
    backgroundColor: state.isSelected ? '#1890ff' : 'white',
    cursor: 'pointer',
    '&:hover': state.isSelected
      ? { backgroundColor: '#1890ff', color: 'white' }
      : { backgroundColor: '#e2e2e2', color: 'black' }
  }),
  menu: (styles) => ({ ...styles, width: '7.375rem', marginLeft: '0.313rem' })
}

export const selectStyleBig = {
  control: (styles) => ({
    ...styles,
    width: '10.938rem',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer'
  }),
  indicatorSeparator: () => null,
  input: (styles) => ({ ...styles, width: '6.25rem' }),
  indicatorsContainer: () => null,
  option: (styles, state) => ({
    ...styles,
    height: '2.188rem',
    padding: '0.438rem',
    backgroundColor: state.isSelected ? '#404eed' : 'white',
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#e2e2e2', color: 'black' }
  }),
  menu: (styles) => ({ ...styles, width: '10.188rem', marginLeft: '0.313rem' })
}

export const selectStyleDashboardHeader = {
  control: (styles) => ({
    ...styles,
    width: '14.063rem',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer'
  }),
  indicatorSeparator: () => null,
  input: (styles) => ({ ...styles, width: '6.25rem', color: '#0C53B7' }),
  indicatorsContainer: () => null,
  option: (styles, state) => ({
    ...styles,
    height: '2.188rem',
    padding: '0.438rem',
    backgroundColor: state.isSelected ? '#404eed' : 'white',
    cursor: 'pointer',
    '&:hover': state.isSelected
      ? { backgroundColor: '#404eed', color: 'white' }
      : { backgroundColor: '#e2e2e2', color: 'black' }
  }),
  menu: (styles) => ({ ...styles, width: '13.313rem', marginLeft: '0.375rem' }),
  singleValue: (styles) => ({ ...styles, color: '#0C53B7' })
}

export const selectStyleDashboardCharts = {
  control: (styles) => ({
    ...styles,
    width: '14.375rem',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer'
  }),
  indicatorSeparator: () => null,
  input: (styles) => ({ ...styles, width: '6.25rem', color: '#637381' }),
  indicatorsContainer: () => null,
  option: (styles, state) => ({
    ...styles,
    height: '2.188rem',
    padding: '0.438rem',
    backgroundColor: state.isSelected ? '#404eed' : 'white',
    cursor: 'pointer',
    '&:hover': state.isSelected
      ? { backgroundColor: '#404eed', color: 'white' }
      : { backgroundColor: '#e2e2e2', color: 'black' }
  }),
  menu: (styles) => ({ ...styles, width: '13.313rem', marginLeft: '0.375rem' }),
  singleValue: (styles) => ({ ...styles, color: '#637381' })
}

export const selectStyleCardApplication = {
  control: (styles) => ({
    ...styles,
    width: '14rem',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
    fontSize: '1.375rem',
    marginLeft: '0.875rem'
  }),
  indicatorSeparator: () => null,
  input: (styles) => ({ ...styles, width: '6.25rem', color: 'black' }),
  indicatorsContainer: () => null,
  option: (styles, state) => ({
    ...styles,
    height: '2.188rem',
    padding: '0.438rem',
    backgroundColor: state.isSelected ? '#404eed' : 'white',
    cursor: 'pointer',
    '&:hover': { backgroundColor: '#e2e2e2', color: 'black' }
  }),
  menu: (styles) => ({ ...styles, width: '13.313rem', marginLeft: '1.188rem' })
}

export const selectGroup = {
  container: (styles) => ({ ...styles, width: '100%' }),
  control: (styles) => ({
    ...styles,
    width: '100%',
    border: '1px solid  rgba(145, 158, 171, 0.32)',
    boxShadow: 'none',
    cursor: 'pointer',
    borderRadius: '0.5rem',
    padding: '0.25rem 0'
  }),
  indicatorSeparator: () => null,
  input: (styles) => ({ ...styles, width: '6.25rem', color: '#212B36' }),
  indicatorsContainer: () => null,
  option: (styles, state) => ({
    ...styles,
    height: '2.188rem',
    width: '100%',
    padding: '0.438rem',
    backgroundColor: state.isSelected ? '#e2e2e2' : 'white',
    color: '#212B36',
    cursor: 'pointer',
    '&:hover': state.isSelected ? { backgroundColor: '#e2e2e2' } : { backgroundColor: '#404eed', color: 'white' }
  }),
  menu: (styles) => ({ ...styles, width: '100%', zIndex: '2' }),
  singleValue: (styles) => ({ ...styles, color: '#212B36' })
}

export const selectGroupInstitutions = {
  container: (styles) => ({ ...styles, width: '25.25rem', height: '2.5rem' }),
  control: (styles, state) => ({
    ...styles,
    width: '25.25rem',
    border: '1px solid  rgba(145, 158, 171, 0.32)',
    boxShadow: 'none',
    cursor: 'pointer',
    height: '2.5rem',
    transition: '0.2s',
    borderRadius: '0.25rem',
    padding: '0rem 0',
    '&:hover': { borderColor: '#404eed', color: 'white' }
  }),
  indicatorSeparator: () => null,
  input: (styles) => ({ ...styles, width: '6.25rem', color: '#212B36' }),
  indicatorsContainer: () => null,
  option: (styles, state) => ({
    ...styles,
    height: '2.188rem',
    width: '24.25rem',
    padding: '0.438rem',
    backgroundColor: state.isSelected ? '#e2e2e2' : 'white',
    color: '#212B36',
    cursor: 'pointer',
    '&:hover': state.isSelected ? { backgroundColor: '#e2e2e2' } : { backgroundColor: '#404eed', color: 'white' }
  }),
  menu: (styles) => ({ ...styles, width: '25.25rem', zIndex: '2' }),
  singleValue: (styles) => ({ ...styles, color: '#212B36' })
}

export const modalSelect = {
  container: (styles) => ({ ...styles, width: '6.438rem', height: '2.25rem' }),
  control: (styles, state) => ({
    ...styles,
    width: '6.438rem',
    border: 'none',
    boxShadow: 'none',
    cursor: 'pointer',
    height: '2.25rem',
    transition: '0.2s',
    borderRadius: '0.25rem',
    backgroundColor: '#F6F6F7',
    padding: '0rem 0',
    '&:hover': { borderColor: '#404eed', color: 'white' }
  }),
  indicatorSeparator: () => null,
  input: (styles) => ({ ...styles, width: '6.25rem', color: '#212B36' }),
  indicatorsContainer: () => null,
  option: (styles, state) => ({
    ...styles,
    height: '2.188rem',
    width: '6.438rem',
    padding: '0.438rem',
    backgroundColor: state.isSelected ? '#e2e2e2' : 'white',
    color: '#212B36',
    cursor: 'pointer',
    '&:hover': state.isSelected ? { backgroundColor: '#e2e2e2' } : { backgroundColor: '#404eed', color: 'white' }
  }),
  menu: (styles) => ({ ...styles, width: '6.438rem', zIndex: '2' }),
  singleValue: (styles) => ({ ...styles, color: '#212B36' })
}

export const bloomSelect = {
  container: (styles) => ({ ...styles, width: '26.25rem', height: '2.8rem' }),
  control: (styles, state) => ({
    ...styles,
    width: '26.25rem',
    border: '1px solid #e5e7eb',
    boxShadow: 'none',
    cursor: 'pointer',
    height: '2.8rem',
    transition: 'all 0.1s',
    borderRadius: '0rem',
    backgroundColor: 'none',
    padding: '0rem 0',
    '&:hover': { borderColor: '#404eed', color: 'white' }
  }),
  indicatorSeparator: () => null,
  input: (styles) => ({ ...styles, width: '6.25rem', color: '#212B36' }),
  indicatorsContainer: () => null,
  option: (styles, state) => ({
    ...styles,
    height: '2.188rem',
    width: '26.25rem',
    padding: '0.438rem',
    backgroundColor: state.isSelected ? '#e2e2e2' : 'white',
    color: '#212B36',
    cursor: 'pointer',
    '&:hover': state.isSelected ? { backgroundColor: '#e2e2e2' } : { backgroundColor: '#404eed', color: 'white' }
  }),
  menu: (styles) => ({ ...styles, width: '26.25rem', zIndex: '2' }),
  singleValue: (styles) => ({ ...styles, color: '#212B36' })
}

export const bloomDetailsSelect = {
  container: (styles) => ({ ...styles, width: '25.5rem', height: '2.8rem' }),
  control: (styles, state) => ({
    ...styles,
    width: '25.5rem',
    border: '1px solid #e5e7eb',
    boxShadow: 'none',
    cursor: 'pointer',
    height: '2.8rem',
    transition: 'all 0.1s',
    borderRadius: '0rem',
    backgroundColor: 'none',
    padding: '0rem 0',
    '&:hover': { borderColor: '#404eed', color: 'white' }
  }),
  indicatorSeparator: () => null,
  input: (styles) => ({ ...styles, width: '6.25rem', color: '#212B36' }),
  indicatorsContainer: () => null,
  option: (styles, state) => ({
    ...styles,
    height: '2.188rem',
    width: '25.5rem',
    padding: '0.438rem',
    backgroundColor: state.isSelected ? '#e2e2e2' : 'white',
    color: '#212B36',
    cursor: 'pointer',
    '&:hover': state.isSelected ? { backgroundColor: '#e2e2e2' } : { backgroundColor: '#404eed', color: 'white' }
  }),
  menu: (styles) => ({ ...styles, width: '25.5rem', zIndex: '2' }),
  singleValue: (styles) => ({ ...styles, color: '#212B36' })
}

export const bloomDetailsSelectMini = {
  container: (styles) => ({ ...styles, width: '16.5rem', height: '2.8rem' }),
  control: (styles, state) => ({
    ...styles,
    width: '16.5rem',
    border: '1px solid #e5e7eb',
    boxShadow: 'none',
    cursor: 'pointer',
    height: '2.8rem',
    transition: 'all 0.1s',
    borderRadius: '0rem',
    backgroundColor: 'none',
    padding: '0rem 0',
    '&:hover': { borderColor: '#404eed', color: 'white' }
  }),
  indicatorSeparator: () => null,
  input: (styles) => ({ ...styles, width: '6.25rem', color: '#212B36' }),
  indicatorsContainer: () => null,
  option: (styles, state) => ({
    ...styles,
    height: '2.188rem',
    width: '16.5rem',
    padding: '0.438rem',
    backgroundColor: state.isSelected ? '#e2e2e2' : 'white',
    color: '#212B36',
    cursor: 'pointer',
    '&:hover': state.isSelected ? { backgroundColor: '#e2e2e2' } : { backgroundColor: '#404eed', color: 'white' }
  }),
  menu: (styles) => ({ ...styles, width: '16.5rem', zIndex: '2' }),
  singleValue: (styles) => ({ ...styles, color: '#212B36' })
}
