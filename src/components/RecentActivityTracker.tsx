import { Droplet, Utensils, Moon, Bath, Pill } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

type Activity = {
  type: "Diaper" | "Feeding" | "Sleep" | "Bath" | "Medication";
  time: string;
  details?: string;
};

const activities: Activity[] = [
  { type: "Diaper", time: "10 minutes ago", details: "Wet" },
  { type: "Feeding", time: "2 hours ago", details: "Breast, 15 minutes" },
  { type: "Sleep", time: "5 hours ago", details: "Nap, 1 hour" },
  { type: "Bath", time: "Yesterday, 8:00 PM" },
  { type: "Medication", time: "2 days ago", details: "Vitamin D drops" },
];

const activityIcons = {
  Diaper: Droplet,
  Feeding: Utensils,
  Sleep: Moon,
  Bath: Bath,
  Medication: Pill,
};

const activityColors = {
  Diaper: "text-blue-400",
  Feeding: "text-green-400",
  Sleep: "text-purple-400",
  Bath: "text-cyan-400",
  Medication: "text-red-400",
};

export default function RecentActivities() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Activities</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="space-y-4">
          {activities.map((activity, index) => {
            const Icon = activityIcons[activity.type];
            return (
              <li key={index} className="flex items-start space-x-4">
                <div className={`mt-1 ${activityColors[activity.type]}`}>
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-grow">
                  <p className="text-sm font-medium">{activity.type}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                  {activity.details && (
                    <p className="text-xs text-gray-600 mt-1">
                      {activity.details}
                    </p>
                  )}
                </div>
              </li>
            );
          })}
        </ul>
      </CardContent>
    </Card>
  );
}
