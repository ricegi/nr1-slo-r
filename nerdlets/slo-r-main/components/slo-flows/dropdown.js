import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown as NR1Dropdown, DropdownItem } from 'nr1';

export default class Dropdown extends Component {
  handleOnClick = value => {
    const { onChange } = this.props;
    onChange(value);
  };

  dropdownTitleLookup(value, options) {
    const index = options.findIndex(option => option.value === value);
    if (index >= 0) {
      return options[index].label;
    }

    return null;
  }

  render() {
    const { value, items, label, disabled } = this.props;

    return (
      <NR1Dropdown
        label={label}
        disabled={disabled}
        title={this.dropdownTitleLookup(value, items)}
        className="define-slo-input"
      >
        {items?.map(({ label, value }, index) => (
          <DropdownItem
            key={index}
            onClick={() => {
              this.handleOnClick(value);
            }}
          >
            {label}
          </DropdownItem>
        ))}
      </NR1Dropdown>
    );
  }
}
Dropdown.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number,
  label: PropTypes.string,
  items: PropTypes.array.isRequired,
  disabled: PropTypes.bool
};
