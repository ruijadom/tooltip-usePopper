import React from "react";

type Alignment = "left" | "center" | "right";
type Position = "above" | "below";

export interface ITooltip {
  active?: boolean;
  children?: React.ReactNode;
  trigger?: React.ReactNode;
  alignment?: Alignment;
  position?: Position;
  onClose?: () => void;
  onOpen?: () => void;
  fullWidth?: boolean;
  height?: number;
  arrow?: boolean;
}
