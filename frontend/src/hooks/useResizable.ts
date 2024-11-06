import { useState, useCallback, useEffect } from "react";

interface UseResizableProps {
  minWidth?: number;
  maxWidth?: number;
  defaultWidth?: number;
  position?: "left" | "right";
}

export const useResizable = ({
  minWidth = 160,
  maxWidth = Infinity,
  defaultWidth = 160,
  position = "left",
}: UseResizableProps = {}) => {
  const [width, setWidth] = useState(defaultWidth);
  const [isResizing, setIsResizing] = useState(false);

  const startResizing = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setIsResizing(true);
  }, []);

  const stopResizing = useCallback(() => {
    setIsResizing(false);
  }, []);

  const resize = useCallback(
    (e: MouseEvent) => {
      e.preventDefault();
      if (isResizing) {
        const newWidth =
          position === "left"
            ? Math.max(minWidth, Math.min(maxWidth, e.clientX))
            : Math.max(minWidth, Math.min(maxWidth, window.innerWidth - e.clientX));
        setWidth(newWidth);
      }
    },
    [isResizing, minWidth, maxWidth, position]
  );

  useEffect(() => {
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
    return () => {
      window.removeEventListener("mousemove", resize);
      window.removeEventListener("mouseup", stopResizing);
    };
  }, [resize, stopResizing]);

  return {
    width,
    isResizing,
    startResizing,
    resizableProps: {
      style: {
        width: `${width}px`,
        ...(position === "right" && { marginLeft: "auto" }),
      },
      className: "relative select-none",
    },
    resizerProps: {
      onMouseDown: startResizing,
      className: `absolute top-0 ${
        position === "left" ? "right" : "left"
      }-0 w-1 h-full cursor-ew-resize`,
    },
  };
};
