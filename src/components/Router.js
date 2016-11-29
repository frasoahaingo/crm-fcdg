import React from 'react';
import { StaticRouter } from 'react-router';

class Router extends React.Component {
  componentWillMount() {
    this.off = this.props.history.listen(() => this.forceUpdate());
  }
  componentWillUnmount() {
    this.off();
  }
  render () {
    const { location, action, push, replace } = this.props.history;
    return (
      <StaticRouter
        history={this.props.history}
        location={location}
        action={action}
        onPush={push}
        onReplace={replace}
      >
        {this.props.children}
      </StaticRouter>
    )
  }
}

export default Router;
