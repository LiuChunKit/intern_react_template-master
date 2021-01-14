import React from 'react';
import Select from 'react-select';

const card = 'rgb(36, 37, 38)';
const light_dark = 'rgb(78, 79, 80)';
const disabled_background = 'rgb(102, 103, 104)';

// you set your drop down list(DDL) styles here
const styles = {
  control: styles => ({
    backgroundColor: light_dark,
    alignItems: "center",
    borderRadius: "4px",
    border: "1px solid transparent",
    justifyContent: "space-between",
    minHeight: "38px",
    minWidth: "100px",
    margin: "5px",
    position: "relative",
    outline: "0!important",
    display: "flex"
    // width: "100px"
  }),
  singleValue: styles => ({
    color: "white"
  }),
  menu: styles => ({
    backgroundColor: card,
    top: "100%",
    borderRadius: "4px",
    // margin: "10px 0",
    position: "absolute",
    width: "100%",
    zIndex: "1",
    boxShadow: "0 0 2px grey"
  }),
  menuList: styles => ({
    maxHeight: "300px",
    overflowY: "auto",
    padding: "10px 0",
    position: "relative"
  }),
  multiValue: styles => ({
    backgroundColor: "gray",
    borderRadius: "2px",
    display: "flex",
    margin: "2px",
    minWidth: "0",
    boxSizing: "border-box",
  }),
  multiValueLabel: styles => ({
    color: "white",
    borderRadius: "2px",
    fontSize: "85%",
    overflow: "hidden",
    padding: "3px",
    paddingLeft: "6px",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    boxSizing: "border-box",
  }),
  multiValueRemove: styles => ({
    alignItems: "center",
    borderRadius: "2px",
    display: "flex",
    paddingLeft: "4px",
    paddingRight: "4px",
    boxSizing: "border-box",
    border: "1px solid transparent",

    '&:hover': {
      backgroundColor: "rgb(58, 59, 60)",
      border: "1px solid rgb(166, 212, 250)",
      cursor: "pointer"
    }
  }),
  option: (styles, { data, isDisabled, isFocused, isSelected }) => {
    return {
      backgroundColor: isDisabled ? disabled_background : isSelected ? light_dark : 'rgb(36,37,38)',
      color: "inherit",
      display: "block",
      padding: "10px",
      width: "100%",
      border: "1px solid transparent",

      '&:hover': {
        backgroundColor: light_dark,
        borderColor: "rgb(166, 212, 250)"
      }
    }
  }
}

export default class AppendDDL extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: this.props.selectedOption,
      width: this.props.width,
      required: this.props.required
    };
  }
  
  handleChange = selectedOption => {
    this.setState({ selectedOption });
    var returnStr = '\n';

    if(Array.isArray(selectedOption)) {
      selectedOption.forEach(element => {
        returnStr += element.value + '\n'
      });

      this.props.returnSelectedSubjects(returnStr);
    }
    else{
      this.props.returnSelectedState(selectedOption.value);
    }
  };

  render() {
    return (
      <>
        <Select className={this.props.class}
          id={this.props.id}
          value={this.state.selectedOption}
          onChange={this.handleChange}
          options={this.props.options}
          styles={styles}
          isOptionDisabled={(option) => option.disabled === 'yes'}
          isMulti={this.props.isMulti}
          isDisabled={this.props.isDisabled}
          closeMenuOnSelect={this.props.closeMenuOnSelect}
          defaultValue={this.props.defaultValue}
        //   menuIsOpen
          menuIsOpen={this.props.menuIsOpen}
        />
      </>
    )
  }
}

