function Container({ children, className = '' }) {
  return <div className={`app-container ${className}`.trim()}>{children}</div>;
}

export default Container;
