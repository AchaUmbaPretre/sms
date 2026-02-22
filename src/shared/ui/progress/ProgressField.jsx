import { Progress } from "antd";
import { useEffect, useState } from "react";

const getStatusColor = (percent) => {
  if (percent < 40) return "exception";
  if (percent < 80) return "active";
  return "success";
};

const ProgressField = ({
  percent = 0,
  showInfo = true,
  strokeWidth = 10,
  type = "line",
  format,
  animationDuration = 800, // durée en ms
}) => {
  const [animatedPercent, setAnimatedPercent] = useState(0);

  useEffect(() => {
    let start = animatedPercent;
    const end = percent;
    const step = () => {
      const delta = (end - start) / 10;
      if (Math.abs(end - start) < 1) {
        setAnimatedPercent(end);
        return;
      }
      start += delta;
      setAnimatedPercent(start);
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [percent]);

  return (
    <Progress
      percent={Math.round(animatedPercent)}
      status={getStatusColor(animatedPercent)}
      strokeWidth={strokeWidth}
      type={type}
      showInfo={showInfo}
      format={format || ((p) => `${p}% complété`)}
    />
  );
};

export default ProgressField;