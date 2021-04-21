import styled from "styled-components";

export const StyledReference = styled.div`
  display: inline-block;
`;

export const StyledPopper = styled.div`
  padding: 10px;
  border-radius: 5px;
  background: black;
  color: #fff;
`;

export const StyledArrow = styled.div`
  position: absolute;

  :before {
    display: block;
    width: 0px;
    height: 0px;
    content: "";
    border-width: 5px;
    border-style: solid;
    border-color: transparent;
    border-image: initial;
    margin: auto;
  }

  &[data-placement*="top"] {
    top: 100%;

    :before {
      border-top-color: black;
    }
  }
  &[data-placement*="bottom"] {
    bottom: 100%;

    :before {
      border-bottom-color: black;
    }
  }
  &[data-placement*="left"] {
    left: 100%;

    :before {
      border-left-color: black;
    }
  }
  &[data-placement*="right"] {
    right: 100%;

    :before {
      border-right-color: black;
    }
  }
`;
