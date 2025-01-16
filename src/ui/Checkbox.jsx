import styled from "styled-components";
import PropTypes from "prop-types";

const StyledCheckbox = styled.div`
  display: flex;
  gap: 1.6rem;

  & input[type="checkbox"] {
    height: 2.4rem;
    width: 2.4rem;
    outline-offset: 2px;
    transform-origin: 0;
    accent-color: var(--color-brand-600);
  }

  & input[type="checkbox"]:disabled {
    accent-color: var(--color-brand-600);
  }

  & label {
    flex: 1;

    display: flex;
    align-items: center;
    gap: 0.8rem;
  }
`;

function Checkbox({ checked, onChange, disabled = false, id, children }) {
  return (
    <StyledCheckbox>
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <label htmlFor={!disabled ? id : ""}>{children}</label>
    </StyledCheckbox>
  );
}

Checkbox.propTypes = {
  checked: PropTypes.bool.isRequired, // Ensure 'checked' is a required boolean
  onChange: PropTypes.func.isRequired, // Ensure 'onChange' is a required function
  disabled: PropTypes.bool, // Optional boolean with a default value
  id: PropTypes.string.isRequired, // Ensure 'id' is a required string
  children: PropTypes.node, // Optional React node for the label content
};

export default Checkbox;
