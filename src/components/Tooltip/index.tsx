import React, { useState } from "react";
import { usePopper } from "react-popper";
import { ITooltip } from "./types";

import { StyledReference, StyledPopper, StyledArrow } from "./styles";

// Placement Object for position popup
const placementMap = {
  above: {
    left: "top-start",
    right: "top-end",
    center: "top"
  },
  below: {
    left: "bottom-start",
    right: "bottom-end",
    center: "bottom"
  }
} as any;

const Dropdown = ({
  active,
  children,
  trigger = null,
  position = "below",
  alignment = "left",
  fullWidth = false,
  height,
  arrow = false,
  onOpen,
  onClose
}: ITooltip) => {
  const [isOpen, setIsOpen] = useState(active);
  const [referenceElement, setReferenceElement] = useState<any>(null);
  const [popperElement, setPopperElement] = useState<any>(null);
  const [arrowElement, setArrowElement] = useState<any>(null);

  const placement = placementMap[position][alignment];

  const { styles, attributes } = usePopper(referenceElement, popperElement, {
    placement,
    modifiers: [
      { name: "arrow", options: { element: arrowElement } },
      {
        name: "offset",
        options: {
          offset: [0, 5]
        }
      }
    ]
  });

  return (
    <>
      <StyledReference
        ref={setReferenceElement}
        onClick={() => setIsOpen(!isOpen)}
      >
        {trigger}
      </StyledReference>
      {isOpen && (
        <StyledPopper
          ref={setPopperElement}
          data-placement={placement}
          style={styles.popper}
          {...attributes.popper}
        >
          {children}
          <StyledArrow
            ref={setArrowElement}
            data-placement={placement}
            style={styles.arrow}
            {...attributes.arrow}
          />
        </StyledPopper>
      )}
    </>
  );
};

export default Dropdown;
