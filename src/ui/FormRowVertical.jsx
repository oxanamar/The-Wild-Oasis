import styled from "styled-components";
import { StyleSheetManager } from "styled-components";
import PropTypes from "prop-types";
import isPropValid from "@emotion/is-prop-valid";

const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  padding: 1.2rem 0;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Error = styled.span`
  font-size: 1.4rem;
  color: var(--color-red-700);
`;

function FormRowVertical({ label, error, children, variation }) {
  return (
    <StyleSheetManager shouldForwardProp={(prop) => isPropValid(prop)}>
      <StyledFormRow variation={variation}>
        {label && <Label htmlFor={children.props.id}>{label}</Label>}
        {children}
        {error && <Error>{error}</Error>}
      </StyledFormRow>
    </StyleSheetManager>
  );
}

FormRowVertical.propTypes = {
  label: PropTypes.string,
  error: PropTypes.string,
  children: PropTypes.element.isRequired,
  variation: PropTypes.string,
};

export default FormRowVertical;
