import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Baby, Droplet, Utensils, Moon, Bath, Pill } from 'lucide-react'
import RecentActivities from '../components/recent-activities'
import QuickStats from '../components/quick-stats'

export default function Dashboard() {
  return (
    <main className="container mx-auto p-4 space-y-6">
      <h1 className="text-3xl font-semibold text-center text-primary mb-6">Baby Activity Tracker</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <Button variant="outline" className="h-24 flex flex-col items-center justify-center" asChild>
          <Link href="/log/diaper">
            <Droplet className="h-8 w-8 mb-2 text-blue-400" />
            <span>Diaper</span>
          </Link>
        </Button>
        <Button variant="outline" className="h-24 flex flex-col items-center justify-center" asChild>
          <Link href="/log/feeding">
            <Utensils className="h-8 w-8 mb-2 text-green-400" />
            <span>Feeding</span>
          </Link>
        </Button>
        <Button variant="outline" className="h-24 flex flex-col items-center justify-center" asChild>
          <Link href="/log/sleep">
            <Moon className="h-8 w-8 mb-2 text-purple-400" />
            <span>Sleep</span>
          </Link>
        </Button>
        <Button variant="outline" className="h-24 flex flex-col items-center justify-center" asChild>
          <Link href="/log/bath">
            <Bath className="h-8 w-8 mb-2 text-cyan-400" />
            <span>Bath</span>
          </Link>
        </Button>
        <Button variant="outline" className="h-24 flex flex-col items-center justify-center" asChild>
          <Link href="/log/medication">
            <Pill className="h-8 w-8 mb-2 text-red-400" />
            <span>Medication</span>
          </Link>
        </Button>
        <Button variant="outline" className="h-24 flex flex-col items-center justify-center" asChild>
          <Link href="/baby-info">
            <Baby className="h-8 w-8 mb-2 text-pink-400" />
            <span>Baby Info</span>
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
            <RecentActivities />
          </CardContent>
        </Card>
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold mb-4">Quick Stats</h2>
            <QuickStats />
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
