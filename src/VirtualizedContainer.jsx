import React from 'react';
import classnames from 'classnames';

const VirtualizedContainer = React.createClass({
  render: function() {
    let className = classnames('re-vitualizedcontainer', this.props.className);

    return (
      <section className={className}>
        <div className="re-vitualizedcontainer__content">
          {this.props.children}
        </div>
      </section>
    );
  }

});


export default VirtualizedContainer;