handleChange(event) {
  const { name, value } = event.target;
  const { onChange } = this.props;
  onChange(name, value);
}

export default handleChange;