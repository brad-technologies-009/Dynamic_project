"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, MapPin, ArrowLeft, CheckCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

// Schedule data defined in code
const COACHES = [
  {
    id: 1,
    name: "Alex Thompson",
    specialty: "Strength & Conditioning",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
    price: "$80/session",
  },
  {
    id: 2,
    name: "Jessica Martinez",
    specialty: "HIIT & Weight Loss",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.8,
    price: "$75/session",
  },
  {
    id: 3,
    name: "David Kim",
    specialty: "Yoga & Wellness",
    image: "/placeholder.svg?height=100&width=100",
    rating: 4.9,
    price: "$70/session",
  },
]

const SCHEDULE_DATA = {
  "2024-01-15": [
    {
      id: 1,
      time: "06:00",
      coach: "Alex Thompson",
      type: "Strength Training",
      duration: "60 min",
      spots: 3,
      maxSpots: 8,
      location: "Studio A",
    },
    {
      id: 2,
      time: "07:30",
      coach: "Jessica Martinez",
      type: "HIIT Cardio",
      duration: "45 min",
      spots: 2,
      maxSpots: 12,
      location: "Studio B",
    },
    {
      id: 3,
      time: "09:00",
      coach: "David Kim",
      type: "Morning Yoga",
      duration: "60 min",
      spots: 5,
      maxSpots: 15,
      location: "Studio C",
    },
    {
      id: 4,
      time: "12:00",
      coach: "Alex Thompson",
      type: "Lunch Strength",
      duration: "45 min",
      spots: 1,
      maxSpots: 6,
      location: "Studio A",
    },
    {
      id: 5,
      time: "17:00",
      coach: "Jessica Martinez",
      type: "Evening HIIT",
      duration: "45 min",
      spots: 4,
      maxSpots: 12,
      location: "Studio B",
    },
    {
      id: 6,
      time: "18:30",
      coach: "David Kim",
      type: "Relaxation Yoga",
      duration: "60 min",
      spots: 8,
      maxSpots: 15,
      location: "Studio C",
    },
  ],
  "2024-01-16": [
    {
      id: 7,
      time: "06:30",
      coach: "Jessica Martinez",
      type: "Morning HIIT",
      duration: "45 min",
      spots: 3,
      maxSpots: 12,
      location: "Studio B",
    },
    {
      id: 8,
      time: "08:00",
      coach: "Alex Thompson",
      type: "Strength Basics",
      duration: "60 min",
      spots: 2,
      maxSpots: 8,
      location: "Studio A",
    },
    {
      id: 9,
      time: "10:00",
      coach: "David Kim",
      type: "Flexibility Flow",
      duration: "60 min",
      spots: 6,
      maxSpots: 15,
      location: "Studio C",
    },
    {
      id: 10,
      time: "16:00",
      coach: "Alex Thompson",
      type: "Power Training",
      duration: "60 min",
      spots: 1,
      maxSpots: 8,
      location: "Studio A",
    },
    {
      id: 11,
      time: "17:30",
      coach: "Jessica Martinez",
      type: "Fat Burn HIIT",
      duration: "45 min",
      spots: 5,
      maxSpots: 12,
      location: "Studio B",
    },
    {
      id: 12,
      time: "19:00",
      coach: "David Kim",
      type: "Evening Yoga",
      duration: "60 min",
      spots: 7,
      maxSpots: 15,
      location: "Studio C",
    },
  ],
  "2024-01-17": [
    {
      id: 13,
      time: "06:00",
      coach: "Alex Thompson",
      type: "Early Strength",
      duration: "60 min",
      spots: 2,
      maxSpots: 8,
      location: "Studio A",
    },
    {
      id: 14,
      time: "07:00",
      coach: "Jessica Martinez",
      type: "Cardio Blast",
      duration: "45 min",
      spots: 3,
      maxSpots: 12,
      location: "Studio B",
    },
    {
      id: 15,
      time: "09:30",
      coach: "David Kim",
      type: "Mindful Yoga",
      duration: "60 min",
      spots: 4,
      maxSpots: 15,
      location: "Studio C",
    },
    {
      id: 16,
      time: "12:30",
      coach: "Alex Thompson",
      type: "Midday Strength",
      duration: "45 min",
      spots: 2,
      maxSpots: 6,
      location: "Studio A",
    },
    {
      id: 17,
      time: "17:00",
      coach: "Jessica Martinez",
      type: "HIIT Challenge",
      duration: "45 min",
      spots: 6,
      maxSpots: 12,
      location: "Studio B",
    },
    {
      id: 18,
      time: "18:00",
      coach: "David Kim",
      type: "Restorative Yoga",
      duration: "60 min",
      spots: 9,
      maxSpots: 15,
      location: "Studio C",
    },
  ],
}

const DAYS = [
  { date: "2024-01-15", day: "Monday", dayNum: "15" },
  { date: "2024-01-16", day: "Tuesday", dayNum: "16" },
  { date: "2024-01-17", day: "Wednesday", dayNum: "17" },
  { date: "2024-01-18", day: "Thursday", dayNum: "18" },
  { date: "2024-01-19", day: "Friday", dayNum: "19" },
  { date: "2024-01-20", day: "Saturday", dayNum: "20" },
  { date: "2024-01-21", day: "Sunday", dayNum: "21" },
]

export default function SchedulePage() {
  const [selectedDate, setSelectedDate] = useState("2024-01-15")
  const [selectedSession, setSelectedSession] = useState<number | null>(null)
  const [bookingStep, setBookingStep] = useState<"select" | "confirm" | "success">("select")

  const selectedDaySchedule = SCHEDULE_DATA[selectedDate as keyof typeof SCHEDULE_DATA] || []
  const selectedSessionData = selectedSession ? selectedDaySchedule.find((s) => s.id === selectedSession) : null

  const handleBookSession = () => {
    setBookingStep("confirm")
  }

  const confirmBooking = () => {
    setBookingStep("success")
    setTimeout(() => {
      setBookingStep("select")
      setSelectedSession(null)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b dark:border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-4">
              <ThemeToggle />
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">F</span>
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  FitCoach
                </span>
              </div>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Book Your Training Session</h1>
          <p className="text-xl opacity-90 mb-8">
            Choose from our expert coaches and find the perfect time for your workout
          </p>
        </div>
      </section>

      {bookingStep === "success" ? (
        <section className="py-20">
          <div className="container mx-auto px-4">
            <Card className="max-w-md mx-auto text-center p-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-bold mb-2">Booking Confirmed!</h2>
              <p className="text-gray-600 mb-4">
                Your session has been successfully booked. You'll receive a confirmation email shortly.
              </p>
              {selectedSessionData && (
                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <div className="text-sm text-gray-600">Session Details:</div>
                  <div className="font-medium">{selectedSessionData.type}</div>
                  <div className="text-sm text-gray-600">
                    {DAYS.find((d) => d.date === selectedDate)?.day} at {selectedSessionData.time}
                  </div>
                </div>
              )}
              <Button onClick={() => setBookingStep("select")} className="w-full">
                Book Another Session
              </Button>
            </Card>
          </div>
        </section>
      ) : bookingStep === "confirm" && selectedSessionData ? (
        <section className="py-12">
          <div className="container mx-auto px-4">
            <Card className="max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-center">Confirm Your Booking</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-bold text-lg">Session Details</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Calendar className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium">{DAYS.find((d) => d.date === selectedDate)?.day}</div>
                          <div className="text-sm text-gray-600">
                            January {DAYS.find((d) => d.date === selectedDate)?.dayNum}, 2024
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium">{selectedSessionData.time}</div>
                          <div className="text-sm text-gray-600">{selectedSessionData.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <MapPin className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium">{selectedSessionData.location}</div>
                          <div className="text-sm text-gray-600">FitCoach Studio</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h3 className="font-bold text-lg">Coach & Program</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <User className="h-5 w-5 text-blue-600" />
                        <div>
                          <div className="font-medium">{selectedSessionData.coach}</div>
                          <div className="text-sm text-gray-600">Expert Trainer</div>
                        </div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="font-medium text-blue-900">{selectedSessionData.type}</div>
                        <div className="text-sm text-blue-700">{selectedSessionData.spots} spots remaining</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-lg font-medium">Session Fee:</span>
                    <span className="text-2xl font-bold text-blue-600">
                      {COACHES.find((c) => c.name === selectedSessionData.coach)?.price}
                    </span>
                  </div>
                  <div className="flex space-x-4">
                    <Button variant="outline" onClick={() => setBookingStep("select")} className="flex-1">
                      Back to Schedule
                    </Button>
                    <Button
                      onClick={confirmBooking}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                    >
                      Confirm Booking
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      ) : (
        <>
          {/* Date Selection */}
          <section className="py-8 bg-white dark:bg-slate-900 border-b dark:border-slate-700">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-6 text-center">Select a Date</h2>
              <div className="flex overflow-x-auto space-x-4 pb-4">
                {DAYS.map((day) => (
                  <button
                    key={day.date}
                    onClick={() => setSelectedDate(day.date)}
                    className={`flex-shrink-0 p-4 rounded-lg border-2 transition-all ${
                      selectedDate === day.date
                        ? "border-blue-600 bg-blue-50 dark:bg-blue-900/20 text-blue-600"
                        : "border-gray-200 dark:border-slate-600 hover:border-gray-300 dark:hover:border-slate-500 dark:bg-slate-800"
                    }`}
                  >
                    <div className="text-center">
                      <div className="text-sm text-gray-600">{day.day}</div>
                      <div className="text-2xl font-bold">{day.dayNum}</div>
                      <div className="text-xs text-gray-500">Jan</div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* Schedule Grid */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold">
                  Available Sessions - {DAYS.find((d) => d.date === selectedDate)?.day}
                </h2>
                <Badge className="bg-blue-100 text-blue-700">{selectedDaySchedule.length} sessions available</Badge>
              </div>

              {selectedDaySchedule.length === 0 ? (
                <Card className="p-12 text-center">
                  <div className="text-gray-500 mb-4">
                    <Calendar className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <h3 className="text-xl font-medium mb-2">No sessions available</h3>
                    <p>Please select a different date to view available sessions.</p>
                  </div>
                </Card>
              ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {selectedDaySchedule.map((session) => (
                    <Card
                      key={session.id}
                      className={`hover:shadow-lg transition-all cursor-pointer ${
                        session.spots === 0 ? "opacity-50" : "hover:-translate-y-1"
                      }`}
                      onClick={() => session.spots > 0 && setSelectedSession(session.id)}
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="text-2xl font-bold text-blue-600">{session.time}</div>
                          <Badge
                            className={
                              session.spots === 0
                                ? "bg-red-100 text-red-700"
                                : session.spots <= 2
                                  ? "bg-orange-100 text-orange-700"
                                  : "bg-green-100 text-green-700"
                            }
                          >
                            {session.spots === 0 ? "Full" : `${session.spots} spots left`}
                          </Badge>
                        </div>

                        <h3 className="text-lg font-bold mb-2">{session.type}</h3>

                        <div className="space-y-2 mb-4">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <User className="h-4 w-4" />
                            <span>{session.coach}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Clock className="h-4 w-4" />
                            <span>{session.duration}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <MapPin className="h-4 w-4" />
                            <span>{session.location}</span>
                          </div>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">
                            {session.maxSpots - session.spots}/{session.maxSpots} booked
                          </div>
                          <div className="font-bold text-blue-600">
                            {COACHES.find((c) => c.name === session.coach)?.price}
                          </div>
                        </div>

                        {session.spots > 0 && (
                          <Button
                            className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                            onClick={(e) => {
                              e.stopPropagation()
                              setSelectedSession(session.id)
                              handleBookSession()
                            }}
                          >
                            Book Session
                          </Button>
                        )}
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* Coaches Section */}
          <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold mb-8 text-center">Meet Your Coaches</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {COACHES.map((coach) => (
                  <Card key={coach.id} className="text-center">
                    <CardContent className="p-6">
                      <div className="w-20 h-20 mx-auto mb-4 rounded-full overflow-hidden">
                        <img
                          src={coach.image || "/placeholder.svg"}
                          alt={coach.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-bold text-lg mb-1">{coach.name}</h3>
                      <p className="text-blue-600 font-medium mb-2">{coach.specialty}</p>
                      <div className="flex items-center justify-center space-x-1 mb-2">
                        <span className="text-yellow-500">★</span>
                        <span className="font-medium">{coach.rating}</span>
                      </div>
                      <div className="text-lg font-bold text-gray-900">{coach.price}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>
        </>
      )}
    </div>
  )
}
