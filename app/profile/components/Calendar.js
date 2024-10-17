"use client";

import React, { useEffect } from "react";
import CalHeatmap from "cal-heatmap";
import "cal-heatmap/cal-heatmap.css"; // Ensure the CalHeatmap CSS is included

const Calendar = ({ calData }) => {
  const cal = new CalHeatmap();
  useEffect(() => {
    cal.paint({
      data: {
        source: calData,
        x: "date",
        y: "value",
      },
      verticalOrientation: true,
      range: 1,
      itemSelector: "#cal",
      scale: {
        color: { type: "diverging", scheme: "PRGn", domain: [0, 10] },
      },
      domain: {
        type: "month",
        padding: [15, 0, 10, 0],
      },
      subDomain: {
        type: "xDay",
        radius: 10,
        width: 40,
        height: 40,
        label: "D",
      },
      animationDuration: 500,
    });
  }, []);

  return <div id="cal"></div>;
};

export default Calendar;
