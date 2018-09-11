import React from 'react';

import Action from './Action';
import Form from './Form';
import Header from './Header';
import Options from './Options';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
  state = {
    options: this.props.options,
    selectedOption: this.props.selectedOption
  }
  handleMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    this.setState(() => ({ selectedOption: this.state.options[randomNum] }))
  }
  handleClearDecision = () => {
    this.setState(() => ({ selectedOption: undefined }))
  }
  handleDeleteOptions = () => {
    if (this.state.options.length > 0) {
      this.setState(() => ({ options: [] }));
    }
  }
  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => option !== optionToRemove)
    }));
  }
  handleAddOption = (option) => {
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }
    this.setState((prevState) => ({ 
      options: prevState.options.concat([option]) 
    }));
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handleMakeDecision={this.handleMakeDecision}
        />
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <Form handleAddOption={this.handleAddOption}/>
        <OptionModal 
          selectedOption={this.state.selectedOption}
          handleClearDecision={this.handleClearDecision}
        />
      </div>
    );
  }
}

IndecisionApp.defaultProps = {
  options: [],
  selectedOption: undefined
}
