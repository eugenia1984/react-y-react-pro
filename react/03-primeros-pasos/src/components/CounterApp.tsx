import PropTypes from 'prop-types';

export const CounterApp = ( { value } ) => {
  <div>
    <h2>CounterApp</h2>
    <h3>{value}</h3>
  </div>
}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 2
}