"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Play, Users, Clock, ArrowRight, CheckCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

// Dynamic data defined in code
const HERO_DATA = {
  title: "Transform Your Body, Transform Your Life",
  subtitle: "Join thousands who've achieved their fitness goals with our expert coaching and personalized programs",
  stats: [
    { number: "5000+", label: "Happy Clients" },
    { number: "98%", label: "Success Rate" },
    { number: "15+", label: "Expert Coaches" },
    { number: "50+", label: "Programs" },
  ],
}

const PROGRAMS = [
  {
    id: 1,
    slug: "strength-training",
    title: "Strength Training",
    description: "Build muscle, increase power, and transform your physique with our comprehensive strength programs.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    price: "$199",
    features: ["Personal trainer", "Nutrition plan", "Progress tracking", "24/7 support"],
    category: "Strength",
    rating: 4.9,
    students: 1250,
  },
  {
    id: 2,
    slug: "hiit-cardio",
    title: "HIIT Cardio Blast",
    description: "High-intensity interval training to burn fat, boost metabolism, and improve cardiovascular health.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "8 weeks",
    level: "Intermediate",
    price: "$149",
    features: ["Group sessions", "Heart rate monitoring", "Custom workouts", "Recovery plans"],
    category: "Cardio",
    rating: 4.8,
    students: 890,
  },
  {
    id: 3,
    slug: "yoga-flexibility",
    title: "Yoga & Flexibility",
    description: "Improve flexibility, balance, and mental well-being through guided yoga and stretching routines.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "10 weeks",
    level: "All Levels",
    price: "$129",
    features: ["Mindfulness training", "Flexibility assessment", "Stress relief", "Online classes"],
    category: "Wellness",
    rating: 4.9,
    students: 650,
  },
  {
    id: 4,
    slug: "weight-loss",
    title: "Weight Loss Transformation",
    description:
      "Comprehensive program combining cardio, strength training, and nutrition for sustainable weight loss.",
    image: "/placeholder.svg?height=300&width=400",
    duration: "16 weeks",
    level: "All Levels",
    price: "$299",
    features: ["Meal planning", "Weekly check-ins", "Body composition analysis", "Lifestyle coaching"],
    category: "Weight Loss",
    rating: 4.9,
    students: 2100,
  },
]

const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Executive",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "I've never felt stronger or more confident. The personalized approach and constant support made all the difference in my fitness journey.",
    program: "Strength Training",
    result: "Lost 25 lbs, gained muscle",
  },
  {
    id: 2,
    name: "Mike Chen",
    role: "Software Developer",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The HIIT program completely transformed my cardiovascular health. I have more energy throughout the day and sleep better at night.",
    program: "HIIT Cardio Blast",
    result: "Improved endurance by 40%",
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Teacher",
    image: "/placeholder.svg?height=80&width=80",
    rating: 5,
    text: "The yoga program helped me manage stress and improved my flexibility dramatically. It's become an essential part of my daily routine.",
    program: "Yoga & Flexibility",
    result: "Reduced stress, better flexibility",
  },
]

const COACHES = [
  {
    id: 1,
    name: "Alex Thompson",
    specialty: "Strength & Conditioning",
    image: "/placeholder.svg?height=300&width=300",
    experience: "8 years",
    certifications: ["NASM-CPT", "CSCS", "Precision Nutrition"],
    bio: "Former Olympic athlete turned coach, specializing in strength training and athletic performance.",
    rating: 4.9,
    clients: 500,
  },
  {
    id: 2,
    name: "Jessica Martinez",
    specialty: "HIIT & Weight Loss",
    image: "/placeholder.svg?height=300&width=300",
    experience: "6 years",
    certifications: ["ACE-CPT", "HIIT Specialist", "Weight Management"],
    bio: "Passionate about helping clients achieve sustainable weight loss through effective HIIT protocols.",
    rating: 4.8,
    clients: 350,
  },
  {
    id: 3,
    name: "David Kim",
    specialty: "Yoga & Wellness",
    image: "/placeholder.svg?height=300&width=300",
    experience: "10 years",
    certifications: ["RYT-500", "Meditation Teacher", "Wellness Coach"],
    bio: "Combines traditional yoga practices with modern wellness techniques for holistic health.",
    rating: 4.9,
    clients: 400,
  },
]

export default function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm border-b dark:border-slate-700">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">F</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                FitCoach
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Home
              </Link>
              <Link
                href="/programs"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Programs
              </Link>
              <Link
                href="/schedule"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Schedule
              </Link>
              <Link
                href="/contact"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </Link>
              <ThemeToggle />
              <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10 dark:from-blue-600/20 dark:to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="space-y-4">
                <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200">🔥 #1 Fitness Coaching Platform</Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {HERO_DATA.title}
                  </span>
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">{HERO_DATA.subtitle}</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-lg px-8 py-6"
                >
                  Start Your Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 bg-transparent">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
                {HERO_DATA.stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative">
                <Image
                  src="/placeholder.svg?height=600&width=500"
                  alt="Fitness Coach"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                    </div>
                    <div>
                      <div className="font-semibold">Goal Achieved!</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">Sarah lost 25 lbs</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-100 text-purple-700">Our Programs</Badge>
            <h2 className="text-4xl font-bold mb-4">Choose Your Fitness Journey</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Discover our comprehensive fitness programs designed to help you achieve your goals
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {PROGRAMS.map((program, index) => (
              <Card
                key={program.id}
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 ${index % 2 === 0 ? "animate-fade-in-up" : "animate-fade-in-up"}`}
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={program.image || "/placeholder.svg"}
                    alt={program.title}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-white/90 text-gray-700 dark:text-gray-300">
                    {program.category}
                  </Badge>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold">{program.title}</h3>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{program.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{program.description}</p>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Duration:</span>
                      <span className="font-medium">{program.duration}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Level:</span>
                      <span className="font-medium">{program.level}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-500">Students:</span>
                      <span className="font-medium">{program.students}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{program.price}</span>
                    <Link href={`/programs/${program.slug}`}>
                      <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-100 text-blue-700">Success Stories</Badge>
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">Real results from real people</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8 shadow-xl">
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <blockquote className="text-2xl font-medium text-gray-900 dark:text-white mb-6">
                  "{TESTIMONIALS[currentTestimonial].text}"
                </blockquote>
                <div className="flex items-center justify-center space-x-4">
                  <Image
                    src={TESTIMONIALS[currentTestimonial].image || "/placeholder.svg"}
                    alt={TESTIMONIALS[currentTestimonial].name}
                    width={80}
                    height={80}
                    className="rounded-full"
                  />
                  <div className="text-left">
                    <div className="font-bold text-lg">{TESTIMONIALS[currentTestimonial].name}</div>
                    <div className="text-gray-600 dark:text-gray-300">{TESTIMONIALS[currentTestimonial].role}</div>
                    <div className="text-sm text-blue-600 font-medium">
                      {TESTIMONIALS[currentTestimonial].program} • {TESTIMONIALS[currentTestimonial].result}
                    </div>
                  </div>
                </div>
              </div>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {TESTIMONIALS.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-green-100 text-green-700">Expert Team</Badge>
            <h2 className="text-4xl font-bold mb-4">Meet Your Coaches</h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Certified professionals dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {COACHES.map((coach) => (
              <Card key={coach.id} className="group hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={coach.image || "/placeholder.svg"}
                    alt={coach.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-bold mb-1">{coach.name}</h3>
                    <p className="text-blue-600 font-medium">{coach.specialty}</p>
                  </div>

                  <div className="space-y-2 mb-4 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Experience:</span>
                      <span className="font-medium">{coach.experience}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Rating:</span>
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{coach.rating}</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-500">Clients:</span>
                      <span className="font-medium">{coach.clients}+</span>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{coach.bio}</p>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-700 dark:text-gray-300">Certifications:</div>
                    <div className="flex flex-wrap gap-1">
                      {coach.certifications.map((cert, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of satisfied clients and start your fitness journey today
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-6">
              <Users className="mr-2 h-5 w-5" />
              Join Now
            </Button>
            <Link href="/schedule">
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-6 bg-transparent"
              >
                <Clock className="mr-2 h-5 w-5" />
                Book Session
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 dark:bg-slate-950 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">F</span>
                </div>
                <span className="text-xl font-bold">FitCoach</span>
              </div>
              <p className="text-gray-400">Transform your body and mind with our expert fitness coaching programs.</p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Programs</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/programs/strength-training" className="hover:text-white transition-colors">
                    Strength Training
                  </Link>
                </li>
                <li>
                  <Link href="/programs/hiit-cardio" className="hover:text-white transition-colors">
                    HIIT Cardio
                  </Link>
                </li>
                <li>
                  <Link href="/programs/yoga-flexibility" className="hover:text-white transition-colors">
                    Yoga & Flexibility
                  </Link>
                </li>
                <li>
                  <Link href="/programs/weight-loss" className="hover:text-white transition-colors">
                    Weight Loss
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/schedule" className="hover:text-white transition-colors">
                    Schedule
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 hello@fitcoach.com</p>
                <p>📞 (555) 123-4567</p>
                <p>📍 123 Fitness St, Health City</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} FitCoach. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
