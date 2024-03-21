import "./checkbox.scss";
interface ICheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Checkbox = (props: ICheckboxProps) => {
  return (
    <label className="custom-checkbox">
      <input {...props} type="checkbox" />
    </label>
  );
};

export default Checkbox;
