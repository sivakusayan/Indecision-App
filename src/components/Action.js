import React from 'react';

const Action = (props) => {
  return (
    <div>
      <button 
        disabled={!props.hasOptions} 
        onClick={props.handleMakeDecision}
      >
        What should We do?
      </button>
    </div>
  );
}

export default Action;