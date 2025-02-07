import { colors } from "@gurgelio/tokens";
import { getContrast } from "polished";

export function ColorsGrid() {
  return Object.entries(colors).map(([name, hex]) => {
    return (
      <div key={name} style={{ backgroundColor: hex, padding: "2rem" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "monospace",
            color: getContrast(hex, "#fff") < 3.5 ? "#000" : "#fff",
          }}
        >
          <strong>${name}</strong>
          <span>{hex}</span>
        </div>
      </div>
    );
  });
}
