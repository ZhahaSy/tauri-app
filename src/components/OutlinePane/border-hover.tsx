import React, { useMemo } from "react";

interface BorderHoverProps {
}

const findClosestComponent = (element: HTMLElement | null): HTMLElement | null => {
  if (!element) return null;
  if (element.hasAttribute('componentid')) return element;
  return findClosestComponent(element.parentElement);
};

const BorderHover: React.FC<BorderHoverProps> = () => {
  const [hoverElement, setHoverElement] = React.useState<HTMLElement | null>(null);

  React.useEffect(() => {

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.hasAttribute('data-hover-border')) return;
      
      const closestComponent = findClosestComponent(target);
      if (closestComponent) {
        setHoverElement(closestComponent);
      }
    };

    const handleMouseLeave = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.hasAttribute('data-hover-border')) return;

      const closestComponent = findClosestComponent(target);
      if (closestComponent === hoverElement) {
        setHoverElement(null);
      }
    };

    document.addEventListener('mouseover', handleMouseEnter, true);
    document.addEventListener('mouseout', handleMouseLeave, true);

    return () => {
      document.removeEventListener('mouseover', handleMouseEnter, true);
      document.removeEventListener('mouseout', handleMouseLeave, true);
    };
  }, [hoverElement]);

  const computedActiveStyle: React.CSSProperties = useMemo(() => {
    if (!hoverElement) return { display: "none", position: "absolute" };

    return {
      position: "absolute",
      left: (hoverElement as HTMLElement)?.offsetLeft,
      top: (hoverElement as HTMLElement)?.offsetTop,
      width: (hoverElement as HTMLElement)?.offsetWidth,
      height: (hoverElement as HTMLElement)?.offsetHeight,
    };
  }, [hoverElement]);

  const title = useMemo(() => {
    return hoverElement?.getAttribute('componentlabel') || ''
  }, [hoverElement])

  return (
    <div
      data-hover-border="true"
      style={{
        ...computedActiveStyle,
        opacity:.4,
        border: "1px dashed #2191f3",
        zIndex: 2024,
        pointerEvents: "none",
        color: '#2191f3'
      }}
    >
      <div style={{
        position: 'absolute',
        left: 0,
        top: '-20px'
      }}>{title}</div>
    </div>
  );
};

export default BorderHover;
