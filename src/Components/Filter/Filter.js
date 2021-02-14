import React from 'react';
import { connect } from 'react-redux';
import { searchFilter } from '../../redux/userContacts/contactsActions';
import './Filter.css';
import contactsSelectors from '../../redux/userContacts/contactsSelectors';

const Filter = ({ filter, searchFilterValue }) => {
  const onHendleFilter = e => {
    searchFilterValue(e.target.value);
  };

  return (
    <div className="conteiner-filter">
      <label className="label-filter">
        <input
          className="input-filter"
          type="text"
          onChange={onHendleFilter}
          value={filter}
        />
      </label>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    filter: contactsSelectors.getFilter(state),
  };
};

const mapDispatchToProps = dispatch => {
  return {
    searchFilterValue: value => {
      dispatch(searchFilter(value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
