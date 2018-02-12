let visible = false;

const onToggle = () => {
  visible = !visible;
  render();
};

const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={onToggle}>{visible ? 'Hide Details' : 'Show Details'}</button>
      {visible && <p>Here are some additional details</p>}
    </div>
  );
  
  const appRoot = document.getElementById('app');
  
  ReactDOM.render(template, appRoot);
}

render();
