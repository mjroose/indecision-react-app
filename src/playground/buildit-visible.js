class Visibility extends React.Component {
  constructor(props) {
    super(props);

    this.handleToggle = this.handleToggle.bind(this);
    this.state = {
      visible : false
    }
  }
  handleToggle() {
    this.setState((prevState) => {
      return {
        visible: !prevState.visible
      }
    });
  }
  render() {
    return(
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggle}>{this.state.visible ? 'Hide Details' : 'Show Details'}</button>
        {this.state.visible && <p>Here are some additional details</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visibility />, document.getElementById('app'));

// let visible = false;

// const onToggle = () => {
//   visible = !visible;
//   render();
// };

// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={onToggle}>{visible ? 'Hide Details' : 'Show Details'}</button>
//       {visible && <p>Here are some additional details</p>}
//     </div>
//   );
  
//   const appRoot = document.getElementById('app');
  
//   ReactDOM.render(template, appRoot);
// }

// render();
