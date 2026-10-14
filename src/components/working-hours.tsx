const DAYS = ["Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota", "Nedjelja"];

const HOURS = [
  "8:00 - 16:00",
  "8:00 - 20:00",
  "8:00 - 20:00",
  "8:00 - 16:00",
  "8:00 - 16:00",
  "9:00 - 16:00",
  "zatvoreno",
];

export function WorkingHours({ onDark = false }: { onDark?: boolean }) {
  // getDay(): 0 = Sunday ... 6 = Saturday. Map to our array index (Mon=0).
  const jsDay = new Date().getDay();
  const todayIdx = jsDay === 0 ? 6 : jsDay - 1;

  const color = onDark ? "#FFFFFF" : "#1C1B19";
  const hairline = onDark ? "rgba(255,255,255,0.14)" : "rgba(43,43,43,0.14)";

  return (
    <div
      className="hours-table"
      style={{
        color,
        maxWidth: 360,
        width: "100%",
      }}
    >
      {DAYS.map((day, i) => {
        const isToday = i === todayIdx;
        return (
          <div
            key={day}
            className="hours-row"
            style={{
              borderBottom: i < DAYS.length - 1 ? `1px solid ${hairline}` : "none",
            }}
          >
            <span
              className="hours-day"
              style={{
                fontWeight: isToday ? 700 : 400,
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
              }}
            >
              {day}
              {isToday && <span className="hours-today">danas</span>}
            </span>
            <span
              className="hours-time"
              style={{
                fontWeight: isToday ? 700 : 400,
              }}
            >
              {HOURS[i]}
            </span>
          </div>
        );
      })}
    </div>
  );
}
