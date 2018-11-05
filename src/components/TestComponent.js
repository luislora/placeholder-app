/* eslint-disable react/prop-types */
import React from 'react';

class TestComponent extends React.PureComponent {

  constructor() {
    super();

    this.state = {
      items: [
        'item 1',
        'item 2',
        'item 3'
      ],
      info: 0
    };

    this.addItem = this.addItem.bind(this);

  }

  addItem() {
    const { items } = this.state;
    let nextIndex = items.length + 1;
    let nextItem = `item ${nextIndex}`;

    this.setState(
      { items:  [...items, nextItem]}
    );
  }

  render() {
    const { items } = this.state;
    return (
      <div>
        <Pure items={items} />
        <button onClick={this.addItem}>Add Item</button>
      </div>
    );
  }
}

class Pure extends React.PureComponent {
  render() {
    const {items} = this.props;

    return (
      <div>
        { items.length ?
          items.map((item, index) => <div key={index}>{item}</div>) :
          <div>
                  No items
          </div>
        }
      </div>
    );
  }

}

export default TestComponent;