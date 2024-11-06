import { useState, useCallback, useEffect } from "react";

interface UseResizableProps {
  minWidth?: number;
  maxWidth?: number;
  defaultWidth?: number;
}

export const useResizable = ({
  minWidth = 160,
  maxWidth = Infinity,
  defaultWidth = 160,
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
        const newWidth = Math.max(minWidth, Math.min(maxWidth, e.clientX));
        setWidth(newWidth);
      }
    },
    [isResizing, minWidth, maxWidth]
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
      style: { width: `${width}px` },
      className: "relative select-none",
    },
    resizerProps: {
      onMouseDown: startResizing,
      className: "absolute top-0 right-0 w-1 h-full cursor-ew-resize",
    },
  };
};
