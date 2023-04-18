import '../styles/Alert.css';

function Alert({ children, alert }) {
  const style = alert || '';
  return <div className={'alert ' + style}>{children}</div>;
}

export default Alert;
