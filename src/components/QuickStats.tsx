import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

type Stat = {
  label: string;
  value: string;
  subtext?: string;
};

const stats: Stat[] = [
  {
    label: "Last Diaper Change",
    value: "2h 15m ago",
    subtext: "Next change soon",
  },
  { label: "Last Feeding", value: "1h 30m ago", subtext: "Breast, 20 minutes" },
  { label: "Total Sleep Today", value: "4h 45m", subtext: "3 naps" },
  { label: "Next Medication", value: "In 3h 20m", subtext: "Vitamin D drops" },
];

export default function QuickStats() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Stats</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {stats.map((stat, index) => (
            <div key={index} className="bg-muted p-4 rounded-lg">
              <h3 className="text-sm font-medium text-muted-foreground">
                {stat.label}
              </h3>
              <p className="text-2xl font-semibold mt-1">{stat.value}</p>
              {stat.subtext && (
                <p className="text-xs text-muted-foreground mt-1">
                  {stat.subtext}
                </p>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
